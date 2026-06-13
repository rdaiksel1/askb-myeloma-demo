export default function RightPaneHeader({ surfacedByASKB }) {
  return (
    <div style={{
      background: '#1a1a1a',
      border: '1px solid #252525',
      borderRadius: 8,
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
    }}>
      {/* Left: title + analyst */}
      <div style={{ flex: 1 }}>

        {/* Bloomberg Intelligence wordmark + BI badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{
            fontSize: 22,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}>
            Bloomberg Intelligence
          </span>
          {/* BI badge — orange circle, white BI text */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#E07B00',
            color: '#ffffff',
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}>
            BI
          </span>
        </div>

        {/* Sub-title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#E07B00',
            color: '#000000',
            fontSize: 8,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}>BI</span>
          <span style={{ fontSize: 13, color: '#c8c8c8', letterSpacing: '0.01em' }}>
            Multiple Myeloma Disease Hub
          </span>
        </div>

        {/* Sam Fazeli people pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          background: '#111111',
          border: '1px solid #2e2e2e',
          borderRadius: 20,
          padding: '5px 12px 5px 8px',
          marginBottom: 10,
        }}>
          {/* Avatar circle */}
          <span style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: '#2a2a2a',
            border: '1px solid #3a3a3a',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 9,
            fontWeight: 700,
            color: '#e8e8e8',
            flexShrink: 0,
            letterSpacing: 0,
          }}>SF</span>
          {/* Green presence dot */}
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#4caf82',
            flexShrink: 0,
            display: 'inline-block',
          }} />
          <span style={{ fontSize: 12, color: '#e8e8e8', fontWeight: 500 }}>Sam Fazeli</span>
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Bloomberg Intelligence</span>
        </div>

        {/* Title + last updated */}
        <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 2 }}>
          Global Director of Healthcare Research
        </div>
        <div style={{ fontSize: 11, color: '#555555' }}>
          Last updated: June 2026 · 100 hematologists surveyed
        </div>
      </div>

      {/* Right: surfaced pill */}
      <div style={{
        background: surfacedByASKB ? '#2a1a00' : '#1e1e1e',
        border: `1px solid ${surfacedByASKB ? '#E07B00' : '#2e2e2e'}`,
        borderRadius: 20,
        padding: '4px 12px',
        fontSize: 11,
        color: surfacedByASKB ? '#E07B00' : '#8a8a8a',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        whiteSpace: 'nowrap',
        flexShrink: 0,
        marginTop: 4,
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: surfacedByASKB ? '#E07B00' : '#8a8a8a',
          display: 'inline-block',
        }} />
        {surfacedByASKB ? 'Surfaced by ASKB' : 'Opened by user'}
      </div>
    </div>
  );
}
