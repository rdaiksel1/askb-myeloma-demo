export default function TopChrome() {
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
      <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', letterSpacing: '0.01em' }}>ASKB (Beta) by Bloomberg AI</span>

      <div style={{ flex: 1 }} />

      {/* Decorative window controls */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        {['≡', '□', '×'].map((sym, i) => (
          <span key={i} style={{
            fontSize: 14,
            color: '#555555',
            cursor: 'default',
            lineHeight: 1,
          }}>{sym}</span>
        ))}
      </div>
    </div>
  );
}
