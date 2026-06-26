export default function AutosDemo() {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 12,
      color: '#3a3a3a',
    }}>
      <span style={{ fontSize: 28, opacity: 0.3 }}>⬡</span>
      <div style={{ fontSize: 13, color: '#4a4a4a', fontWeight: 600, letterSpacing: '0.04em' }}>
        AUTO INDUSTRY
      </div>
      <div style={{ fontSize: 11, color: '#333', letterSpacing: '0.02em' }}>
        Coming soon
      </div>
    </div>
  );
}
