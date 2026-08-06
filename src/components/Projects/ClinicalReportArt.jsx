import styles from './Projects.module.css'

export default function ClinicalReportArt() {
  return (
    <svg
      className={styles.image}
      viewBox="0 0 400 225"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of a clinical reporting dashboard"
    >
      <defs>
        <linearGradient id="crp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f3d4a" />
          <stop offset="100%" stopColor="#0a1620" />
        </linearGradient>
        <linearGradient id="crp-doc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8f5f1" />
          <stop offset="100%" stopColor="#e4ecec" />
        </linearGradient>
      </defs>

      <rect width="400" height="225" fill="url(#crp-bg)" />
      <circle cx="30" cy="200" r="80" fill="#2dd4bf" opacity="0.14" />
      <circle cx="370" cy="20" r="70" fill="#38bdf8" opacity="0.14" />

      <g transform="translate(58, 32)">
        <rect x="0" y="0" width="130" height="160" rx="10" fill="url(#crp-doc)" />
        <rect x="40" y="-8" width="50" height="18" rx="5" fill="#2dd4bf" />

        <rect x="18" y="34" width="94" height="7" rx="3.5" fill="#c3d2d2" />
        <rect x="18" y="50" width="94" height="7" rx="3.5" fill="#c3d2d2" />
        <rect x="18" y="66" width="60" height="7" rx="3.5" fill="#c3d2d2" />

        <polyline
          points="14,110 34,110 42,90 54,132 64,104 76,110 116,110"
          fill="none"
          stroke="#0f766e"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect x="18" y="140" width="60" height="7" rx="3.5" fill="#c3d2d2" />
        <rect x="86" y="140" width="26" height="7" rx="3.5" fill="#22c58b" />
      </g>

      <g transform="translate(255, 75)">
        <ellipse cx="0" cy="0" rx="34" ry="12" fill="#2dd4bf" opacity="0.9" />
        <path d="M -34 0 L -34 40 A 34 12 0 0 0 34 40 L 34 0" fill="#0f766e" opacity="0.9" />
        <ellipse cx="0" cy="40" rx="34" ry="12" fill="#2dd4bf" opacity="0.9" />
      </g>

      <g transform="translate(275, 150)" stroke="#f8f5f1" strokeWidth="6" strokeLinecap="round" fill="none">
        <circle cx="0" cy="0" r="22" fill="#0a1620" />
        <circle cx="0" cy="0" r="22" stroke="#38bdf8" />
        <line x1="16" y1="16" x2="34" y2="34" />
      </g>
    </svg>
  )
}
