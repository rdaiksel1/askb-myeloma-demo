import ComponentCard from './ComponentCard';

function KPICard({ label, value, sub, delta, deltaPositive }) {
  return (
    <div style={{
      background: '#111',
      border: '1px solid #252525',
      borderRadius: 6,
      padding: '14px 16px',
      flex: 1,
    }}>
      <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#E07B00', fontVariantNumeric: 'tabular-nums', marginBottom: 4 }}>
        {value}
      </div>
      <div style={{ fontSize: 11, color: '#8a8a8a' }}>{sub}</div>
      {delta && (
        <div style={{ fontSize: 11, color: deltaPositive ? '#4caf82' : '#e05252', marginTop: 4 }}>
          {delta}
        </div>
      )}
    </div>
  );
}

export default function KPIStatBar() {
  return (
    <ComponentCard
      title="Multiple myeloma market overview"
      moreLabel="More ›"
      explainer="These four headline metrics orient the viewer to the myeloma market's scale and trajectory. The $33B 2030 forecast comes from BI's proprietary drug-level model — 40% above the 2023 base, driven almost entirely by next-generation immunotherapies replacing aging small molecules."
    >
      <div style={{ display: 'flex', gap: 10, padding: '12px 16px 16px 16px' }}>
        <KPICard label="2030 Market" value="$33.0B" sub="BI forecast" delta="+40% vs '23" deltaPositive={true} />
        <KPICard label="2023 Market" value="$23.5B" sub="base year" />
        <KPICard label="Drugs Approved" value="17" sub="since 2003" />
        <KPICard label="Median Survival" value="10 yrs" sub="vs 3.5 in late 1990s" />
      </div>
    </ComponentCard>
  );
}
