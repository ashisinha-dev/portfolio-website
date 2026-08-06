import styles from './Projects.module.css'

const HUB = { x: 195, y: 118 }

const TIER1 = [
  { x: 195, y: 62, color: '#eab308' },
  { x: 236, y: 72, color: '#eab308' },
  { x: 258, y: 105, color: '#38bdf8' },
  { x: 254, y: 142, color: '#eab308' },
  { x: 225, y: 165, color: '#eab308' },
  { x: 185, y: 172, color: '#38bdf8' },
  { x: 148, y: 158, color: '#eab308' },
  { x: 128, y: 125, color: '#eab308' },
  { x: 134, y: 88, color: '#38bdf8' },
  { x: 163, y: 66, color: '#eab308' },
]

const CLUSTER_HUB = TIER1[2]
const CLUSTER = [
  { x: 288, y: 88, color: '#4ade80' },
  { x: 292, y: 118, color: '#fb7185' },
  { x: 275, y: 138, color: '#4ade80' },
]

export default function RepoRadarArt() {
  return (
    <svg
      className={styles.image}
      viewBox="0 0 400 225"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of RepoRadar parsing a repository into a dependency graph and an AI-generated summary"
    >
      <defs>
        <linearGradient id="rr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2536" />
          <stop offset="100%" stopColor="#0b0e16" />
        </linearGradient>
      </defs>

      <rect width="400" height="225" fill="url(#rr-bg)" />

      <g stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6">
        <line x1="70" y1="118" x2="112" y2="118" />
        <line x1="300" y1="112" x2="330" y2="112" />
      </g>
      <g fill="#94a3b8">
        <path d="M 100 113 l 12 5 -12 5 z" />
        <path d="M 322 107 l 12 5 -12 5 z" />
      </g>

      <g transform="translate(14, 82)">
        <rect x="10" y="-6" width="42" height="56" rx="6" fill="#3b4356" />
        <rect x="4" y="0" width="42" height="56" rx="6" fill="#f8f5f1" />
        <path d="M 30 0 L 46 14 L 30 14 Z" fill="#c7d2d9" />
        <rect x="12" y="24" width="26" height="4" rx="2" fill="#94a3b8" />
        <rect x="12" y="33" width="26" height="4" rx="2" fill="#94a3b8" />
        <rect x="12" y="42" width="16" height="4" rx="2" fill="#eab308" />
        <text x="25" y="14" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1e2536" fontFamily="monospace">
          .py
        </text>
      </g>

      <g stroke="#f8f5f1" strokeWidth="1.2" opacity="0.35">
        {TIER1.map((n, i) => (
          <line key={i} x1={HUB.x} y1={HUB.y} x2={n.x} y2={n.y} />
        ))}
      </g>
      <g stroke="#38bdf8" strokeWidth="1" opacity="0.45">
        {CLUSTER.map((n, i) => (
          <line key={i} x1={CLUSTER_HUB.x} y1={CLUSTER_HUB.y} x2={n.x} y2={n.y} />
        ))}
      </g>

      <circle cx={HUB.x} cy={HUB.y} r="11" fill="#f8f5f1" />
      {TIER1.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="6" fill={n.color} />
      ))}
      {CLUSTER.map((n, i) => (
        <circle key={`c${i}`} cx={n.x} cy={n.y} r="4.5" fill={n.color} />
      ))}

      <g transform="translate(336, 76)">
        <rect x="0" y="0" width="48" height="60" rx="6" fill="#f8f5f1" />
        <rect x="8" y="10" width="32" height="4.5" rx="2" fill="#94a3b8" />
        <rect x="8" y="20" width="32" height="4.5" rx="2" fill="#94a3b8" />
        <rect x="8" y="30" width="22" height="4.5" rx="2" fill="#94a3b8" />
        <rect x="8" y="42" width="26" height="12" rx="6" fill="#38bdf8" />
      </g>
    </svg>
  )
}
