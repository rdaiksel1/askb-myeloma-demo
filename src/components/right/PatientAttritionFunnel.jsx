import ComponentCard from './ComponentCard';

const stages = [
  { label: 'NDMM', patients: '~35,000 pts/yr', note: 'CD38-anchored', width: 100, color: '#E07B00', warn: false },
  { label: '2L', patients: '~18,200 pts', note: '52% progress · CAR-T/bispecific entry', width: 62, color: '#e8a020', warn: true },
  { label: '3L', patients: '~9,500 pts', note: '39% progress · CAR-T 43% considered', width: 38, color: '#4caf82', warn: true },
  { label: '4L', patients: '~3,700 pts', note: '20% of 2L reach 4L · Bispecs 34% · CAR-T 39%', width: 20, color: '#5b9bd5', warn: false },
];

export default function PatientAttritionFunnel({ onAskASKB, hasQueried, isActiveQuery }) {
  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="US patient attrition by line of therapy"
      moreLabel="Full Funnel ›"
      explainer="Only ~10% of newly diagnosed patients reach 4th-line treatment — attrition is steep. This funnel is the structural constraint on late-line CAR-T and bispecific markets. Logistics barriers (cell manufacturing lead times) and cost slow the transition from 2L to 3L more than disease progression does."
    >
      <div style={{ padding: '12px 16px 16px 16px' }}>
        {stages.map((s, i) => (
          <div key={s.label} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 28, fontSize: 11, fontWeight: 600, color: '#8a8a8a', textAlign: 'right', flexShrink: 0 }}>
                {s.label}
              </div>
              <div style={{
                height: 32,
                width: `${s.width}%`,
                background: s.color,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 10,
                fontSize: 12,
                fontWeight: 600,
                color: '#0d0d0d',
                position: 'relative',
                minWidth: 80,
                transition: 'width 0.8s ease',
              }}>
                {s.patients}
              </div>
              <div style={{ fontSize: 11, color: '#8a8a8a', flex: 1 }}>
                {s.warn && <span style={{ color: '#E07B00', marginRight: 4 }}>⚠</span>}
                {s.note}
              </div>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
