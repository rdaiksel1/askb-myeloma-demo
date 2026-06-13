import ComponentCard from './ComponentCard';

export default function RebateScenarioChart({ onAskASKB, hasQueried, isActiveQuery }) {
  const width = 740;
  const height = 220;
  const padL = 52, padR = 30, padT = 30, padB = 36;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const years = [2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032];
  const baseline = [9.7,10.9,12.1,13.2,14.3,15.1,15.8,16.2,16.5,null,null];
  const ira = [9.7,10.9,12.1,13.2,14.3,15.1,15.8,15.1,14.7,null,null];
  const consLine = 16.7;

  const minY = 8, maxY = 20;
  const xScale = i => padL + (i / (years.length - 1)) * chartW;
  const yScale = v => padT + chartH - ((v - minY) / (maxY - minY)) * chartH;

  const baselinePoints = baseline.map((v, i) => v !== null ? [xScale(i), yScale(v)] : null).filter(Boolean);
  const iraPoints = ira.map((v, i) => v !== null ? [xScale(i), yScale(v)] : null).filter(Boolean);

  const toPath = pts => pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

  const iraIdx = 7;
  const redZoneTop = [[xScale(iraIdx), yScale(baseline[iraIdx])], [xScale(iraIdx+1), yScale(baseline[iraIdx+1])]];
  const redZoneBottom = [[xScale(iraIdx+1), yScale(ira[iraIdx+1])], [xScale(iraIdx), yScale(ira[iraIdx])]];
  const redZonePath = [...redZoneTop, ...redZoneBottom].map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + ' Z';

  const consY = yScale(consLine);
  const yTicks = [8,10,12,14,16,18,20];

  return (
    <ComponentCard
      title="Darzalex US net sales · baseline vs IRA rebate scenario 2022–2032"
      moreLabel="Full Model ›"
      explainer="The key fork in this chart is 2029 — when IV Darzalex enters IRA negotiation. BI's base case models Faspro being treated as a distinct drug (eligible 2034), but the bear case (bundled with IV in 2029) explains the gap between BI's $14.7B and consensus $16.7B. The bear case is not impossible — HHS has precedent for bundling formulations."
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
                <line x1={padL} y1={yScale(v)} x2={padL + chartW} y2={yScale(v)} stroke="#252525" strokeWidth="1" />
                <text x={padL - 6} y={yScale(v) + 4} textAnchor="end" fill="#8a8a8a" fontSize="9">${v}B</text>
              </g>
            ))}

            {years.map((yr, i) => (
              <text key={yr} x={xScale(i)} y={height - 4} textAnchor="middle" fill="#8a8a8a" fontSize="9">{yr}</text>
            ))}

            <line x1={padL} y1={consY} x2={padL + chartW} y2={consY}
              stroke="#888" strokeWidth="1" strokeDasharray="2,4" opacity="0.6" />
            <text x={padL + chartW - 2} y={consY - 4} textAnchor="end" fill="#888" fontSize="9">Street consensus $16.7B</text>

            <path d={redZonePath} fill="#e05252" fillOpacity="0.12" />

            <line x1={xScale(iraIdx)} y1={padT} x2={xScale(iraIdx)} y2={padT + chartH}
              stroke="#fff" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
            <text x={xScale(iraIdx) + 3} y={padT + 12} fill="#e8e8e8" fontSize="9" opacity="0.6">IRA negotiation · Faspro eligible?</text>

            <path d={toPath(baselinePoints)} fill="none" stroke="#E07B00" strokeWidth="2" />
            <path d={toPath(iraPoints)} fill="none" stroke="#e05252" strokeWidth="2" strokeDasharray="5,3" />

            <text x={xScale(8) + 4} y={yScale(baseline[8]) - 5} fill="#E07B00" fontSize="9">BI base $16.5B</text>
            <text x={xScale(8) + 4} y={yScale(ira[8]) + 12} fill="#e05252" fontSize="9">BI IRA scenario $14.7B</text>

            {baselinePoints.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="#E07B00" />)}
            {iraPoints.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="#e05252" />)}
          </svg>
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 8, marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 2, background: '#E07B00' }} />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>Baseline</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 24, height: 2, background: '#e05252', borderTop: '2px dashed #e05252' }} />
            <span style={{ fontSize: 11, color: '#8a8a8a' }}>IRA scenario</span>
          </div>
        </div>

        <div style={{
          background: '#1a1010',
          border: '1px solid #3a2020',
          borderLeft: '3px solid #e05252',
          borderRadius: 4,
          padding: '8px 12px',
          fontSize: 11,
          color: '#d8d8d8',
          marginBottom: 8,
        }}>
          Bear case: Faspro negotiated alongside IV Darzalex in 2029 rather than separately in 2034. This is J&J's single largest near-term risk. — <em>Max Nisen, BI</em>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4caf82', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · Bloomberg Intelligence</span>
        </div>
      </div>
    </ComponentCard>
  );
}
