import ComponentCard from './ComponentCard';

export default function BispecificKPIRow() {
  return (
    <ComponentCard
      title="Bispecific 2L uptake · key metrics"
      moreLabel="More ›"
      explainer="The 12K→9K patient pool reduction is the structural story of bispecific 2L uptake — it's not just direct sales competition with CAR-T, it's the compression of the entire late-line eligible population that CAR-T depends on. BI's $2.3B Carvykti estimate is 30% below consensus precisely because this pool shrinkage isn't in street models."
    >
      <div style={{ display: 'flex', gap: 10, padding: '12px 16px 16px 16px' }}>
        <div style={{ background: '#111', border: '1px solid #252525', borderRadius: 6, padding: '14px 16px', flex: 1 }}>
          <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>3L+ Pool</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#e05252', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>
            12K→9K
          </div>
          <div style={{ fontSize: 11, color: '#8a8a8a' }}>patients 2030 base vs scenario</div>
        </div>
        <div style={{ background: '#111', border: '1px solid #252525', borderRadius: 6, padding: '14px 16px', flex: 1 }}>
          <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Carvykti 2030</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#E07B00', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>
            $2.3B
          </div>
          <div style={{ fontSize: 11, color: '#e05252' }}>vs $3.3B cons · -30%</div>
        </div>
        <div style={{ background: '#111', border: '1px solid #252525', borderRadius: 6, padding: '14px 16px', flex: 1 }}>
          <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Consensus drop</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#e05252', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>
            &gt;$1B ↓
          </div>
          <div style={{ fontSize: 11, color: '#8a8a8a' }}>past 12 months</div>
        </div>
      </div>
    </ComponentCard>
  );
}
