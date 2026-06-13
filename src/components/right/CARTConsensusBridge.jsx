import ComponentCard from './ComponentCard';

function BridgeChart({ title, consensus, adj, adjLabel, final, color }) {
  const maxVal = 4;
  const scaleW = v => Math.abs(v) / maxVal * 100;

  return (
    <div style={{ background: '#141414', border: '1px solid #252525', borderRadius: 6, padding: '12px 14px', flex: 1 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: '#e8e8e8', marginBottom: 12 }}>{title}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div>
          <div style={{ fontSize: 10, color: '#8a8a8a', marginBottom: 3 }}>Consensus</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ height: 20, width: `${scaleW(consensus)}%`, background: '#444', borderRadius: 3 }} />
            <span style={{ fontSize: 11, color: '#e8e8e8', fontVariantNumeric: 'tabular-nums' }}>${consensus}B</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 10, color: '#8a8a8a', marginBottom: 3 }}>{adjLabel}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ height: 20, width: `${scaleW(Math.abs(adj))}%`, background: adj < 0 ? '#e05252' : '#4caf82', borderRadius: 3 }} />
            <span style={{ fontSize: 11, color: adj < 0 ? '#e05252' : '#4caf82', fontVariantNumeric: 'tabular-nums' }}>
              {adj > 0 ? '+' : ''}{adj}B
            </span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 10, color: '#8a8a8a', marginBottom: 3 }}>BI model</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ height: 20, width: `${scaleW(final)}%`, background: color, borderRadius: 3 }} />
            <span style={{ fontSize: 11, fontWeight: 600, color, fontVariantNumeric: 'tabular-nums' }}>${final}B</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CARTConsensusBridge({ onAskASKB, hasQueried, isActiveQuery }) {
  return (
    <ComponentCard
      title="CAR-T consensus bridge · BI model adjustments"
      moreLabel="Full Model ›"
      explainer="The bridge charts show the precise mechanism of BI's CAR-T disagreement with consensus: for Carvykti, the entire gap is bispecific compression; for Anito-cel, a safety edge nearly offsets the compression. Gilead's anito-cel is BI's highest-conviction CAR-T differentiation call."
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
    >
      <div style={{ padding: '12px 16px 16px 16px' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <BridgeChart
            title="Carvykti (J&J/Legend)"
            consensus={3.3}
            adj={-1.0}
            adjLabel="Bispecific compression"
            final={2.3}
            color="#E07B00"
          />
          <BridgeChart
            title="Anito-cel (Gilead)"
            consensus={3.0}
            adj={0.1}
            adjLabel="Safety advantage"
            final={3.1}
            color="#4caf82"
          />
        </div>

        <div style={{
          marginTop: 12,
          background: '#1f1a10',
          border: '1px solid #3a2a10',
          borderLeft: '3px solid #E07B00',
          borderRadius: 4,
          padding: '8px 12px',
          fontSize: 11,
          color: '#d8d8d8',
        }}>
          35% 2L bispecific share by 2028 is the structural threshold. Above it, the late-line CAR-T funnel shifts permanently. — <em>Max Nisen, BI</em>
        </div>

        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf82', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
