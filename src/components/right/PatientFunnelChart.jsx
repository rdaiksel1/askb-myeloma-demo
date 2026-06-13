import ComponentCard from './ComponentCard';

export default function PatientFunnelChart({ onAskASKB, hasQueried, isActiveQuery }) {
  const width = 700;
  const height = 240;
  const padL = 60, padR = 20, padT = 40, padB = 40;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const years = [2024,2025,2026,2027,2028,2029,2030,2031,2032];
  const baseCase = [9800,10200,10700,11200,11600,11900,12000,null,null];
  const scenario = [9800,10100,10400,10200,9800,9300,9000,null,null];
  const highUptake = [9800,10000,10200,9800,9200,8600,8000,null,null];

  const minY = 7000, maxY = 13000;
  const xScale = i => padL + (i / (years.length - 1)) * chartW;
  const yScale = v => padT + chartH - ((v - minY) / (maxY - minY)) * chartH;

  const toPath = pts => pts.filter(Boolean).map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

  const basePts = baseCase.map((v, i) => v !== null ? [xScale(i), yScale(v)] : null);
  const scenPts = scenario.map((v, i) => v !== null ? [xScale(i), yScale(v)] : null);
  const highPts = highUptake.map((v, i) => v !== null ? [xScale(i), yScale(v)] : null);

  const divX = xScale(3);
  const appX = xScale(2);

  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="Treatment-eligible 3L/4L patients · US · 2024–2032"
      moreLabel="Full Model ›"
      explainer="The divergence between the white base-case line and the orange Tecvayli scenario begins in 2027 — two years after 2L approval is fully adopted. The 3,000-patient gap by 2030 doesn't sound large, but at $400K+ per CAR-T course, it represents ~$1.2B in addressable revenue that simply disappears."
    >
      <div style={{ padding: '0 16px 16px 16px' }}>
        <div style={{ overflowX: 'auto' }}>
          <svg width={width} height={height} style={{ display: 'block' }}>
            {[8000,9000,10000,11000,12000].map(v => (
              <g key={v}>
                <line x1={padL} y1={yScale(v)} x2={padL+chartW} y2={yScale(v)} stroke="#252525" strokeWidth="1" />
                <text x={padL-6} y={yScale(v)+4} textAnchor="end" fill="#8a8a8a" fontSize="10">{(v/1000).toFixed(0)}K</text>
              </g>
            ))}

            {years.map((yr, i) => (
              <text key={yr} x={xScale(i)} y={height-4} textAnchor="middle" fill="#8a8a8a" fontSize="10">{yr}</text>
            ))}

            <rect x={divX} y={padT} width={chartW - (divX - padL)} height={chartH}
              fill="#E07B00" fillOpacity="0.05" />

            {/* Bispecific compression window — bottom of shaded area */}
            <text x={divX + 8} y={padT + chartH - 8} fill="#E07B00" fontSize="9" opacity="0.6" paintOrder="stroke" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">Compression window</text>

            <line x1={appX} y1={padT} x2={appX} y2={padT+chartH} stroke="#5b9bd5" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />

            {/* MajecTEC-3 — inside chart area at top, left of line */}
            <text x={appX - 6} y={padT + 14} textAnchor="end" fill="#5b9bd5" fontSize="9" opacity="0.8" paintOrder="stroke" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">MajecTEC-3</text>

            <line x1={xScale(4)} y1={padT} x2={xScale(4)} y2={padT+chartH} stroke="#888" strokeWidth="1" strokeDasharray="2,4" opacity="0.3" />

            {/* 35% 2L share — inside chart area at top, right of line */}
            <text x={xScale(4) + 6} y={padT + 14} textAnchor="start" fill="#888" fontSize="9" opacity="0.6" paintOrder="stroke" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">35% 2L share</text>

            <path d={toPath(basePts)} fill="none" stroke="#e8e8e8" strokeWidth="2" />
            <path d={toPath(scenPts)} fill="none" stroke="#E07B00" strokeWidth="2" />
            <path d={toPath(highPts)} fill="none" stroke="#E07B00" strokeWidth="1.5" strokeDasharray="5,3" />

            {basePts.filter(Boolean).map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="#e8e8e8" />)}
            {scenPts.filter(Boolean).map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="#E07B00" />)}
          </svg>
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 2, background: '#e8e8e8' }} />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>Base case</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 2, background: '#E07B00' }} />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>2L Tecvayli scenario</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 2, background: '#E07B00', opacity: 0.6 }} />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>High uptake</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
          <div style={{ background: '#222', border: '1px solid #333', borderRadius: 4, padding: '4px 10px', fontSize: 11, color: '#e8e8e8' }}>
            4L base: ~4,000 pts
          </div>
          <span style={{ color: '#e05252', fontSize: 11, display: 'flex', alignItems: 'center' }}>→</span>
          <div style={{ background: '#2a1010', border: '1px solid #3a2020', borderRadius: 4, padding: '4px 10px', fontSize: 11, color: '#e05252' }}>
            4L high uptake: ~2,600 pts
          </div>
        </div>

        <div style={{ fontSize: 11, color: '#8a8a8a', marginTop: 8 }}>
          No modeled scenario returns to baseline by 2040
        </div>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
