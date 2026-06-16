import { useState, useEffect, useCallback, useRef } from 'react';
import './index.css';
import TopChrome from './components/TopChrome';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import {
  Q1_TEXT, Q1_RESPONSE_PARTS, Q2_RESPONSE_PARTS, Q3_RESPONSE_PARTS,
  ASKB_MARKET_GROWTH, ASKB_REBATE_SCENARIO, ASKB_CART_CONSENSUS,
  ASKB_THERAPY_CLASS, ASKB_PHYSICIAN_SURVEY, ASKB_PATIENT_ATTRITION,
  ASKB_COMPETITIVE_LANDSCAPE, ASKB_CATALYSTS, ASKB_ASSUMPTION_GRID,
  ASKB_JJ_REVENUE, ASKB_PATIENT_FUNNEL, ASKB_BISPECIFIC_SHARE,
  ASKB_THERAPY_SEQUENCING,
} from './data/content';

const Q2_TEXT = "What happens to Darzalex sales if Faspro faces IRA price cuts in 2029?";
const Q3_TEXT = "How does broad 2L bispecific uptake affect CAR-T eligible patients and Carvykti sales?";

// Map component ids to their ASKB config and label
const ASKB_CONFIGS = {
  market: {
    config: ASKB_MARKET_GROWTH, label: 're: Market Growth Chart',
    prompt: "Search BI research, recent sell-side notes, and J&J earnings transcripts to explain what's driving the wide variance in 2030 global MM drug market forecasts — specifically how analysts are treating IRA Faspro bundling risk, whether the CD38 compression thesis is reflected in consensus, and where the biggest point of disagreement sits between bull and bear cases.",
  },
  rebate: {
    config: ASKB_REBATE_SCENARIO, label: 're: Rebate Scenario Chart',
    prompt: "Pull sell-side research and CMS policy commentary on IRA formulation bundling risk for Darzalex Faspro. Specifically: what probability are analysts assigning to Faspro entering negotiation in the 2029 cycle vs 2034, how is J&J management framing this risk on earnings calls, and what is the revenue impact range across bear, base, and bull scenarios.",
  },
  cart: {
    config: ASKB_CART_CONSENSUS, label: 're: Carvykti vs Anito-cel Bridge',
    prompt: "Search across BI, sell-side equity research, and recent ASCO and ASH abstracts to explain what's driving the wide consensus gap on Carvykti 2030 estimates — including manufacturing capacity assumptions, competitive positioning versus bispecifics in 3L/4L, and how analysts are modeling the anito-cel approval timeline and label breadth.",
  },
  therapyClass: {
    config: ASKB_THERAPY_CLASS, label: 're: Therapy Class Breakdown',
    prompt: "Pull BI and sell-side research to explain the mechanism behind CD38 class compression from 55% to ~46% of MM drug sales by 2030 — how bispecific 2L adoption pulls patients away from CD38-based retreatment in later lines, which analysts agree with this compression thesis, which ones push back, and what data from TRIMM-3 or MajecTEC-3 could revise these projections.",
  },
  physicianSurvey: {
    config: ASKB_PHYSICIAN_SURVEY, label: 're: Physician Survey Panel',
    prompt: "Synthesize findings from BI's 100-physician survey alongside sell-side physician channel checks and any KOL commentary from recent hematology conferences. Focus on: how community oncologists are sequencing bispecifics versus CAR-T, what barriers are slowing bispecific adoption in community settings versus academic centers, and whether physician intent data aligns with or diverges from the volume assumptions in current sell-side models.",
  },
  patientAttrition: {
    config: ASKB_PATIENT_ATTRITION, label: 're: Patient Attrition Funnel',
    prompt: "Search BI research, sell-side models, and real-world data from REMS registries and published claims analyses to explain the drivers of attrition at each stage between MM diagnosis and 3L/4L eligibility — including comorbidity exclusions, early mortality, and the growing proportion of patients exhausting treatment options before reaching CAR-T. Quantify how earlier bispecific use in 2L compounds this attrition.",
  },
  competitiveLandscape: {
    config: ASKB_COMPETITIVE_LANDSCAPE, label: 're: Competitive Landscape Table',
    prompt: "Pull BI competitive analysis and sell-side research covering Tecvayli, Talvey, and Elrexfio to explain how analysts are differentiating the three bispecifics in their models. Specifically: dosing schedule differences and their impact on community adoption, the MajecTEC-3 combination data and how it shifts Tecvayli's competitive position, and which asset analysts see as most at risk from the anito-cel approval.",
  },
  catalysts: {
    config: ASKB_CATALYSTS, label: 're: Catalysts Grid',
    prompt: "Search BI, sell-side research, and conference abstracts to surface the most significant upcoming binary events in multiple myeloma — including TRIMM-3 combination readouts, MajecTEC-3 data, the anito-cel FDA review timeline, IRA 2029 negotiation announcements, and any ASCO or ASH presentations expected in the next 18 months. For each catalyst, what is the market-implied probability and what is the BI base case assumption?",
  },
  assumptionGrid: {
    config: ASKB_ASSUMPTION_GRID, label: 're: IRA Assumption Grid',
    prompt: "Pull BI sensitivity analysis, sell-side scenario frameworks, and J&J investor day materials to explain which assumptions are most contested across the $13B–$22B Darzalex 2030 revenue range — particularly the Faspro bundling timing, the net price discount quantum under negotiation, and whether the market has fully priced the downside scenario. Where does the street diverge most from BI's base case inputs?",
  },
  jjRevenue: {
    config: ASKB_JJ_REVENUE, label: 're: J&J Revenue Waterfall',
    prompt: "Search BI research, sell-side models, and J&J earnings transcripts to explain every contributor to the gap between BI's $14.7B Darzalex 2030 forecast and the $26.9B street consensus — IRA rebate drag, Faspro cannibalization, bispecific 2L erosion of retreatment demand, and generic exposure post-2032. Which sell-side analysts are closest to BI's view, and what single assumption explains the most variance?",
  },
  patientFunnel: {
    config: ASKB_PATIENT_FUNNEL, label: 're: Patient Funnel Chart',
    prompt: "Pull BI epidemiology modeling, sell-side patient pool analyses, and real-world evidence from REMS data to explain how 2L bispecific adoption reduces the number of patients reaching CAR-T eligibility in 3L/4L — quantifying the mechanism across base, scenario, and high-uptake cases, and sizing the Carvykti revenue sensitivity to each 1,000-patient change in the addressable pool.",
  },
  bispecificShare: {
    config: ASKB_BISPECIFIC_SHARE, label: 're: Bispecific Share Bars',
    prompt: "Search BI, sell-side research, and physician surveys to explain the basis for a Tecvayli 45% / Talvey 25% / Elrexfio 30% split of the 2030 bispecific market — including GPRC5D vs BCMA target differentiation, dosing schedule advantages, community vs academic center adoption rates, and how this share distribution shifts if MajecTEC-3 combination data is positive or Elrexfio secures earlier-line approval.",
  },
  therapySequencing: {
    config: ASKB_THERAPY_SEQUENCING, label: 're: Therapy Sequencing Map',
    prompt: "Pull BI treatment algorithm analysis, sell-side sequencing frameworks, and KOL commentary from ASH and ASCO to explain how physician sequencing of bispecifics versus CAR-T is expected to evolve through 2030. Specifically: under what circumstances do physicians choose bispecific first versus CAR-T first in 3L, how does the off-the-shelf availability of bispecifics affect sequencing in community settings, and what does the TRIMM-3 combination data imply for earlier-line use that would displace current 3L/4L volume assumptions?",
  },
};

function flattenToWords(parts) {
  return parts.map(p => ({
    words: p.text.split(' '),
    chips: p.chips || [],
  }));
}

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
  const [demoStep, setDemoStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Unified message queue — append-only
  // Each message: { id, type, ... }
  const [messages, setMessages] = useState([]);
  const [streamingMsgId, setStreamingMsgId] = useState(null);

  // UI state (non-message)
  const [inputDisplayValue, setInputDisplayValue] = useState('');
  const [isTypingInInput, setIsTypingInInput] = useState(false);
  const [showDiseaseChip, setShowDiseaseChip] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showQ2GenBtn, setShowQ2GenBtn] = useState(false);
  const [showQ3GenBtn, setShowQ3GenBtn] = useState(false);
  const [q2GenDone, setQ2GenDone] = useState(false);
  const [q3GenDone, setQ3GenDone] = useState(false);
  const [showSkeleton2, setShowSkeleton2] = useState(false);
  const [showSkeleton3, setShowSkeleton3] = useState(false);

  // Tracks which component ids have been queried (for button disabled state)
  const [queriedComponents, setQueriedComponents] = useState(new Set());
  // Tracks which component ids currently have the orange active-query border (3s after click)
  const [activeQueryComponents, setActiveQueryComponents] = useState(new Set());

  const animRef = useRef(null);
  const msgIdCounter = useRef(0);
  const demoStepRef = useRef(0);
  demoStepRef.current = demoStep;

  function nextId() {
    msgIdCounter.current += 1;
    return msgIdCounter.current;
  }

  // Append a message, return its id
  function appendMsg(msg) {
    const id = nextId();
    setMessages(prev => [...prev, { ...msg, id }]);
    return id;
  }

  // Replace a message (by id) — used to swap thinking -> real content
  function replaceMsg(id, newMsg) {
    setMessages(prev => prev.map(m => m.id === id ? { ...newMsg, id } : m));
  }

  // Update a message in-place (streaming partial updates)
  function updateMsg(id, updater) {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, ...updater(m) } : m));
  }

  // Stream parts into a message of type 'askb' or 'askb-synthesis'
  // msgId: the id of the message to stream into
  // partsData: array of { text, chips }
  // onDone: callback
  function streamIntoMsg(msgId, partsData, onDone) {
    setStreamingMsgId(msgId);
    const flatParts = flattenToWords(partsData);
    let partIdx = 0;
    let wordIdx = 0;
    const completedParts = [];

    const tick = () => {
      const part = flatParts[partIdx];
      if (!part) {
        // Done streaming
        updateMsg(msgId, m => ({ ...m, parts: partsData, streamingParts: null }));
        setStreamingMsgId(null);
        if (onDone) onDone();
        return;
      }
      wordIdx++;
      if (wordIdx >= part.words.length) {
        completedParts.push({ text: partsData[partIdx].text, chips: partsData[partIdx].chips });
        updateMsg(msgId, m => ({ ...m, streamingParts: [...completedParts] }));
        partIdx++;
        wordIdx = 0;
        animRef.current = setTimeout(tick, 18);
      } else {
        const currentText = part.words.slice(0, wordIdx).join(' ');
        updateMsg(msgId, m => ({ ...m, streamingParts: [...completedParts, { text: currentText, chips: [] }] }));
        animRef.current = setTimeout(tick, 18);
      }
    };
    animRef.current = setTimeout(tick, 18);
  }

  const typeIntoInput = useCallback((text, onDone) => {
    let i = 0;
    setInputDisplayValue('');
    setIsTypingInInput(true);
    const tick = () => {
      i++;
      setInputDisplayValue(text.slice(0, i));
      if (i < text.length) {
        animRef.current = setTimeout(tick, 38);
      } else {
        animRef.current = setTimeout(() => {
          setInputDisplayValue('');
          setIsTypingInInput(false);
          if (onDone) onDone();
        }, 400);
      }
    };
    animRef.current = setTimeout(tick, 38);
  }, []);

  const advanceStep = useCallback(() => {
    if (isAnimating) return;
    const currentStep = demoStepRef.current;
    if (currentStep >= 6) return;

    setIsAnimating(true);
    const nextStep = currentStep + 1;

    if (nextStep === 1) {
      // Type Q1 text into a temporary user bubble as we type it
      // We'll show a thinking placeholder then replace with real content
      let typingMsgId = null;
      let i = 0;

      // First append a placeholder user message we'll update as we type
      typingMsgId = appendMsg({ type: 'user', text: '' });

      const typeTick = () => {
        i++;
        const partial = Q1_TEXT.slice(0, i);
        updateMsg(typingMsgId, () => ({ type: 'user', text: partial }));
        if (i < Q1_TEXT.length) {
          animRef.current = setTimeout(typeTick, 38);
        } else {
          // After typing pause, show thinking
          animRef.current = setTimeout(() => {
            const thinkingId = appendMsg({ type: 'thinking' });
            animRef.current = setTimeout(() => {
              // Replace thinking with askb message
              replaceMsg(thinkingId, {
                type: 'askb',
                title: null, // Q1 uses structured rendering
                isQ1: true,
                parts: null,
                streamingParts: [],
              });
              setDemoStep(1);
              streamIntoMsg(thinkingId, Q1_RESPONSE_PARTS, () => {
                setShowDiseaseChip(true);
                setIsAnimating(false);
                setTimeout(() => setShowTooltip(true), 500);
              });
            }, 1200);
          }, 600);
        }
      };
      animRef.current = setTimeout(typeTick, 38);
      return;
    }

    if (nextStep === 2) {
      setShowTooltip(false);
      setDemoStep(2);
      setIsAnimating(false);
      return;
    }

    if (nextStep === 3) {
      setShowQ2GenBtn(false);
      setShowSkeleton2(true);
      typeIntoInput(Q2_TEXT, () => {
        appendMsg({ type: 'user', text: Q2_TEXT });
        const thinkingId = appendMsg({ type: 'thinking' });
        animRef.current = setTimeout(() => {
          replaceMsg(thinkingId, {
            type: 'askb',
            title: 'Darzalex IRA Exposure · Faspro Rebate Scenario',
            isQ1: false,
            parts: null,
            streamingParts: [],
          });
          setDemoStep(3);
          streamIntoMsg(thinkingId, Q2_RESPONSE_PARTS, () => {
            setShowSkeleton2(false);
            setShowQ2GenBtn(true);
            setIsAnimating(false);
          });
        }, 1200);
      });
      return;
    }

    if (nextStep === 4) {
      setDemoStep(4);
      setQ2GenDone(true);
      setShowSkeleton2(false);
      setIsAnimating(false);
      return;
    }

    if (nextStep === 5) {
      setShowQ3GenBtn(false);
      setShowSkeleton3(true);
      typeIntoInput(Q3_TEXT, () => {
        appendMsg({ type: 'user', text: Q3_TEXT });
        const thinkingId = appendMsg({ type: 'thinking' });
        animRef.current = setTimeout(() => {
          replaceMsg(thinkingId, {
            type: 'askb',
            title: 'Bispecific 2L Uptake · CAR-T Pool Compression',
            isQ1: false,
            parts: null,
            streamingParts: [],
          });
          setDemoStep(5);
          streamIntoMsg(thinkingId, Q3_RESPONSE_PARTS, () => {
            setShowSkeleton3(false);
            setShowQ3GenBtn(true);
            setIsAnimating(false);
          });
        }, 1200);
      });
      return;
    }

    if (nextStep === 6) {
      setDemoStep(6);
      setQ3GenDone(true);
      setShowSkeleton3(false);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(false);
  }, [isAnimating, typeIntoInput]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handler = (e) => {
      if (e.code === 'Space' && !e.target.matches('input,textarea,button')) {
        e.preventDefault();
        advanceStep();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [advanceStep]);

  const handleDiseaseChipClick = () => {
    if (demoStepRef.current === 1 && !isAnimating) {
      advanceStep();
    }
  };

  const handleGenCtxQ2 = () => {
    if (demoStepRef.current === 3 && !isAnimating && !q2GenDone) {
      setDemoStep(4);
      setQ2GenDone(true);
      setShowSkeleton2(false);
    }
  };

  const handleGenCtxQ3 = () => {
    if (demoStepRef.current === 5 && !isAnimating && !q3GenDone) {
      setDemoStep(6);
      setQ3GenDone(true);
      setShowSkeleton3(false);
    }
  };

  // Generic Ask ASKB handler factory
  const makeAskASKBHandler = useCallback((componentId) => {
    return () => {
      if (queriedComponents.has(componentId)) return;
      const { config, label, prompt } = ASKB_CONFIGS[componentId];

      // Mark as queried + activate orange border immediately
      setQueriedComponents(prev => new Set([...prev, componentId]));
      setActiveQueryComponents(prev => new Set([...prev, componentId]));

      // Show the auto-generated prompt as a distinct ASKB prompt message
      appendMsg({ type: 'askb-prompt', text: prompt, label });

      // Append system-query row
      appendMsg({
        type: 'system-query',
        sourceCount: config.sourceCount,
        queryText: config.queryText,
        label,
      });

        // After 1400ms, append synthesis message and stream it
        const synthId = nextId();
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: synthId,
            type: 'askb-synthesis',
            label,
            parts: null,
            streamingParts: [],
          }]);
          setStreamingMsgId(synthId);
          const flatParts = flattenToWords(config.parts);
          let partIdx = 0;
          let wordIdx = 0;
          const completedParts = [];
          const tick = () => {
            const part = flatParts[partIdx];
            if (!part) {
              setMessages(prev => prev.map(m => m.id === synthId
                ? { ...m, parts: config.parts, streamingParts: null }
                : m
              ));
              setStreamingMsgId(null);
              setActiveQueryComponents(prev => {
                const next = new Set(prev);
                next.delete(componentId);
                return next;
              });
              return;
            }
            wordIdx++;
            if (wordIdx >= part.words.length) {
              completedParts.push({ text: config.parts[partIdx].text, chips: config.parts[partIdx].chips });
              setMessages(prev => prev.map(m => m.id === synthId
                ? { ...m, streamingParts: [...completedParts] }
                : m
              ));
              partIdx++;
              wordIdx = 0;
              setTimeout(tick, 18);
            } else {
              const currentText = part.words.slice(0, wordIdx).join(' ');
              setMessages(prev => prev.map(m => m.id === synthId
                ? { ...m, streamingParts: [...completedParts, { text: currentText, chips: [] }] }
                : m
              ));
              setTimeout(tick, 18);
            }
          };
          setTimeout(tick, 18);
        }, 1400);
    };
  }, [queriedComponents]); // eslint-disable-line react-hooks/exhaustive-deps

  const stepLabels = ['', '1/3', '2/3', '2/3', '2/3', '3/3', '3/3'];
  const stepLabel = stepLabels[demoStep] || '';

  // Build handler objects for RightPane (stable references via useMemo-like pattern)
  const handlers = {
    market:              makeAskASKBHandler('market'),
    rebate:              makeAskASKBHandler('rebate'),
    cart:                makeAskASKBHandler('cart'),
    therapyClass:        makeAskASKBHandler('therapyClass'),
    physicianSurvey:     makeAskASKBHandler('physicianSurvey'),
    patientAttrition:    makeAskASKBHandler('patientAttrition'),
    competitiveLandscape: makeAskASKBHandler('competitiveLandscape'),
    catalysts:           makeAskASKBHandler('catalysts'),
    assumptionGrid:      makeAskASKBHandler('assumptionGrid'),
    jjRevenue:           makeAskASKBHandler('jjRevenue'),
    patientFunnel:       makeAskASKBHandler('patientFunnel'),
    bispecificShare:     makeAskASKBHandler('bispecificShare'),
    therapySequencing:   makeAskASKBHandler('therapySequencing'),
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0d0d0d',
      overflow: 'hidden',
    }}>
      <TopChrome />

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <IconSidebar />
        <LeftPane
          messages={messages}
          streamingMsgId={streamingMsgId}
          demoStep={demoStep}
          showDiseaseChip={showDiseaseChip}
          showTooltip={showTooltip}
          showQ2GenBtn={showQ2GenBtn}
          showQ3GenBtn={showQ3GenBtn}
          onDiseaseChipClick={handleDiseaseChipClick}
          onGenCtxQ2={handleGenCtxQ2}
          onGenCtxQ3={handleGenCtxQ3}
          q2GenDone={q2GenDone}
          q3GenDone={q3GenDone}
          inputDisplayValue={inputDisplayValue}
          isTypingInInput={isTypingInInput}
        />

        <RightPane
          demoStep={demoStep}
          showSkeleton2={showSkeleton2}
          showSkeleton3={showSkeleton3}
          onAskASKBMarket={handlers.market}
          onAskASKBRebate={handlers.rebate}
          onAskASKBCART={handlers.cart}
          hasQueriedMarket={queriedComponents.has('market')}
          hasQueriedRebate={queriedComponents.has('rebate')}
          hasQueriedCART={queriedComponents.has('cart')}
          activeQueryMarket={activeQueryComponents.has('market')}
          activeQueryRebate={activeQueryComponents.has('rebate')}
          activeQueryCART={activeQueryComponents.has('cart')}
          onAskASKBTherapyClass={handlers.therapyClass}
          onAskASKBPhysicianSurvey={handlers.physicianSurvey}
          onAskASKBPatientAttrition={handlers.patientAttrition}
          onAskASKBCompetitiveLandscape={handlers.competitiveLandscape}
          onAskASKBCatalysts={handlers.catalysts}
          onAskASKBAssumptionGrid={handlers.assumptionGrid}
          onAskASKBJJRevenue={handlers.jjRevenue}
          onAskASKBPatientFunnel={handlers.patientFunnel}
          onAskASKBBispecificShare={handlers.bispecificShare}
          onAskASKBTherapySequencing={handlers.therapySequencing}
          hasQueriedTherapyClass={queriedComponents.has('therapyClass')}
          hasQueriedPhysicianSurvey={queriedComponents.has('physicianSurvey')}
          hasQueriedPatientAttrition={queriedComponents.has('patientAttrition')}
          hasQueriedCompetitiveLandscape={queriedComponents.has('competitiveLandscape')}
          hasQueriedCatalysts={queriedComponents.has('catalysts')}
          hasQueriedAssumptionGrid={queriedComponents.has('assumptionGrid')}
          hasQueriedJJRevenue={queriedComponents.has('jjRevenue')}
          hasQueriedPatientFunnel={queriedComponents.has('patientFunnel')}
          hasQueriedBispecificShare={queriedComponents.has('bispecificShare')}
          hasQueriedTherapySequencing={queriedComponents.has('therapySequencing')}
          activeQueryTherapyClass={activeQueryComponents.has('therapyClass')}
          activeQueryPhysicianSurvey={activeQueryComponents.has('physicianSurvey')}
          activeQueryPatientAttrition={activeQueryComponents.has('patientAttrition')}
          activeQueryCompetitiveLandscape={activeQueryComponents.has('competitiveLandscape')}
          activeQueryCatalysts={activeQueryComponents.has('catalysts')}
          activeQueryAssumptionGrid={activeQueryComponents.has('assumptionGrid')}
          activeQueryJJRevenue={activeQueryComponents.has('jjRevenue')}
          activeQueryPatientFunnel={activeQueryComponents.has('patientFunnel')}
          activeQueryBispecificShare={activeQueryComponents.has('bispecificShare')}
          activeQueryTherapySequencing={activeQueryComponents.has('therapySequencing')}
        />
      </div>

      <div className="step-indicator">
        {stepLabel && (
          <span className="step-count">{stepLabel}</span>
        )}
        <button
          className="next-btn"
          onClick={advanceStep}
          disabled={isAnimating || demoStep >= 6}
        >
          {demoStep === 0 ? 'Start demo' : '→ Next step'}
        </button>
      </div>
    </div>
  );
}
