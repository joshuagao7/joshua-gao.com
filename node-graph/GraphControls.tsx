'use client'

import { useState, useMemo } from 'react'
import papersData from './papers.json'

interface Paper {
  tags: string[]
}

interface GraphControlsProps {
  onSearchChange: (query: string) => void
  onTagsChange: (tags: string[]) => void
}

export default function GraphControls({
  onSearchChange,
  onTagsChange,
}: GraphControlsProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>()
    papersData.papers.forEach((paper: Paper) => {
      paper.tags.forEach((tag) => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearchChange(query)
  }

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]
    setSelectedTags(newTags)
    onTagsChange(newTags)
  }

  const handleReset = () => {
    setSearchQuery('')
    setSelectedTags([])
    onSearchChange('')
    onTagsChange([])
  }

  return (
    <div className="graph-controls">
      <div className="controls-row">
        <input
          type="text"
          placeholder="Search papers by title, author, or tag..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
      <div className="tags-container">
        <div className="tags-label">Filter by tags:</div>
        <div className="tags-list">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`tag-button ${
                selectedTags.includes(tag) ? 'active' : ''
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}



