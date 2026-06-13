import ComponentCard from './ComponentCard';

export default function MarketGrowthChart({ onAskASKB, hasQueried, isActiveQuery }) {
  const width = 800;
  const height = 240;
  const padL = 52, padR = 30, padT = 40, padB = 40;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const years = [2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032];
  const biData = [18.2,20.1,21.8,23.5,24.8,26.2,27.9,29.4,31.2,30.8,33.0,null,null];
  const consData = [18.4,20.3,22.0,23.8,25.2,26.8,28.5,30.2,32.4,34.1,35.0,35.6,36.0];

  const minY = 0, maxY = 40;
  const xScale = i => padL + (i / (years.length - 1)) * chartW;
  const yScale = v => padT + chartH - ((v - minY) / (maxY - minY)) * chartH;

  const biPoints = biData.map((v, i) => v !== null ? [xScale(i), yScale(v)] : null).filter(Boolean);
  const consPoints = consData.map((v, i) => [xScale(i), yScale(v)]);

  const toPath = pts => pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

  const iraStart = 9;
  const iraAreaPts = [];
  for (let i = iraStart; i < biData.length; i++) {
    if (biData[i] !== null) iraAreaPts.push([xScale(i), yScale(biData[i])]);
  }
  const iraBottomPts = [];
  for (let i = biData.length - 1; i >= iraStart; i--) {
    if (biData[i] !== null) iraBottomPts.push([xScale(i), yScale(consData[i])]);
  }

  const iraAreaPath = [...iraAreaPts, ...iraBottomPts].map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`
  ).join(' ') + ' Z';

  const yTicks = [0, 10, 20, 30, 40];
  const iraX = xScale(iraStart);

  return (
    <ComponentCard
      title="Global MM drug market · BI forecast vs consensus 2020–2032"
      moreLabel="Full Model ›"
      explainer="The divergence between BI's orange line and the white consensus line widens after 2029 — the point where IRA price negotiation becomes relevant for Darzalex Faspro. BI models a ~$2B sales impact from a 25-point rebate increase, a risk the street is not yet pricing in."
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
    >
      <div style={{ padding: '0 16px 16px 16px' }}>
        <div style={{ overflowX: 'auto' }}>
          <svg width={width} height={height} style={{ display: 'block' }}>
            {yTicks.map(v => (
              <g key={v}>
                <line
                  x1={padL} y1={yScale(v)} x2={padL + chartW} y2={yScale(v)}
                  stroke="#252525" strokeWidth="1"
                />
                <text x={padL - 6} y={yScale(v) + 4} textAnchor="end" fill="#8a8a8a" fontSize="10">
                  ${v}B
                </text>
              </g>
            ))}

            {years.filter((_, i) => i % 2 === 0).map((yr) => {
              const idx = years.indexOf(yr);
              return (
                <text key={yr} x={xScale(idx)} y={height - 4} textAnchor="middle" fill="#8a8a8a" fontSize="10">
                  {yr}
                </text>
              );
            })}

            <path d={iraAreaPath} fill="#E07B00" fillOpacity="0.12" />

            <line
              x1={iraX} y1={padT} x2={iraX} y2={padT + chartH}
              stroke="#E07B00" strokeWidth="1" strokeDasharray="4,3" opacity="0.6"
            />

            {/* IRA negotiation label — above chart */}
            <text x={iraX + 4} y={padT - 6} fill="#E07B00" fontSize="10" opacity="0.8" paintOrder="stroke" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">IRA negotiation</text>


            <path d={toPath(consPoints)} fill="none" stroke="#e8e8e8" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.5" />

            {/* Street consensus label — clearly above the dashed line */}
            <text x={padL + 10} y={yScale(35) - 6} fill="#e8e8e8" fontSize="10" opacity="0.5" paintOrder="stroke" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">Street consensus</text>

            <path d={toPath(biPoints)} fill="none" stroke="#E07B00" strokeWidth="2" />

            {/* 5.2% CAGR label — above BI line midpoint with more clearance */}
            <text x={xScale(4)} y={yScale(26.2) - 14} fill="#E07B00" fontSize="10" paintOrder="stroke" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">5.2% CAGR</text>

            {biPoints.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#E07B00" />
            ))}
          </svg>
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 8, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 2, background: '#E07B00' }} />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>BI forecast</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 2, background: '#e8e8e8', opacity: 0.5, borderTop: '2px dashed #e8e8e8' }} />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>Street consensus</span>
          </div>
        </div>

        <div style={{
          background: '#1f1a10',
          border: '1px solid #3a2a10',
          borderLeft: '3px solid #E07B00',
          borderRadius: 4,
          padding: '8px 12px',
          fontSize: 11,
          color: '#d8d8d8',
          marginTop: 8,
        }}>
          BI model 12% below consensus — IRA risk on Faspro not fully priced in · <em>Sam Fazeli</em>
        </div>

        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf82', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
