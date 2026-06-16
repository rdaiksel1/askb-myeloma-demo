import { useEffect, useRef } from 'react';
import SourceChip from './SourceChip';
import BottomBar from './BottomBar';

function ThinkingIndicator() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
      <span className="thinking-sparkle">✦</span>
      <span className="thinking-label">Thinking...</span>
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
      <div style={{
        background: '#1a0e00',
        borderRadius: 10,
        padding: '12px 16px',
        maxWidth: '85%',
        color: '#E07B00',
        fontSize: 13,
        lineHeight: 1.65,
      }}>
        {text}
      </div>
    </div>
  );
}

function ResponseHeader({ title }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <span style={{ color: '#E07B00', fontWeight: 700, fontSize: 17 }}>✦ </span>
      <span style={{ color: '#E07B00', fontWeight: 700, fontSize: 17 }}>{title}</span>
    </div>
  );
}

function SectionHeader({ text }) {
  return (
    <div style={{
      color: '#ffffff',
      fontWeight: 600,
      fontSize: 13,
      marginTop: 12,
      marginBottom: 4,
    }}>{text}</div>
  );
}

// Orange section header for ASKB synthesis responses — matches real ASKB styling
function SynthesisSectionHeader({ text }) {
  return (
    <div style={{
      color: '#E07B00',
      fontWeight: 600,
      fontSize: 12,
      marginTop: 14,
      marginBottom: 5,
      letterSpacing: '0.01em',
    }}>{text}</div>
  );
}

// Parse **bold** markdown into <strong> spans
function renderBoldText(text) {
  const segments = text.split(/(\*\*.*?\*\*)/g);
  return segments.map((seg, i) =>
    seg.startsWith('**') && seg.endsWith('**')
      ? <strong key={i} style={{ color: '#e8e8e8', fontWeight: 600 }}>{seg.slice(2, -2)}</strong>
      : seg
  );
}

// Synthesis-specific parts renderer — orange section headers + bold text support
function SynthesisResponseParts({ parts }) {
  if (!parts) return null;
  return (
    <>
      {parts.map((part, i) => (
        <div key={i}>
          {part.section && <SynthesisSectionHeader text={part.section} />}
          <div style={{ marginBottom: 8 }}>
            <span>{renderBoldText(part.text)}</span>
            {part.chips && part.chips.map((chip, ci) => <SourceChip key={ci} {...chip} />)}
          </div>
        </div>
      ))}
    </>
  );
}

// Q1-specific structured rendering
function Q1StructuredResponse({ parts }) {
  if (!parts || parts.length === 0) return null;
  return (
    <>
      <ResponseHeader title="Multiple Myeloma Drug Market · 2030 Outlook" />
      {parts.map((part, i) => (
        <div key={i}>
          {part.section && <SynthesisSectionHeader text={part.section} />}
          <div style={{ marginBottom: 6 }}>
            <span>{part.text}</span>
            {part.chips && part.chips.map((chip, ci) => <SourceChip key={ci} {...chip} />)}
          </div>
        </div>
      ))}
    </>
  );
}

function ResponseParts({ parts, title }) {
  if (!parts) return null;
  if (!title) {
    return (
      <>
        {parts.map((part, i) => (
          <div key={i} style={{ marginBottom: 4 }}>
            {part.section && <SynthesisSectionHeader text={part.section} />}
            <span>{part.text}</span>
            {part.chips && part.chips.map((chip, ci) => <SourceChip key={ci} {...chip} />)}
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      <ResponseHeader title={title} />
      {parts.map((part, i) => (
        <div key={i} style={{ marginBottom: 4 }}>
          {part.section && <SynthesisSectionHeader text={part.section} />}
          <span>{part.text}</span>
          {part.chips && part.chips.map((chip, ci) => <SourceChip key={ci} {...chip} />)}
        </div>
      ))}
    </>
  );
}

// ASKB auto-generated prompt card — shown when Ask ASKB is clicked on a component
function ASKBPromptCard({ text, label }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
      }}>
        <span style={{ color: '#6b9e7e', fontSize: 11, fontWeight: 600 }}>✦ ASKB</span>
        <span style={{ color: '#444', fontSize: 11 }}>·</span>
        <span style={{ color: '#555', fontSize: 11 }}>auto-generated query {label}</span>
      </div>
      <div style={{
        background: '#0f1a12',
        border: '1px solid #1a3020',
        borderLeft: '3px solid #6b9e7e',
        borderRadius: 6,
        padding: '10px 14px',
        fontSize: 12,
        color: '#9ac8a8',
        lineHeight: 1.65,
        fontStyle: 'italic',
      }}>
        {text}
      </div>
    </div>
  );
}

// System query row — "searching" indicator
function SystemQueryRow({ sourceCount, queryText, done }) {
  if (done) {
    return (
      <div className="system-query-row" style={{ opacity: 0.45 }}>
        <span style={{ fontSize: 12, color: '#4caf82' }}>✓</span>
        <span style={{ fontSize: 11, color: '#8a8a8a' }}>
          Searched {sourceCount} sources · {queryText}
        </span>
      </div>
    );
  }
  return (
    <div className="system-query-row">
      <span style={{ fontSize: 14 }}>🔍</span>
      <span className="system-query-text">
        Searching across {sourceCount} sources · {queryText}
      </span>
    </div>
  );
}

// ASKB synthesis response bubble triggered from a component card
function ASKBSynthesisResponse({ label, streamingParts, parts }) {
  const isDone = !!parts;
  const displayParts = parts || streamingParts;
  if (!displayParts || displayParts.length === 0) return null;
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 11, color: '#8a8a8a', paddingTop: 4 }}>
          ASKB · <em style={{ color: '#6a6a6a' }}>{label}</em>
        </span>
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.65, color: '#e8e8e8' }}>
        {isDone
          ? <SynthesisResponseParts parts={displayParts} />
          : <ResponseParts parts={displayParts} />
        }
      </div>
    </div>
  );
}

// Render a single message from the queue
function Message({ msg, index, messages, streamingMsgId, demoStep, showDiseaseChip, showTooltip, onDiseaseChipClick, showQ2GenBtn, showQ3GenBtn, onGenCtxQ2, onGenCtxQ3, q2GenDone, q3GenDone }) {
  const isStreaming = msg.id === streamingMsgId;

  if (msg.type === 'thinking') {
    return (
      <div style={{ marginBottom: 20, fontSize: 13, lineHeight: 1.65, color: '#e8e8e8' }}>
        <ThinkingIndicator />
      </div>
    );
  }

  if (msg.type === 'user') {
    return <UserMessage text={msg.text} />;
  }

  if (msg.type === 'askb') {
    // Determine what to display: final parts (done) or streaming parts (in progress)
    const displayParts = msg.parts || msg.streamingParts;
    const isDone = !!msg.parts;

    return (
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, lineHeight: 1.65, color: '#e8e8e8' }}>
          {msg.isQ1 ? (
            isDone
              ? <Q1StructuredResponse parts={msg.parts} />
              : <ResponseParts parts={displayParts} />
          ) : (
            <ResponseParts parts={displayParts} title={msg.title} />
          )}
        </div>

        {/* Q1 disease chip */}
        {msg.isQ1 && isDone && showDiseaseChip && (
          <div style={{ marginTop: 14 }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                onClick={onDiseaseChipClick}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: 6,
                  padding: '8px 14px',
                  color: '#e8e8e8',
                  fontSize: 13,
                  cursor: 'pointer',
                  transition: 'border-color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#E07B00'; e.currentTarget.style.background = '#1f1a10'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = '#1a1a1a'; }}
              >
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: '#E07B00',
                  color: '#000000',
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  flexShrink: 0,
                }}>BI</span>
                <span>Multiple Myeloma Disease Overview</span>
                <span style={{ color: '#E07B00' }}>›</span>
              </button>
              {showTooltip && (
                <div style={{
                  position: 'absolute',
                  top: -32,
                  left: 0,
                  background: '#2a2a2a',
                  border: '1px solid #3a3a3a',
                  borderRadius: 4,
                  padding: '4px 10px',
                  fontSize: 11,
                  color: '#e8e8e8',
                  whiteSpace: 'nowrap',
                  animation: 'tooltipPulse 1.5s infinite',
                  pointerEvents: 'none',
                }}>
                  Click the chip ↑
                </div>
              )}
            </div>
            <div style={{ marginTop: 4, fontSize: 11, color: '#8a8a8a' }}>
              Click to open full disease hub overview
            </div>
          </div>
        )}

        {/* Q2 gen button */}
        {!msg.isQ1 && msg.title && msg.title.includes('Darzalex') && isDone && showQ2GenBtn && (
          <div style={{ marginTop: 12 }}>
            <button className="generate-ctx-btn" onClick={onGenCtxQ2} disabled={q2GenDone}>
              {q2GenDone ? '✓ Context added to dashboard' : '✦ Add context to dashboard →'}
            </button>
          </div>
        )}

        {/* Q3 gen button */}
        {!msg.isQ1 && msg.title && msg.title.includes('Bispecific') && isDone && showQ3GenBtn && (
          <div style={{ marginTop: 12 }}>
            <button className="generate-ctx-btn" onClick={onGenCtxQ3} disabled={q3GenDone}>
              {q3GenDone ? '✓ Context added to dashboard' : '✦ Add context to dashboard →'}
            </button>
          </div>
        )}
      </div>
    );
  }

  if (msg.type === 'askb-prompt') {
    return <ASKBPromptCard text={msg.text} label={msg.label} />;
  }

  if (msg.type === 'system-query') {
    // Done when the next message is a completed synthesis response
    const nextMsg = messages[index + 1];
    const done = nextMsg && nextMsg.type === 'askb-synthesis' && nextMsg.parts && !nextMsg.streamingParts;
    return (
      <SystemQueryRow sourceCount={msg.sourceCount} queryText={msg.queryText} done={done} />
    );
  }

  if (msg.type === 'askb-synthesis') {
    return (
      <ASKBSynthesisResponse
        label={msg.label}
        streamingParts={msg.streamingParts}
        parts={msg.parts}
      />
    );
  }

  return null;
}

export default function LeftPane({
  messages,
  streamingMsgId,
  demoStep,
  showDiseaseChip,
  showTooltip,
  showQ2GenBtn,
  showQ3GenBtn,
  onDiseaseChipClick,
  onGenCtxQ2,
  onGenCtxQ3,
  q2GenDone,
  q3GenDone,
  inputDisplayValue,
  isTypingInInput,
}) {
  const scrollRef = useRef(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 50);
    }
  }, [messages]);

  return (
    <div style={{
      width: '35%',
      background: '#141414',
      borderRight: '1px solid #2a2a2a',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      flexShrink: 0,
    }}>

      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {messages.map((msg, index) => (
          <Message
            key={msg.id}
            msg={msg}
            index={index}
            messages={messages}
            streamingMsgId={streamingMsgId}
            demoStep={demoStep}
            showDiseaseChip={showDiseaseChip}
            showTooltip={showTooltip}
            onDiseaseChipClick={onDiseaseChipClick}
            showQ2GenBtn={showQ2GenBtn}
            showQ3GenBtn={showQ3GenBtn}
            onGenCtxQ2={onGenCtxQ2}
            onGenCtxQ3={onGenCtxQ3}
            q2GenDone={q2GenDone}
            q3GenDone={q3GenDone}
          />
        ))}
      </div>

      <BottomBar inputValue={inputDisplayValue} isTyping={isTypingInInput} />
    </div>
  );
}
