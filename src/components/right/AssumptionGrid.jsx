import ComponentCard from './ComponentCard';

const rows = [
  { param: 'Faspro share', base: '>90%', ira: '>90%', red: false },
  { param: 'Medicare-eligible', base: '~75%', ira: '~75%', red: false },
  { param: 'Effective rebate pre-2029', base: '~20%', ira: '~20%', red: false },
  { param: 'Effective rebate 2029+', base: '~20%', ira: '~45% 🔴', red: true },
  { param: 'Darzalex 2030 US sales', base: '$16.5B', ira: '$14.7B 🔴', red: true },
  { param: 'Darzalex 2030 consensus', base: '$16.7B', ira: 'n/a', red: false },
  { param: 'BI vs consensus', base: '-1%', ira: '-12% 🔴', red: true },
  { param: 'Cumul. revenue impact', base: '—', ira: '~$42B ↓ 🔴', red: true },
  { param: 'Darzalex patent (US)', base: '2029', ira: '2029', red: false },
  { param: 'Faspro patent (US)', base: '2036', ira: '2036', red: false },
];

export default function AssumptionGrid({ onAskASKB, hasQueried, isActiveQuery }) {
  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="IRA scenario assumptions"
      moreLabel="Full Model ›"
      explainer="The model's sensitivity is dominated by one parameter: the effective rebate post-2029. Moving from 20% to 45% (the IRA's observed central tendency on negotiated drugs so far) accounts for almost the entire $1.8B difference in 2030 sales. Other assumptions are relatively stable."
    >
      <div style={{ padding: '0 16px 16px 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #252525' }}>
              {['Parameter', 'Baseline', 'IRA Scenario'].map(h => (
                <th key={h} style={{ padding: '6px 10px', textAlign: 'left', fontSize: 10, fontWeight: 600, color: '#8a8a8a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #1e1e1e' }}>
                <td style={{ padding: '7px 10px', color: '#d8d8d8' }}>{r.param}</td>
                <td style={{ padding: '7px 10px', color: '#8a8a8a', fontVariantNumeric: 'tabular-nums' }}>{r.base}</td>
                <td style={{
                  padding: '7px 10px',
                  background: r.red ? '#2a1010' : 'transparent',
                  color: r.red ? '#e05252' : '#8a8a8a',
                  fontVariantNumeric: 'tabular-nums',
                }}>{r.ira}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
