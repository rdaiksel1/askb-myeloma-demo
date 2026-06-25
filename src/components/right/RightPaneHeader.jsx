import { useState } from 'react';

export default function RightPaneHeader({ surfacedByASKB }) {
  const [saved, setSaved] = useState(false);
  return (
    <div style={{
      background: '#1a1a1a',
      border: '1px solid #252525',
      borderRadius: 8,
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
    }}>
      {/* Left: title + analyst */}
      <div style={{ flex: 1 }}>

        {/* Bloomberg Intelligence wordmark + BI badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{
            fontSize: 22,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}>
            Bloomberg Intelligence
          </span>
          {/* BI badge — orange circle, black BI text */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#E07B00',
            color: '#000000',
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}>
            BI
          </span>
        </div>

        {/* Sub-title */}
        <div style={{ fontSize: 13, color: '#c8c8c8', marginBottom: 12, letterSpacing: '0.01em' }}>
          Multiple Myeloma Disease Hub
        </div>

        {/* Sam Fazeli people pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          background: '#111111',
          border: '1px solid #2e2e2e',
          borderRadius: 20,
          padding: '5px 12px 5px 8px',
          marginBottom: 10,
        }}>
          {/* Avatar circle */}
          <span style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: '#2a2a2a',
            border: '1px solid #3a3a3a',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 9,
            fontWeight: 700,
            color: '#e8e8e8',
            flexShrink: 0,
            letterSpacing: 0,
          }}>SF</span>
          {/* Green presence dot */}
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#4caf82',
            flexShrink: 0,
            display: 'inline-block',
          }} />
          <span style={{ fontSize: 12, color: '#e8e8e8', fontWeight: 500 }}>Sam Fazeli</span>
          <span style={{ fontSize: 11, color: '#8a8a8a' }}>Bloomberg Intelligence</span>
        </div>

        {/* Title + last updated */}
        <div style={{ fontSize: 11, color: '#8a8a8a', marginBottom: 2 }}>
          Global Director of Healthcare Research
        </div>
        <div style={{ fontSize: 11, color: '#555555' }}>
          Last updated: June 2026 · 100 hematologists surveyed
        </div>
      </div>

      {/* Right: surfaced pill + Save to Drive */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
        <div style={{
          background: surfacedByASKB ? '#2a1a00' : '#1e1e1e',
          border: `1px solid ${surfacedByASKB ? '#E07B00' : '#2e2e2e'}`,
          borderRadius: 20,
          padding: '4px 12px',
          fontSize: 11,
          color: surfacedByASKB ? '#E07B00' : '#8a8a8a',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          whiteSpace: 'nowrap',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: surfacedByASKB ? '#E07B00' : '#8a8a8a',
            display: 'inline-block',
          }} />
          {surfacedByASKB ? 'Surfaced by ASKB' : 'Opened by user'}
        </div>

        <button
          onClick={() => setSaved(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: saved ? '#0f1a0f' : '#111111',
            border: `1px solid ${saved ? '#2a4a2a' : '#2e2e2e'}`,
            borderRadius: 6,
            padding: '5px 11px',
            fontSize: 11,
            color: saved ? '#4caf82' : '#8a8a8a',
            cursor: saved ? 'default' : 'pointer',
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { if (!saved) { e.currentTarget.style.borderColor = '#E07B00'; e.currentTarget.style.color = '#E07B00'; } }}
          onMouseLeave={e => { if (!saved) { e.currentTarget.style.borderColor = '#2e2e2e'; e.currentTarget.style.color = '#8a8a8a'; } }}
        >
          <span style={{ fontSize: 12 }}>{saved ? '✓' : '⊕'}</span>
          {saved ? 'Saved · Multiple Myeloma Disease Overview' : 'Save to Drive'}
        </button>
      </div>
    </div>
  );
}
