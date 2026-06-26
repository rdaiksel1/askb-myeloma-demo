import { useState } from 'react';
import './index.css';
import TopChrome from './components/TopChrome';
import MyelomaDemo from './demos/MyelomaDemo';
import AutosDemo from './demos/AutosDemo';

function IconSidebar() {
  const iconStyle = {
    color: '#555555',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 4,
    transition: 'color 0.15s',
  };
  const icons = [
    <svg key="compose" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 1l4 4-5 5H5v-4l5-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>,
    <svg key="clock" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    <svg key="star" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2l1.6 3.4 3.7.5-2.7 2.6.6 3.7L8 10.5l-3.2 1.7.6-3.7L2.7 5.9l3.7-.5L8 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>,
    <svg key="layers" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 5l6-3 6 3-6 3-6-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M2 9l6 3 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M2 7l6 3 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5"/>
    </svg>,
  ];
  const gearIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.3 3.3l1.1 1.1M11.6 11.6l1.1 1.1M3.3 12.7l1.1-1.1M11.6 4.4l1.1-1.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div style={{
      width: 40,
      background: '#0d0d0d',
      borderRight: '1px solid #1e1e1e',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 16,
      paddingBottom: 12,
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        {icons.map((icon, i) => (
          <div key={i} style={iconStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#aaaaaa'}
            onMouseLeave={e => e.currentTarget.style.color = '#555555'}
          >
            {icon}
          </div>
        ))}
      </div>
      <div style={iconStyle}
        onMouseEnter={e => e.currentTarget.style.color = '#aaaaaa'}
        onMouseLeave={e => e.currentTarget.style.color = '#555555'}
      >
        {gearIcon}
      </div>
    </div>
  );
}

export default function App() {
  const [activeMode, setActiveMode] = useState('myeloma');

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0d0d0d',
      overflow: 'hidden',
    }}>
      <TopChrome activeMode={activeMode} onModeChange={setActiveMode} />

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <IconSidebar />
        {activeMode === 'myeloma' && <MyelomaDemo />}
        {activeMode === 'autos'   && <AutosDemo />}
      </div>

      <div className="concept-watermark">CONCEPT · NOT FOR DISTRIBUTION</div>
    </div>
  );
}
