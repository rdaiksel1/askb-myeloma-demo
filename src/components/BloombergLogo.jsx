export default function BloombergLogo({ size = 28 }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 40 48" fill="none">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D4820A"/>
          <stop offset="100%" stopColor="#C06A00"/>
        </radialGradient>
      </defs>
      {/* Teardrop shape: circle top with pointed bottom */}
      <path d="M20 2 C9 2 2 9.5 2 19 C2 28 8 34 14 39 L20 46 L26 39 C32 34 38 28 38 19 C38 9.5 31 2 20 2 Z" fill="url(#bgGrad)"/>
      {/* White B letterform */}
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="18" fontWeight="800" fontFamily="Arial, sans-serif">B</text>
    </svg>
  )
}
