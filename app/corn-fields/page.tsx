import Link from 'next/link'

/** Served from `public/corn/corn-fields.pdf` (same source as `documents/corn/Corn Fields.pdf`). */
const CORN_FIELDS_PDF = '/corn/corn-fields.pdf'

export default function CornFieldsPage() {
  return (
    <main className="page gallery-page corn-fields-pdf-page">
      <div className="gallery-header">
        <Link href="/" className="gallery-back-link">
          Back to home
        </Link>
        <h1 className="name gallery-title">Corn Fields</h1>
        <p className="corn-fields-pdf-actions">
          <a href={CORN_FIELDS_PDF} target="_blank" rel="noopener noreferrer">
            Open PDF in new tab
          </a>
        </p>
      </div>
      <iframe
        title="Corn Fields — PDF"
        src={CORN_FIELDS_PDF}
        className="corn-fields-pdf-frame"
      />
    </main>
  )
}
