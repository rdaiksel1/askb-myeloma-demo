import ComponentCard from './ComponentCard';

function Node({ label, pct, color, textColor = '#0d0d0d' }) {
  return (
    <div style={{
      background: color,
      borderRadius: 20,
      padding: '5px 12px',
      fontSize: 11,
      fontWeight: 600,
      color: textColor,
      whiteSpace: 'nowrap',
      display: 'inline-block',
    }}>
      {label}{pct ? ` ${pct}` : ''}
    </div>
  );
}

function Arrow() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0 6px',
      color: '#555',
      fontSize: 14,
    }}>→</div>
  );
}

export default function TherapySequencingMap({ onAskASKB, hasQueried, isActiveQuery }) {
  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="Therapy sequencing map · typical US patient flow"
      moreLabel="Full Map ›"
      explainer="This flow captures how the myeloma treatment landscape has fragmented across lines. The key clinical insight: post-BCMA, GPRC5D-targeting (Talvey) is the preferred option for both CAR-T and bispecific-exposed patients — making it a durable late-line franchise even as earlier lines crowd. 41% physician preference in an uncontested niche is commercially significant."
    >
      <div style={{ padding: '12px 16px 16px 16px' }}>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, minWidth: 700 }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ fontSize: 10, color: '#8a8a8a', marginBottom: 4 }}>NDMM</div>
              <Node label="New diagnosis" color="#333" textColor="#e8e8e8" />
            </div>

            <Arrow />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ fontSize: 10, color: '#8a8a8a', marginBottom: 4 }}>1L</div>
              <Node label="Darzalex quad" pct="66%" color="#E07B00" />
            </div>

            <Arrow />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ fontSize: 10, color: '#8a8a8a', marginBottom: 4 }}>2L</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Node label="CAR-T" pct="60%" color="#4caf82" />
                <Node label="Tecvayli+Dara" pct="18%" color="#5b9bd5" textColor="#fff" />
                <Node label="CD38 re-tx" pct="12%" color="#3a3a3a" textColor="#e8e8e8" />
              </div>
            </div>

            <Arrow />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ fontSize: 10, color: '#8a8a8a', marginBottom: 4 }}>3L</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Node label="Remaining CAR-T" color="#4caf82" />
                <Node label="Talvey" pct="41%" color="#9b8ecf" textColor="#fff" />
              </div>
            </div>

            <Arrow />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ fontSize: 10, color: '#8a8a8a', marginBottom: 4 }}>4L</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Node label="Bispecifics" pct="34%" color="#5b9bd5" textColor="#fff" />
                <Node label="CAR-T" pct="39%" color="#4caf82" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
