import ComponentCard from './ComponentCard';

const catalysts = [
  { dot: '🔴', label: 'IRA Decision', timing: '2029', desc: 'Darzalex Faspro pricing', impact: 'HIGH IMPACT' },
  { dot: '🔴', label: 'Tecvayli 2L', timing: 'Approved', desc: 'MajecTEC-3: 83% ↓ PFS', impact: 'Bispecific pool risk' },
  { dot: '🟡', label: 'Anito-cel', timing: 'Dec 2026', desc: 'BCMA CAR-T approval', impact: 'Rivals Carvykti safety' },
  { dot: '🟡', label: 'Arlo-cel', timing: '2026 data', desc: 'GPRC5D CAR-T niche', impact: 'Post-BCMA retreatment' },
];

export default function CatalystsGrid({ onAskASKB, hasQueried, isActiveQuery }) {
  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="Key catalysts"
      moreLabel="All Catalysts ›"
      explainer="These four events represent the highest-conviction near-term binary risks and opportunities in the myeloma space. The IRA decision on Faspro is the single event with the largest potential delta to J&J's revenue — it could move consensus by $2B+ depending on how HHS treats the SC formulation."
    >
      <div style={{ padding: '12px 16px 16px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {catalysts.map((c, i) => (
            <div
              key={i}
              className="hover-lift"
              style={{
                background: '#141414',
                border: '1px solid #252525',
                borderRadius: 6,
                padding: '12px 14px',
                cursor: 'default',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 14 }}>{c.dot}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#e8e8e8' }}>{c.label}</span>
                <span style={{
                  fontSize: 10,
                  background: '#222',
                  border: '1px solid #333',
                  borderRadius: 3,
                  padding: '1px 6px',
                  color: '#8a8a8a',
                  marginLeft: 'auto',
                }}>{c.timing}</span>
              </div>
              <div style={{ fontSize: 12, color: '#d8d8d8', marginBottom: 4 }}>{c.desc}</div>
              <div style={{ fontSize: 11, color: '#8a8a8a' }}>{c.impact}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
