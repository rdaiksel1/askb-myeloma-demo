const MODES = [
  { id: 'myeloma', label: 'Multiple Myeloma' },
  { id: 'autos',   label: 'Auto Industry' },
];

export default function TopChrome({ activeMode, onModeChange }) {
  return (
    <div style={{
      height: 44,
      background: '#1a1a1a',
      borderBottom: '1px solid #2a2a2a',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      gap: 12,
      flexShrink: 0,
      zIndex: 10,
    }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', letterSpacing: '0.01em' }}>
        ASKB (Beta) by Bloomberg AI
      </span>

      <div style={{ flex: 1 }} />

      {/* Mode toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#111111',
        border: '1px solid #2a2a2a',
        borderRadius: 6,
        padding: 2,
        gap: 2,
      }}>
        {MODES.map(mode => {
          const active = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => onModeChange(mode.id)}
              style={{
                background: active ? '#2a2a2a' : 'transparent',
                border: 'none',
                borderRadius: 4,
                padding: '4px 12px',
                fontSize: 11,
                fontWeight: active ? 600 : 400,
                color: active ? '#e8e8e8' : '#555',
                cursor: active ? 'default' : 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.01em',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#aaa'; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#555'; }}
            >
              {mode.label}
            </button>
          );
        })}
      </div>

      {/* Window controls */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        {['≡', '□', '×'].map((sym, i) => (
          <span key={i} style={{ fontSize: 14, color: '#555555', cursor: 'default', lineHeight: 1 }}>
            {sym}
          </span>
        ))}
      </div>
    </div>
  );
}
