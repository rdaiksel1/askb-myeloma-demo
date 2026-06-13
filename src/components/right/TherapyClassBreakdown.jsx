import { useEffect, useRef, useState } from 'react';
import ComponentCard from './ComponentCard';

const therapies = [
  { name: 'CD38 antibodies', pct: 46, value: '$15.2B', color: '#E07B00', note: 'J&J/Sanofi' },
  { name: 'CAR-T therapies', pct: 22, value: '$7.3B', color: '#4caf82', note: '' },
  { name: 'Bispecifics', pct: 18, value: '$5.9B', color: '#5b9bd5', note: '' },
  { name: 'Small molecules', pct: 12, value: '$3.9B', color: '#6a6a7a', note: '↓ generic erosion' },
  { name: 'Other', pct: 2, value: '$0.9B', color: '#4a4a5a', note: '' },
];

export default function TherapyClassBreakdown({ onAskASKB, hasQueried, isActiveQuery }) {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="2030 therapy class breakdown · BI model"
      moreLabel="Full Table ›"
      explainer="By 2030, CD38 antibodies (led by Darzalex) will still dominate at 46% of sales, but the real story is CAR-T and bispecifics together capturing 40% — up from near-zero in 2020. Small molecule erosion (Revlimid generics) creates the headroom these new classes are filling."
    >
      <div style={{ padding: '12px 16px 16px 16px' }}>
        {therapies.map((t, i) => (
          <div key={t.name} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 12, color: '#d8d8d8' }}>{t.name}</span>
              <div style={{ display: 'flex', gap: 12 }}>
                {t.note && <span style={{ fontSize: 11, color: '#8a8a8a' }}>{t.note}</span>}
                <span style={{ fontSize: 12, color: '#e8e8e8', fontVariantNumeric: 'tabular-nums', minWidth: 46, textAlign: 'right' }}>{t.value}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: t.color, minWidth: 32, textAlign: 'right' }}>{t.pct}%</span>
              </div>
            </div>
            <div style={{ height: 8, background: '#252525', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: animate ? `${t.pct}%` : '0%',
                background: t.color,
                borderRadius: 4,
                transition: `width 0.8s ease ${i * 0.1}s`,
              }} />
            </div>
          </div>
        ))}

        <div style={{ marginTop: 12, fontSize: 11, color: '#8a8a8a', borderTop: '1px solid #252525', paddingTop: 10 }}>
          BMS/J&J = 91% of 2023 market. J&J extends lead by 2030.
        </div>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
