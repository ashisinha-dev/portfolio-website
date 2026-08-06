import styles from './Projects.module.css'

export default function TicTacToeArt() {
  return (
    <svg
      className={styles.image}
      viewBox="0 0 400 225"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of a Tic-Tac-Toe board"
    >
      <defs>
        <linearGradient id="ttt-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3243f" />
          <stop offset="100%" stopColor="#3a1420" />
        </linearGradient>
        <linearGradient id="ttt-mark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8f5f1" />
          <stop offset="100%" stopColor="#d6536d" />
        </linearGradient>
      </defs>

      <rect width="400" height="225" fill="url(#ttt-bg)" />
      <circle cx="60" cy="30" r="70" fill="#d6536d" opacity="0.18" />
      <circle cx="355" cy="195" r="90" fill="#d6536d" opacity="0.14" />

      <g transform="translate(140, 42.5)">
        <rect x="93.3" y="0" width="46.7" height="46.7" fill="#fde78a" />

        <g stroke="#f8f5f1" strokeWidth="4" strokeLinecap="round" opacity="0.9">
          <line x1="46.7" y1="0" x2="46.7" y2="140" />
          <line x1="93.3" y1="0" x2="93.3" y2="140" />
          <line x1="0" y1="46.7" x2="140" y2="46.7" />
          <line x1="0" y1="93.3" x2="140" y2="93.3" />
        </g>

        <g stroke="url(#ttt-mark)" strokeWidth="6" strokeLinecap="round" fill="none">
          <g transform="translate(23.3, 23.3)">
            <circle r="15" />
          </g>
          <g transform="translate(70, 23.3)">
            <line x1="-13" y1="-13" x2="13" y2="13" />
            <line x1="13" y1="-13" x2="-13" y2="13" />
          </g>
          <g transform="translate(70, 70)">
            <line x1="-13" y1="-13" x2="13" y2="13" />
            <line x1="13" y1="-13" x2="-13" y2="13" />
          </g>
          <g transform="translate(23.3, 116.7)">
            <line x1="-13" y1="-13" x2="13" y2="13" />
            <line x1="13" y1="-13" x2="-13" y2="13" />
          </g>
          <g transform="translate(70, 116.7)">
            <circle r="15" />
          </g>
          <g transform="translate(116.7, 116.7)">
            <circle r="15" />
          </g>
        </g>
      </g>
    </svg>
  )
}
