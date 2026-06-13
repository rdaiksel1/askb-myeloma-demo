export default function SourceChip({ analyst, firm, showDot, dotColor }) {
  return (
    <span className="source-chip">
      {showDot && (
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: dotColor || '#4caf82',
            flexShrink: 0,
            display: 'inline-block',
          }}
        />
      )}
      <span style={{ color: showDot ? '#d0d0d0' : '#999999', fontWeight: showDot ? 500 : 400 }}>
        {analyst}
      </span>
      {firm && (
        <span style={{ color: '#666666', fontWeight: 400 }}> {firm}</span>
      )}
    </span>
  );
}
