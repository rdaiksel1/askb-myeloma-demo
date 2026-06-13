export default function BottomBar({ inputValue = '', isTyping = false }) {
  return (
    <div style={{
      background: '#111111',
      borderTop: '1px solid #1e1e1e',
      borderBottom: '2px solid #E07B00',
      display: 'flex',
      flexDirection: 'column',
      padding: '8px 12px 8px 12px',
      gap: 6,
      flexShrink: 0,
    }}>
      {/* Textarea-style input area */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        padding: '10px 12px',
        fontSize: 13,
        color: isTyping ? '#E07B00' : '#5a5a5a',
        minWidth: 0,
        height: 72,
        lineHeight: 1.5,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}>
        {isTyping ? (
          <span style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
            <span>{inputValue}</span>
            <span
              className="input-typing-cursor"
              style={{
                display: 'inline-block',
                width: 2,
                height: 13,
                background: '#E07B00',
                marginLeft: 1,
                verticalAlign: 'middle',
                flexShrink: 0,
              }}
            />
          </span>
        ) : (
          <span style={{ color: inputValue ? '#e8e8e8' : '#5a5a5a', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {inputValue || 'Ask Follow Up'}
          </span>
        )}
      </div>

      {/* Buttons row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 4,
      }}>
        {/* Optimize button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          color: '#555555',
          fontSize: 12,
          cursor: 'pointer',
          padding: '4px 8px',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ color: '#E07B00', opacity: 0.5, fontSize: 11 }}>✧</span>
          <span>Optimize</span>
        </div>

        {/* Workflows button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          color: '#555555',
          fontSize: 12,
          cursor: 'pointer',
          padding: '4px 8px',
          whiteSpace: 'nowrap',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M10 6A4 4 0 112 6" stroke="#555555" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 3v3h-3" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Workflows</span>
        </div>

        {/* Paperclip */}
        <div style={{ color: '#555555', cursor: 'pointer', padding: '4px 6px' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 6.5L6.5 12A3.5 3.5 0 011.5 7L7 1.5A2 2 0 0110 4.5L4.5 10A.5.5 0 013.5 9L9 3.5" stroke="#555555" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Send button */}
        <div style={{
          width: 32,
          height: 32,
          background: '#E07B00',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
