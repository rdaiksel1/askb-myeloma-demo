import ComponentCard from './ComponentCard';

const drugs = [
  { drug: 'Darzalex', company: 'J&J/Genmab', cls: 'CD38', bi: '$14.7B', cons: '$16.7B', delta: '-12% ↓', dColor: '#e05252', view: 'IRA risk', jj: true },
  { drug: 'Carvykti', company: 'J&J/Legend', cls: 'CAR-T', bi: '$2.3B', cons: '$3.3B', delta: '-30% ↓', dColor: '#e05252', view: 'Bispecs compress', jj: true },
  { drug: 'Anito-cel', company: 'Gilead', cls: 'CAR-T', bi: '$3.1B', cons: '$3.0B', delta: '+3% ↑', dColor: '#4caf82', view: 'Safety advantage', jj: false },
  { drug: 'Tecvayli', company: 'J&J/Genmab', cls: 'Bispecific', bi: '—', cons: '—', delta: 'Leading', dColor: '#8a8a8a', view: '74% of sales 2L+', jj: true },
  { drug: 'Elrexfio', company: 'Pfizer', cls: 'Bispecific', bi: '—', cons: '—', delta: 'Chall.', dColor: '#8a8a8a', view: '30% bispecs share', jj: false },
  { drug: 'Lynozyfic', company: 'Regeneron', cls: 'Bispecific', bi: '—', cons: '—', delta: '17% sh.', dColor: '#8a8a8a', view: 'Fixed dose advantage', jj: false },
  { drug: 'Revlimid', company: 'BMS', cls: 'Small mol', bi: '$0.19B', cons: '$0.20B', delta: '~flat', dColor: '#8a8a8a', view: 'Generic erosion done', jj: false },
  { drug: 'Abecma', company: 'BMS', cls: 'CAR-T', bi: '$0.8B', cons: '$1.2B', delta: '-33% ↓', dColor: '#e05252', view: 'Trails peers', jj: false },
];

const headers = ['Drug', 'Company', 'Class', '2030 BI', 'Consensus', 'Δ', 'BI View'];

export default function CompetitiveLandscapeTable({ onAskASKB, hasQueried, isActiveQuery }) {
  return (
    <ComponentCard
      askASKBEnabled={true}
      onAskASKB={onAskASKB}
      hasQueried={hasQueried}
      isActiveQuery={isActiveQuery}
      title="Competitive landscape · BI model vs consensus"
      moreLabel="Full Table ›"
      explainer="BI's 2030 estimates sit below consensus on most major drugs — the key disagreement is IRA exposure and bispecific compression of late-line CAR-T. The two green cells (Anito-cel) reflect BI's view that Gilead's safety profile gives it a differentiation edge over Carvykti in a crowded BCMA CAR-T field."
    >
      <div style={{ padding: '0 16px 16px 16px' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #252525' }}>
                {headers.map(h => (
                  <th key={h} style={{
                    padding: '6px 10px',
                    textAlign: 'left',
                    fontSize: 10,
                    fontWeight: 600,
                    color: '#8a8a8a',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {drugs.map((d, i) => (
                <tr
                  key={d.drug}
                  style={{
                    borderBottom: '1px solid #1e1e1e',
                    borderLeft: d.jj ? '2px solid #E07B0055' : '2px solid transparent',
                    background: i % 2 === 0 ? 'transparent' : '#161616',
                  }}
                >
                  <td style={{ padding: '8px 10px', color: '#e8e8e8', fontWeight: 500 }}>{d.drug}</td>
                  <td style={{ padding: '8px 10px', color: '#8a8a8a' }}>{d.company}</td>
                  <td style={{ padding: '8px 10px' }}>
                    <span style={{
                      background: '#222',
                      border: '1px solid #333',
                      borderRadius: 3,
                      padding: '2px 6px',
                      fontSize: 10,
                      color: '#aaa',
                    }}>{d.cls}</span>
                  </td>
                  <td style={{ padding: '8px 10px', color: '#e8e8e8', fontVariantNumeric: 'tabular-nums' }}>{d.bi}</td>
                  <td style={{ padding: '8px 10px', color: '#8a8a8a', fontVariantNumeric: 'tabular-nums' }}>{d.cons}</td>
                  <td style={{ padding: '8px 10px', color: d.dColor, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{d.delta}</td>
                  <td style={{ padding: '8px 10px', color: '#8a8a8a', fontSize: 11 }}>{d.view}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span className="dot dot-green" />
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Max Nisen · BI Health Care</span>
        </div>
      </div>
    </ComponentCard>
  );
}
