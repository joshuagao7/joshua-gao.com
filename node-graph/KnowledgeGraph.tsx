'use client'

import { useCallback, useMemo, useState, useEffect, useRef } from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import papersData from './papers.json'

interface Paper {
  id: string
  title: string
  authors: string[]
  year: number
  url: string
  abstract: string
  tags: string[]
  connections: string[]
}

interface GraphNode {
  id: string
  title: string
  authors: string[]
  year: number
  url: string
  abstract: string
  tags: string[]
  val: number
  color?: string
}

interface GraphLink {
  source: string
  target: string
}

interface KnowledgeGraphProps {
  onNodeClick?: (paper: Paper) => void
  searchQuery?: string
  selectedTags?: string[]
}

const tagColors: Record<string, string> = {
  'AI': '#667eea',
  'Machine Learning': '#764ba2',
  'NLP': '#f093fb',
  'Transformers': '#4facfe',
  'BERT': '#43e97b',
  'GPT': '#fa709a',
  'Language Models': '#fee140',
  'Scaling': '#30cfd0',
  'Neural Networks': '#a8edea',
}

export default function KnowledgeGraph({
  onNodeClick,
  searchQuery = '',
  selectedTags = [],
}: KnowledgeGraphProps) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [graphDimensions, setGraphDimensions] = useState({ width: 600, height: 600 })
  const fgRef = useRef<any>()
  const containerRef = useRef<HTMLDivElement>(null)

  const papers = useMemo(() => papersData.papers as Paper[], [])

  // Update graph dimensions when container size changes
  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
          setGraphDimensions({ width: rect.width, height: rect.height })
        }
      }
      updateDimensions()
      window.addEventListener('resize', updateDimensions)
      return () => window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  // Filter papers based on search and tags
  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      const matchesSearch =
        searchQuery === '' ||
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.authors.some((author) =>
          author.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        paper.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => paper.tags.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [papers, searchQuery, selectedTags])

  const graphData = useMemo(() => {
    const nodes: GraphNode[] = filteredPapers.map((paper) => {
      const connectionCount = paper.connections.filter((connId) =>
        filteredPapers.some((p) => p.id === connId)
      ).length

      const primaryTag = paper.tags[0] || 'AI'
      const color = tagColors[primaryTag] || '#667eea'

      return {
        id: paper.id,
        title: paper.title,
        authors: paper.authors,
        year: paper.year,
        url: paper.url,
        abstract: paper.abstract,
        tags: paper.tags,
        val: Math.max(3, connectionCount * 2 + 3),
        color,
      }
    })

    const links: GraphLink[] = []
    filteredPapers.forEach((paper) => {
      paper.connections.forEach((targetId) => {
        if (filteredPapers.some((p) => p.id === targetId)) {
          links.push({
            source: paper.id,
            target: targetId,
          })
        }
      })
    })

    return { nodes, links }
  }, [filteredPapers])

  const handleNodeClick = useCallback(
    (node: GraphNode) => {
      const paper = papers.find((p) => p.id === node.id)
      if (paper && onNodeClick) {
        onNodeClick(paper)
      }
    },
    [papers, onNodeClick]
  )

  // Continuous floating animation and mouse interaction
  useEffect(() => {
    if (!fgRef.current) return

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01
      
      const nodes = graphData.nodes || []
      const graph = fgRef.current
      
      // Get graph dimensions and transform for coordinate conversion
      const width = graphDimensions.width
      const height = graphDimensions.height
      const zoom = graph?.zoom() || 1
      
      nodes.forEach((node: any) => {
        if (!node.fx && !node.fy && node.x !== undefined && node.y !== undefined) {
          // Subtle floating animation
          const angle = (node.id.charCodeAt(0) * 100 + time * 0.5) % (Math.PI * 2)
          const force = 0.05 // Very subtle floating force
          node.vx = (node.vx || 0) + Math.cos(angle) * force
          node.vy = (node.vy || 0) + Math.sin(angle) * force
          
          // Mouse interaction - push nodes away from mouse
          if (mousePos) {
            // Convert node's graph coordinates to screen coordinates for comparison
            const nodeScreenX = (node.x * zoom) + width / 2
            const nodeScreenY = (node.y * zoom) + height / 2
            
            const dx = mousePos.x - nodeScreenX
            const dy = mousePos.y - nodeScreenY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 120 // Interaction radius in screen pixels

            if (distance < maxDistance && distance > 0) {
              // Repulsion force - stronger when closer
              const forceStrength = (maxDistance - distance) / maxDistance * 0.6
              const angle = Math.atan2(dy, dx)
              
              // Apply force in graph coordinate space
              node.vx = (node.vx || 0) - (Math.cos(angle) * forceStrength) / zoom
              node.vy = (node.vy || 0) - (Math.sin(angle) * forceStrength) / zoom
            }
          }
        }
      })

      // Keep the simulation running
      graph?.d3ReheatSimulation()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [graphData, mousePos, graphDimensions])

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (!fgRef.current) return
    
    const rect = event.currentTarget.getBoundingClientRect()
    const screenX = event.clientX - rect.left
    const screenY = event.clientY - rect.top
    
    // Store screen coordinates - we'll convert them in the animation loop
    // using the actual node positions
    setMousePos({ x: screenX, y: screenY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos(null)
    setHoveredNode(null)
  }, [])

  const handleNodeHover = useCallback((node: GraphNode | null) => {
    setHoveredNode(node?.id || null)
    
    if (node && fgRef.current) {
      // Highlight hovered node by making it slightly larger
      const nodes = graphData.nodes
      const targetNode = nodes.find((n: any) => n.id === node.id)
      if (targetNode) {
        targetNode.val = (targetNode.val || 0) * 1.3
      }
    }
  }, [graphData])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '600px', position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeLabel={(node: GraphNode) =>
          `${node.title} (${node.year})\n${node.authors.join(', ')}`
        }
        nodeColor={(node: GraphNode) => {
          if (hoveredNode === node.id) {
            // Brighten hovered node
            return node.color || '#667eea'
          }
          return node.color || '#667eea'
        }}
        nodeVal={(node: GraphNode) => {
          // Make hovered node slightly larger
          if (hoveredNode === node.id) {
            return (node.val || 0) * 1.2
          }
          return node.val
        }}
        linkColor={() => 'rgba(102, 126, 234, 0.3)'}
        linkWidth={1.5}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        cooldownTicks={0}
        onEngineStop={() => {
          // Keep simulation running for continuous animation
          if (fgRef.current) {
            fgRef.current.d3ReheatSimulation()
          }
        }}
        nodeCanvasObjectMode={() => 'after'}
        nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D) => {
          const label = node.title
          const fontSize = 11
          ctx.font = `${fontSize}px Sans-Serif`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          
          // Highlight hovered node text
          if (hoveredNode === node.id) {
            ctx.fillStyle = '#667eea'
            ctx.font = `bold ${fontSize}px Sans-Serif`
          } else {
            ctx.fillStyle = '#333'
          }
          
          // Truncate long titles
          const maxWidth = 120
          const metrics = ctx.measureText(label)
          const truncatedLabel = metrics.width > maxWidth 
            ? label.substring(0, Math.floor(label.length * maxWidth / metrics.width)) + '...'
            : label
          
          if (node.x !== undefined && node.y !== undefined) {
            ctx.fillText(truncatedLabel, node.x, node.y + (node.val || 0) + 8)
          }
        }}
        enableZoomInteraction={true}
        enablePanInteraction={true}
      />
    </div>
  )
}

