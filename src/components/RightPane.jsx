import { useRef, useEffect } from 'react';
import RightPaneHeader from './right/RightPaneHeader';
import KPIStatBar from './right/KPIStatBar';
import MarketGrowthChart from './right/MarketGrowthChart';
import TherapyClassBreakdown from './right/TherapyClassBreakdown';
import PhysicianSurveyPanel from './right/PhysicianSurveyPanel';
import PatientAttritionFunnel from './right/PatientAttritionFunnel';
import CompetitiveLandscapeTable from './right/CompetitiveLandscapeTable';
import CatalystsGrid from './right/CatalystsGrid';
import SectionDivider from './right/SectionDivider';
import IRAKPIRow from './right/IRAKPIRow';
import RebateScenarioChart from './right/RebateScenarioChart';
import AssumptionGrid from './right/AssumptionGrid';
import JJRevenueWaterfall from './right/JJRevenueWaterfall';
import BispecificKPIRow from './right/BispecificKPIRow';
import PatientFunnelChart from './right/PatientFunnelChart';
import BispecificShareBars from './right/BispecificShareBars';
import CARTConsensusBridge from './right/CARTConsensusBridge';
import TherapySequencingMap from './right/TherapySequencingMap';

function Staggered({ index, children }) {
  return (
    <div
      className="component-enter"
      style={{ animationDelay: `${index * 180}ms`, opacity: 0 }}
    >
      {children}
    </div>
  );
}

function SkeletonBlock({ height = 120 }) {
  return (
    <div className="skeleton" style={{ height, borderRadius: 8, width: '100%' }} />
  );
}

export default function RightPane({
  demoStep,
  showSkeleton2,
  showSkeleton3,
  // Ask ASKB props
  onAskASKBMarket, onAskASKBRebate, onAskASKBCART,
  hasQueriedMarket, hasQueriedRebate, hasQueriedCART,
  activeQueryMarket, activeQueryRebate, activeQueryCART,
  // New Ask ASKB props
  onAskASKBTherapyClass, onAskASKBPhysicianSurvey, onAskASKBPatientAttrition,
  onAskASKBCompetitiveLandscape, onAskASKBCatalysts, onAskASKBAssumptionGrid,
  onAskASKBJJRevenue, onAskASKBPatientFunnel, onAskASKBBispecificShare,
  onAskASKBTherapySequencing,
  hasQueriedTherapyClass, hasQueriedPhysicianSurvey, hasQueriedPatientAttrition,
  hasQueriedCompetitiveLandscape, hasQueriedCatalysts, hasQueriedAssumptionGrid,
  hasQueriedJJRevenue, hasQueriedPatientFunnel, hasQueriedBispecificShare,
  hasQueriedTherapySequencing,
  activeQueryTherapyClass, activeQueryPhysicianSurvey, activeQueryPatientAttrition,
  activeQueryCompetitiveLandscape, activeQueryCatalysts, activeQueryAssumptionGrid,
  activeQueryJJRevenue, activeQueryPatientFunnel, activeQueryBispecificShare,
  activeQueryTherapySequencing,
}) {
  const showPattern1 = demoStep >= 2;
  const showIRA = demoStep >= 4;
  const showBispecific = demoStep >= 6;
  const surfacedByASKB = demoStep >= 4;
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current && (showIRA || showBispecific)) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [showIRA, showBispecific]);

  if (demoStep === 0) {
    return (
      <div style={{
        flex: 1,
        background: '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 16,
      }}>
        <div style={{ fontSize: 13, color: '#555', textAlign: 'center', maxWidth: 260 }}>
          Relevant context will appear here as you explore
        </div>
      </div>
    );
  }

  return (
    <div style={{
      flex: 1,
      background: '#111111',
      overflowY: 'auto',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      {/* Skeleton while loading pattern 1 */}
      {demoStep === 1 && (
        <>
          <SkeletonBlock height={80} />
          <SkeletonBlock height={60} />
        </>
      )}

      {showPattern1 && (
        <>
          <Staggered index={0}><RightPaneHeader surfacedByASKB={surfacedByASKB} /></Staggered>
          <Staggered index={1}><KPIStatBar /></Staggered>
          <Staggered index={2}>
            <MarketGrowthChart
              onAskASKB={demoStep >= 2 ? onAskASKBMarket : undefined}
              hasQueried={hasQueriedMarket}
              isActiveQuery={activeQueryMarket}
            />
          </Staggered>
          <Staggered index={3}>
            <TherapyClassBreakdown
              onAskASKB={onAskASKBTherapyClass}
              hasQueried={hasQueriedTherapyClass}
              isActiveQuery={activeQueryTherapyClass}
            />
          </Staggered>
          <Staggered index={4}>
            <PhysicianSurveyPanel
              onAskASKB={onAskASKBPhysicianSurvey}
              hasQueried={hasQueriedPhysicianSurvey}
              isActiveQuery={activeQueryPhysicianSurvey}
            />
          </Staggered>
          <Staggered index={5}>
            <PatientAttritionFunnel
              onAskASKB={onAskASKBPatientAttrition}
              hasQueried={hasQueriedPatientAttrition}
              isActiveQuery={activeQueryPatientAttrition}
            />
          </Staggered>
          <Staggered index={6}>
            <CompetitiveLandscapeTable
              onAskASKB={onAskASKBCompetitiveLandscape}
              hasQueried={hasQueriedCompetitiveLandscape}
              isActiveQuery={activeQueryCompetitiveLandscape}
            />
          </Staggered>
          <Staggered index={7}>
            <CatalystsGrid
              onAskASKB={onAskASKBCatalysts}
              hasQueried={hasQueriedCatalysts}
              isActiveQuery={activeQueryCatalysts}
            />
          </Staggered>
        </>
      )}

      {/* Skeleton while Q2 streaming */}
      {showSkeleton2 && (
        <>
          <SkeletonBlock height={60} />
          <SkeletonBlock height={100} />
          <SkeletonBlock height={80} />
        </>
      )}

      {showIRA && (
        <>
          <Staggered index={0}><SectionDivider title="Scenario Analysis · IRA Rebate Shock · Generated by ASKB" /></Staggered>
          <Staggered index={1}><IRAKPIRow /></Staggered>
          <Staggered index={2}>
            <RebateScenarioChart
              onAskASKB={onAskASKBRebate}
              hasQueried={hasQueriedRebate}
              isActiveQuery={activeQueryRebate}
            />
          </Staggered>
          <Staggered index={3}>
            <AssumptionGrid
              onAskASKB={onAskASKBAssumptionGrid}
              hasQueried={hasQueriedAssumptionGrid}
              isActiveQuery={activeQueryAssumptionGrid}
            />
          </Staggered>
          <Staggered index={4}>
            <JJRevenueWaterfall
              onAskASKB={onAskASKBJJRevenue}
              hasQueried={hasQueriedJJRevenue}
              isActiveQuery={activeQueryJJRevenue}
            />
          </Staggered>
        </>
      )}

      {/* Skeleton while Q3 streaming */}
      {showSkeleton3 && (
        <>
          <SkeletonBlock height={60} />
          <SkeletonBlock height={100} />
          <SkeletonBlock height={80} />
        </>
      )}

      {showBispecific && (
        <>
          <Staggered index={0}><SectionDivider title="Scenario Analysis · Bispecific 2L Uptake · Generated by ASKB" /></Staggered>
          <Staggered index={1}><BispecificKPIRow /></Staggered>
          <Staggered index={2}>
            <PatientFunnelChart
              onAskASKB={onAskASKBPatientFunnel}
              hasQueried={hasQueriedPatientFunnel}
              isActiveQuery={activeQueryPatientFunnel}
            />
          </Staggered>
          <Staggered index={3}>
            <BispecificShareBars
              onAskASKB={onAskASKBBispecificShare}
              hasQueried={hasQueriedBispecificShare}
              isActiveQuery={activeQueryBispecificShare}
            />
          </Staggered>
          <Staggered index={4}>
            <CARTConsensusBridge
              onAskASKB={onAskASKBCART}
              hasQueried={hasQueriedCART}
              isActiveQuery={activeQueryCART}
            />
          </Staggered>
          <Staggered index={5}>
            <TherapySequencingMap
              onAskASKB={onAskASKBTherapySequencing}
              hasQueried={hasQueriedTherapySequencing}
              isActiveQuery={activeQueryTherapySequencing}
            />
          </Staggered>
        </>
      )}

      <div ref={bottomRef} style={{ height: 1 }} />
    </div>
  );
}
