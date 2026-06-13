import { useEffect, useState } from 'react';
import ComponentCard from './ComponentCard';

const bars = [
  { label: '2023 J&J myeloma base', value: 10.9, type: 'start', color: '#E07B00' },
  { label: '+ Darzalex maintenance lift', value: 2.8, type: 'positive', color: '#4caf82' },
  { label: '+ Carvykti ramp', value: 2.1, type: 'positive', color: '#4caf82' },
  { label: '+ Tecvayli/Talvey', value: 1.9, type: 'positive', color: '#4caf82' },
  { label: '− Generic/LOE pressure', value: -0.8, type: 'negative', color: '#e05252' },
  { label: '− IRA rebate impact', value: -2.0, type: 'negative', color: '#e05252' },
  { label: '= 2030 BI total', value: 14.9, type: 'total', color: '#E07B00' },
];

export default function JJRevenueWaterfall({ onAskASKB, hasQueried, isActiveQuery }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  const maxVal = 20;
  const scaleW = v => Math.abs(v) / maxVal * 100;
  const consW = 26.9 / maxVal * 100;

  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="J&J myeloma revenue waterfall · 2023→2030 BI model"
      moreLabel="Full Model ›"
      explainer="Despite the IRA headwind, J&J's myeloma revenue still grows from $10.9B to $14.9B by 2030 — a 37% increase — because Carvykti, Tecvayli, and Talvey together offset the Darzalex rebate drag. The $12B gap vs. consensus ($26.9B) is almost entirely the IRA risk the street hasn't modeled."
    >
      <div style={{ padding: '12px 16px 16px 16px' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: `${consW}%`,
            top: 0,
            bottom: 0,
            borderLeft: '1px dashed #e8e8e8',
            opacity: 0.3,
            pointerEvents: 'none',
            zIndex: 1,
          }} />

          {bars.map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ fontSize: 11, color: '#8a8a8a', width: 200, flexShrink: 0, textAlign: 'right' }}>
                {b.label}
              </div>
              <div style={{ flex: 1, height: 22, position: 'relative' }}>
                <div style={{
                  height: '100%',
                  width: animate ? `${scaleW(b.value)}%` : '0%',
                  background: b.color,
                  borderRadius: 3,
                  transition: `width 0.6s ease ${i * 0.1}s`,
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: 8,
                }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#0d0d0d', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
                    {b.value > 0 ? '+' : ''}{b.value}B
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11, color: '#8a8a8a', marginTop: 10, paddingTop: 10, borderTop: '1px solid #252525' }}>
          Consensus $26.9B includes Darzalex at 62% of 2030 sales — BI materially more cautious on IRA impact
        </div>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
