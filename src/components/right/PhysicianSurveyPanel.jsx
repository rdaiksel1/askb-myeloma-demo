import ComponentCard from './ComponentCard';

export default function PhysicianSurveyPanel({ onAskASKB, hasQueried, isActiveQuery }) {
  const cx = 60, cy = 60, r = 45, strokeW = 16;
  const circumference = 2 * Math.PI * r;
  const segments = [
    { pct: 60, color: '#4caf82', label: 'CAR-T' },
    { pct: 18, color: '#5b9bd5', label: 'Tecvayli+Dara' },
    { pct: 12, color: '#E07B00', label: 'CD38' },
    { pct: 10, color: '#4a4a5a', label: 'Other' },
  ];

  let offset = 0;
  const donutArcs = segments.map(s => {
    const len = (s.pct / 100) * circumference;
    const arc = { ...s, offset, len };
    offset += len;
    return arc;
  });

  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="Physician survey · BI hematologist panel"
      moreLabel="Full Survey ›"
      explainer="BI surveys 100 hematologists quarterly. The front-line adoption number (66%) reflects how completely Darzalex has become the default backbone therapy. The 2L donut shows physicians increasingly prefer CAR-T before bispecifics — a sequencing preference with major commercial consequences for Carvykti vs. Tecvayli."
    >
      <div style={{ display: 'flex', gap: 10, padding: '12px 16px 16px 16px' }}>
        {/* Left panel */}
        <div style={{
          background: '#111',
          border: '1px solid #252525',
          borderRadius: 6,
          padding: '14px 16px',
          flex: 1,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#e8e8e8', marginBottom: 12 }}>
            Darzalex front-line penetration
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#E07B00', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>
            66%
          </div>
          <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 12 }}>
            &gt;75% in Europe · &gt;50% now use Darzalex in maintenance
          </div>
          <div style={{ position: 'relative', height: 10, background: '#252525', borderRadius: 5, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', height: '100%', width: '55%', background: '#333', borderRadius: 5 }} />
            <div style={{ position: 'absolute', height: '100%', width: '66%', background: '#E07B00', borderRadius: 5, opacity: 0.9 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 10, color: '#8a8a8a' }}>Prior: 55%</span>
            <span style={{ fontSize: 10, color: '#E07B00' }}>Now: 66%</span>
          </div>
          <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
            <span className="dot dot-green" />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
          </div>
        </div>

        {/* Right panel */}
        <div style={{
          background: '#111',
          border: '1px solid #252525',
          borderRadius: 6,
          padding: '14px 16px',
          flex: 1,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#e8e8e8', marginBottom: 12 }}>
            2L sequencing preference
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              {donutArcs.map((arc, i) => (
                <circle
                  key={i}
                  cx={cx} cy={cy} r={r}
                  fill="none"
                  stroke={arc.color}
                  strokeWidth={strokeW}
                  strokeDasharray={`${arc.len} ${circumference - arc.len}`}
                  strokeDashoffset={-arc.offset}
                  transform={`rotate(-90 ${cx} ${cy})`}
                />
              ))}
              <text x={cx} y={cy - 4} textAnchor="middle" fill="#e8e8e8" fontSize="13" fontWeight="700" paintOrder="stroke" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">60%</text>
              <text x={cx} y={cy + 10} textAnchor="middle" fill="#8a8a8a" fontSize="9" paintOrder="stroke" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">CAR-T</text>
            </svg>
            <div>
              {segments.map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: s.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: '#d8d8d8' }}>{s.label}</span>
                  <span style={{ fontSize: 11, color: '#8a8a8a', marginLeft: 'auto' }}>{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: '#8a8a8a' }}>
            65% prefer CAR-T before bispecifics
          </div>
          <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
            <span className="dot dot-green" />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
