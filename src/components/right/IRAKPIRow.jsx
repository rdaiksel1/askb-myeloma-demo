import ComponentCard from './ComponentCard';

export default function IRAKPIRow() {
  return (
    <ComponentCard
      title="IRA rebate shock · key metrics"
      moreLabel="More ›"
      explainer="The $42B cumulative impact figure represents the difference between BI's IRA scenario and the no-IRA baseline across 2029–2032. This is the number that makes the IRA risk existential for J&J's myeloma franchise — it dwarfs any upside from label expansion."
    >
      <div style={{ display: 'flex', gap: 10, padding: '12px 16px 16px 16px' }}>
        <div style={{ background: '#111', border: '1px solid #252525', borderRadius: 6, padding: '14px 16px', flex: 1 }}>
          <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Cumulative Impact
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#e05252', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>
            ~$42B
          </div>
          <div style={{ fontSize: 11, color: '#8a8a8a' }}>vs baseline 2029–2032</div>
        </div>
        <div style={{ background: '#111', border: '1px solid #252525', borderRadius: 6, padding: '14px 16px', flex: 1 }}>
          <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            2030 BI Model Darzalex Sales
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#E07B00', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>
            $14.7B
          </div>
          <div style={{ fontSize: 11, color: '#8a8a8a' }}>BI base IRA scenario</div>
        </div>
        <div style={{ background: '#111', border: '1px solid #252525', borderRadius: 6, padding: '14px 16px', flex: 1 }}>
          <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            vs Consensus
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#e05252', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>
            -12%
          </div>
          <div style={{ fontSize: 11, color: '#8a8a8a' }}>below street consensus</div>
        </div>
      </div>
    </ComponentCard>
  );
}
