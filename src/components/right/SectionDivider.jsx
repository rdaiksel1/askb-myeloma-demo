export default function SectionDivider({ title }) {
  return (
    <div style={{
      borderLeft: '3px solid #E07B00',
      paddingLeft: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#e8e8e8' }}>{title}</div>
      </div>
      <div style={{
        background: '#2a1a00',
        border: '1px solid #E07B00',
        borderRadius: 20,
        padding: '3px 10px',
        fontSize: 11,
        color: '#E07B00',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E07B00', display: 'inline-block' }} />
        Surfaced by ASKB
      </div>
    </div>
  );
}
