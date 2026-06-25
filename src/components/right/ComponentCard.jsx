import { useState } from 'react';

/* Keyframe for the ✦ pulse — injected once */
if (typeof document !== 'undefined' && !document.getElementById('askb-pulse-style')) {
  const style = document.createElement('style');
  style.id = 'askb-pulse-style';
  style.textContent = `
    @keyframes askb-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }
    .askb-spark {
      display: inline-block;
      animation: askb-pulse 2s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
}

export default function ComponentCard({
  title,
  moreLabel = 'More ›',
  explainer,
  children,
  // Ask ASKB props
  askASKBEnabled = false,
  onAskASKB,
  hasQueried,
  isActiveQuery,
  // Drive props
  showDriveActions = false,
}) {
  const [expanded, setExpanded] = useState(false);
  const [flash, setFlash] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [barFlash, setBarFlash] = useState(false);
  const [saved, setSaved] = useState(false);
  const [alerted, setAlerted] = useState(false);

  function handleMoreClick() {
    setFlash(true);
    setTooltip(true);
    setTimeout(() => setFlash(false), 300);
    setTimeout(() => setTooltip(false), 1500);
  }

  function handleAskClick() {
    if (!askASKBEnabled || hasQueried || isActiveQuery) return;
    setBarFlash(true);
    setTimeout(() => setBarFlash(false), 200);
    if (onAskASKB) onAskASKB();
  }

  const leftBorder = isActiveQuery
    ? '3px solid #E07B00'
    : hasQueried
    ? '1px solid #2a2a2a'
    : '1px solid #252525';

  /* Bar state labels */
  let leftLabel, rightLabel;
  if (!askASKBEnabled) {
    leftLabel = '✦ Learn More in ASKB';
    rightLabel = 'Search across BI · sell-side · transcripts · clinical →';
  } else if (isActiveQuery) {
    leftLabel = '✦ ASKB is researching...';
    rightLabel = '';
  } else if (hasQueried) {
    leftLabel = '✓ Added to conversation';
    rightLabel = '';
  } else {
    leftLabel = '✦ Learn More in ASKB';
    rightLabel = 'Search across BI · sell-side · transcripts · clinical →';
  }

  const barBg = barFlash
    ? '#181818'
    : askASKBEnabled
    ? '#111111'
    : '#0d0d0d';

  const barBorderTop = askASKBEnabled ? '1px solid #222222' : '1px solid #1a1a1a';
  const textColor = askASKBEnabled ? '#6b9e7e' : '#333333';
  const rightTextColor = askASKBEnabled ? '#4a6a56' : '#222222';

  return (
    <div
      className="card-new-flash"
      style={{
        background: '#1a1a1a',
        border: flash ? '1px solid #E07B00' : '1px solid #252525',
        borderLeft: leftBorder,
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, border-left 0.3s ease',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        animation: 'card-new-flash 2s ease-out forwards',
      }}>
      {/* Card header */}
      {title && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px 0 16px',
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#e8e8e8' }}>
            {title}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {showDriveActions && (
              <>
                <button
                  onClick={() => setAlerted(a => !a)}
                  title={alerted ? 'Alert set' : 'Set alert'}
                  style={{
                    background: alerted ? '#0f1a0f' : 'transparent',
                    border: `1px solid ${alerted ? '#2a4a2a' : '#2a2a2a'}`,
                    borderRadius: 4,
                    padding: '3px 7px',
                    cursor: 'pointer',
                    color: alerted ? '#4caf82' : '#555',
                    fontSize: 12,
                    lineHeight: 1,
                    transition: 'all 0.15s',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => { if (!alerted) { e.currentTarget.style.borderColor = '#4caf82'; e.currentTarget.style.color = '#4caf82'; } }}
                  onMouseLeave={e => { if (!alerted) { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#555'; } }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                </button>
                <button
                  onClick={() => setSaved(s => !s)}
                  title={saved ? 'Saved to Drive' : 'Save to Drive'}
                  style={{
                    background: saved ? '#0f1a0f' : 'transparent',
                    border: `1px solid ${saved ? '#2a4a2a' : '#2a2a2a'}`,
                    borderRadius: 4,
                    padding: '3px 7px',
                    cursor: 'pointer',
                    color: saved ? '#4caf82' : '#555',
                    fontSize: 12,
                    lineHeight: 1,
                    transition: 'all 0.15s',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => { if (!saved) { e.currentTarget.style.borderColor = '#E07B00'; e.currentTarget.style.color = '#E07B00'; } }}
                  onMouseLeave={e => { if (!saved) { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#555'; } }}
                >
                  {saved ? '★' : '☆'}
                </button>
              </>
            )}
          <div style={{ position: 'relative' }}>
            <button
              onClick={handleMoreClick}
              style={{
                background: '#1a1a1a',
                border: '1px solid #333',
                color: '#8a8a8a',
                fontSize: 11,
                borderRadius: 4,
                padding: '3px 8px',
                cursor: 'pointer',
                transition: 'border-color 0.15s, color 0.15s',
                lineHeight: 1.4,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#E07B00';
                e.currentTarget.style.color = '#E07B00';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.color = '#8a8a8a';
              }}
            >
              {moreLabel}
            </button>
            {tooltip && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: 4,
                background: '#2a2a2a',
                border: '1px solid #3a3a3a',
                borderRadius: 4,
                padding: '4px 8px',
                fontSize: 11,
                color: '#aaaaaa',
                whiteSpace: 'nowrap',
                zIndex: 100,
                pointerEvents: 'none',
              }}>
                Coming soon
              </div>
            )}
          </div>
          </div>
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: title ? '0 0 0 0' : '0' }}>
        {children}
      </div>

      {/* Expandable explainer — no Ask ASKB button inside */}
      {explainer && (
        <div style={{ borderTop: '1px solid #252525' }}>
          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              width: '100%',
              background: 'none',
              border: 'none',
              padding: '8px 12px',
              cursor: 'pointer',
              textAlign: 'left',
              color: '#8a8a8a',
              fontSize: 11,
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#aaaaaa'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#8a8a8a'; }}
          >
            <span style={{ fontSize: 10 }}>{expanded ? '▾' : '▸'}</span>
            About this analysis
          </button>
          <div style={{
            maxHeight: expanded ? '300px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.25s ease',
          }}>
            <div style={{
              padding: '0 12px 12px 12px',
              fontSize: 11,
              color: '#8a8a8a',
              lineHeight: 1.6,
            }}>
              {explainer}
            </div>
          </div>
        </div>
      )}

      {/* Persistent Ask ASKB bar — always visible at bottom of card */}
      <div
        onClick={askASKBEnabled && !hasQueried && !isActiveQuery ? handleAskClick : undefined}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 36,
          padding: '0 12px',
          background: barBg,
          borderTop: barBorderTop,
          cursor: askASKBEnabled && !hasQueried && !isActiveQuery ? 'pointer' : 'default',
          transition: 'background 0.2s ease, border-top-color 0.2s ease',
          flexShrink: 0,
          userSelect: 'none',
        }}
        onMouseEnter={e => {
          if (askASKBEnabled && !hasQueried && !isActiveQuery) {
            e.currentTarget.style.background = '#181818';
            e.currentTarget.style.borderTopColor = '#2e2e2e';
          }
        }}
        onMouseLeave={e => {
          if (askASKBEnabled && !hasQueried && !isActiveQuery) {
            e.currentTarget.style.background = '#111111';
            e.currentTarget.style.borderTopColor = '#222222';
          }
        }}
      >
        {/* Left: ✦ Learn More in ASKB with pulse on the spark when enabled */}
        <span style={{
          fontSize: 12,
          fontWeight: 600,
          color: textColor,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}>
          <span className={askASKBEnabled && !hasQueried ? 'askb-spark' : undefined}>✦</span>
          {' '}{leftLabel.replace('✦ ', '')}
        </span>

        {/* Right: source hint */}
        {rightLabel && (
          <span style={{
            fontSize: 10,
            color: rightTextColor,
          }}>
            {rightLabel}
          </span>
        )}
      </div>
    </div>
  );
}
