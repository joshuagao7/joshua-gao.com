'use client'

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

interface PaperModalProps {
  paper: Paper | null
  allPapers: Paper[]
  onClose: () => void
  onPaperClick?: (paperId: string) => void
}

export default function PaperModal({
  paper,
  allPapers,
  onClose,
  onPaperClick,
}: PaperModalProps) {
  if (!paper) return null

  const connectedPapers = paper.connections
    .map((id) => allPapers.find((p) => p.id === id))
    .filter((p): p is Paper => p !== undefined)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">{paper.title}</h2>
        <div className="modal-meta">
          <div className="modal-authors">
            <strong>Authors:</strong> {paper.authors.join(', ')}
          </div>
          <div className="modal-year">
            <strong>Year:</strong> {paper.year}
          </div>
        </div>
        <div className="modal-abstract">
          <strong>Abstract:</strong>
          <p>{paper.abstract}</p>
        </div>
        <div className="modal-tags">
          <strong>Tags:</strong>
          <div className="tags-list">
            {paper.tags.map((tag) => (
              <span key={tag} className="tag-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
        {connectedPapers.length > 0 && (
          <div className="modal-connections">
            <strong>Related Papers:</strong>
            <ul className="connections-list">
              {connectedPapers.map((connectedPaper) => (
                <li key={connectedPaper.id}>
                  <button
                    className="connection-link"
                    onClick={() => {
                      if (onPaperClick) {
                        onPaperClick(connectedPaper.id)
                      }
                    }}
                  >
                    {connectedPaper.title} ({connectedPaper.year})
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="modal-actions">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="paper-link-button"
          >
            View Paper →
          </a>
        </div>
      </div>
    </div>
  )
}



