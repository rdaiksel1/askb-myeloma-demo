import { useEffect, useState } from 'react';
import ComponentCard from './ComponentCard';

const drugs = [
  { name: 'Tecvayli (J&J)', pct: 55, color: '#E07B00' },
  { name: 'Elrexfio (Pfizer)', pct: 30, color: '#5b9bd5' },
  { name: 'Lynozyfic (Regen)', pct: 17, color: '#9b8ecf' },
];

export default function BispecificShareBars({ onAskASKB, hasQueried, isActiveQuery }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAnimate(true), 100); return () => clearTimeout(t); }, []);

  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="Bispecific market share · 2030 BI model"
      moreLabel="Full Table ›"
      explainer="Tecvayli's 55% physician preference among bispecifics reflects its first-mover advantage and the 2L approval — it moves from a late-line niche to a mainstream choice. Elrexfio's 30% reflects Pfizer's flexible dosing as a differentiator. These shares will shift as real-world 2L data accumulates."
    >
      <div style={{ padding: '12px 16px 16px 16px' }}>
        {drugs.map((d, i) => (
          <div key={d.name} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 12, color: '#d8d8d8' }}>{d.name}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: d.color, fontVariantNumeric: 'tabular-nums' }}>{d.pct}%</span>
            </div>
            <div style={{ height: 8, background: '#252525', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: animate ? `${d.pct}%` : '0%',
                background: d.color,
                borderRadius: 4,
                transition: `width 0.8s ease ${i * 0.1}s`,
              }} />
            </div>
          </div>
        ))}

        <div style={{ marginTop: 12, fontSize: 11, color: '#8a8a8a' }}>
          65% of physicians prefer CAR-T before bispecifics — T-cell exhaustion concern
        </div>

        <div style={{
          marginTop: 10,
          background: '#1f1a10',
          border: '1px solid #3a2a10',
          borderLeft: '3px solid #E07B00',
          borderRadius: 4,
          padding: '8px 12px',
          fontSize: 11,
          color: '#d8d8d8',
        }}>
          Tecvayli 2L use could form 74% of its 2030 US sales if early-line adoption holds
        </div>

        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
