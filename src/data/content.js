// Dot color mapping — only named human analysts get dots
// green: #4caf82, red: #e05252
export const GREEN = '#4caf82';
export const RED = '#e05252';

export const Q1_TEXT = "What is the multiple myeloma drug market outlook through 2030?";

export const Q1_RESPONSE_PARTS = [
  // Section 1: Market Scale & Trajectory
  {
    section: "Market Scale & Trajectory",
    text: "The multiple myeloma drug market is projected to reach $33 billion by 2030 — a 40% increase from the $23.5 billion base in 2023, compounding at 5.2% annually. BI's model sits approximately 12% below street consensus of $37 billion, with the divergence driven almost entirely by IRA rebate risk on Darzalex Faspro that the street has not yet fully priced in.",
    chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }]
  },
  {
    text: "J&J and Bristol Myers Squibb together account for 91% of the 2023 market. That concentration will shift materially by 2030 — J&J extends its lead while BMS's Revlimid franchise faces near-complete US generic erosion, freeing up payer budget that flows directly into next-generation immunotherapies.",
    chips: [{ analyst: "David Risinger", firm: "Morgan Stanley", showDot: true, dotColor: RED }]
  },
  // Section 2: Therapy Class Dynamics
  {
    section: "Therapy Class Dynamics",
    text: "CD38 antibodies — led overwhelmingly by Darzalex — will represent approximately 46% of 2030 sales at $15.2 billion, down from ~55% today as newer classes grow around them. Darzalex's front-line penetration has reached 66% in transplant-eligible patients and is still expanding, which paradoxically creates the CD38-exposed population that drives CAR-T and bispecific demand downstream.",
    chips: [{ analyst: "Terence Flynn", firm: "Morgan Stanley", showDot: true, dotColor: GREEN }]
  },
  {
    text: "CAR-T therapies are expected to capture 22% of the market by 2030 — approximately $7.3 billion split between Carvykti, anito-cel, and Abecma. The key risk to this figure is bispecific 2L uptake compressing the late-line patient pool that CAR-T depends on; BI models a 25% reduction in 3L/4L-eligible patients under the base Tecvayli scenario.",
    chips: [{ analyst: "Chris Schott", firm: "JPMorgan", showDot: true, dotColor: RED }]
  },
  {
    text: "Bispecific antibodies will account for 18% of the market at $5.9 billion, with Tecvayli capturing approximately 74% of bispecific sales through its dominant 2L positioning following MajecTEC-3. The class did not exist commercially four years ago — it is the fastest-growing segment in the myeloma landscape.",
    chips: [{ analyst: "Aude Gerspacher", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }]
  },
  // Section 3: Key Risks to the Outlook
  {
    section: "Key Risks to the Outlook",
    text: "Bristol Myers' Revlimid faces near-complete US generic erosion by 2026 — BI models 2030 sales of $190 million versus a peak of over $12 billion. The LOE impact is a known headwind already absorbed by the market, and the budget it frees creates structural tailwind for premium-priced newer agents.",
    chips: [{ analyst: "Tim Anderson", firm: "Wolfe Research", showDot: true, dotColor: GREEN }]
  },
  {
    text: "The single largest forecast risk is the IRA negotiation timeline for Darzalex Faspro, which represents over 90% of Darzalex's gross US sales. BI's base case models a 25-point rebate increase from 2029, arriving at $14.7 billion for Darzalex in 2030 — 12% below current consensus of $16.7 billion. A bear case where Faspro is bundled with IV Darzalex in 2029 rather than treated separately would reduce cumulative 2029–2032 revenue by approximately $42 billion versus baseline.",
    chips: [{ analyst: "Max Nisen", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }]
  },
];

export const Q2_TEXT = "What happens to Darzalex sales if Faspro faces IRA price cuts in 2029?";

export const Q2_RESPONSE_PARTS = [
  {
    section: "The Faspro Exposure",
    text: "Darzalex Faspro — the subcutaneous formulation — now represents over 90% of gross US Darzalex sales, having displaced IV administration almost entirely since 2022. This concentration is what makes the IRA question so consequential: virtually every dollar of US Darzalex revenue flows through the formulation that is most legally ambiguous under IRA Part B negotiation rules.",
    chips: [{ analyst: "J&J Q4 2024 Earnings Call", firm: "", showDot: false }]
  },
  {
    section: "Why Medicare Exposure Is Near-Total",
    text: "Myeloma's median age of diagnosis is 69, making it one of the highest Medicare-penetration indications in oncology — approximately 75% of treated patients are Medicare Part B beneficiaries. Unlike solid tumors where younger patients shift the payer mix, myeloma's epidemiology means IRA negotiated prices would apply to the dominant share of Darzalex volume almost immediately upon implementation.",
    chips: [{ analyst: "CMS Medicare Part B Data 2024", firm: "", showDot: false }]
  },
  {
    section: "The Legal Ambiguity — and Why It Matters",
    text: "J&J's legal position is that Faspro is a distinct biological product with its own exclusivity running to 2036, making it ineligible for IRA negotiation until that year. HHS has not formally accepted or rejected this framing. The precedent that creates risk: in the 2028 IRA cycle, HHS negotiated Keytruda's SC formulation alongside IV pembrolizumab rather than treating it as a separate product — directly contrary to Merck's legal argument. BI treats this as applicable precedent.",
    chips: [{ analyst: "HHS IRA Negotiation Framework", firm: "", showDot: false }]
  },
  {
    section: "BI's Base Case vs. Bear Case",
    text: "BI's base case models Faspro entering IRA negotiation in 2029 alongside IV Darzalex, with an effective rebate rising from ~20% to 45% — consistent with the average rebate depth HHS has achieved on the first eight negotiated drugs. Under this scenario, Darzalex 2030 US net sales reach $14.7 billion, 12% below street consensus of $16.7 billion. The bear case — a 55% effective rebate, in line with the most aggressive HHS precedent — would compress 2030 sales further to approximately $13.1 billion.",
    chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }]
  },
  {
    section: "The $42 Billion Cumulative Number",
    text: "The $42 billion figure represents cumulative US Darzalex revenue foregone versus the no-IRA baseline across 2029–2032 — the four years spanning peak commercial Faspro sales before biosimilar entry. This is not a single-year impact: it compounds across the period when Darzalex would otherwise be generating $15–17 billion annually. It is the single largest near-term financial risk in J&J's pharmaceutical portfolio.",
    chips: [{ analyst: "Max Nisen", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }]
  },
  {
    section: "Where the Street Disagrees",
    text: "Most sell-side models still embed Faspro standalone eligibility in 2034, placing consensus Darzalex 2030 at $16.7 billion — only $0.2 billion below J&J's own implied guidance. Morgan Stanley's David Risinger has the highest estimate at $17.4 billion, explicitly discounting IRA bundling risk. Morgan Stanley's Terence Flynn revised down 8% in March to $15.9 billion, closer to our $14.7B base case. The spread in estimates — $13 to $17 billion — is almost entirely a function of one variable: which year Faspro enters negotiation.",
    chips: [{ analyst: "Terence Flynn", firm: "Morgan Stanley", showDot: true, dotColor: GREEN }]
  }
];

// ── Ask ASKB synthesis responses ──────────────────────────────────────────────

export const ASKB_MARKET_GROWTH = {
  sourceCount: 11,
  queryText: '"MM market forecast · IRA impact · BI vs consensus divergence"',
  parts: [
    {
      text: "BI's $33B 2030 forecast sits below the $37B street consensus — a gap that has widened over the past 18 months as IRA negotiation timelines have come into focus.",
      chips: [
        { analyst: "Tim Anderson", firm: "Wolfe Research", showDot: true, dotColor: GREEN },
      ],
    },
    {
      text: "J&J guided on its Q4 2024 call that Darzalex Faspro now represents the dominant share of US gross sales, making the SC formulation — not the IV — the relevant asset for IRA purposes.",
      chips: [
        { analyst: "J&J Q4 2024 Earnings", firm: "", showDot: false },
      ],
    },
    {
      text: "Morgan Stanley's Terence Flynn revised his 2030 Darzalex estimate down 8% in March following the HHS announcement on formulation bundling precedent — his $15.9B estimate remains above our $14.7B base case.",
      chips: [
        { analyst: "Terence Flynn", firm: "Morgan Stanley", showDot: true, dotColor: GREEN },
      ],
    },
    {
      text: "The 5.2% CAGR in BI's model reflects a deliberate conservatism on IRA pass-through — Sam Fazeli's view is that consensus is systematically underpricing formulary risk on the two biggest myeloma franchises.",
      chips: [
        { analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN },
      ],
    },
    {
      text: "A recent NEJM analysis of Medicare Part B reimbursement patterns found SC oncology formulations have faced bundled negotiation in 3 of the last 4 IRA cycles, lending empirical support to BI's bear-case timing assumption.",
      chips: [
        { analyst: "NEJM Medicare Part B Analysis", firm: "", showDot: false },
      ],
    },
  ],
};

export const ASKB_REBATE_SCENARIO = {
  sourceCount: 14,
  queryText: '"Darzalex IRA · Faspro rebate exposure · HHS formulation precedent"',
  parts: [
    {
      text: "The central question is whether HHS treats Darzalex Faspro as a distinct drug from IV Darzalex for IRA negotiation purposes. J&J's position — stated at its 2024 Investor Day — is that Faspro is a separate formulation with its own exclusivity period running to 2036.",
      chips: [
        { analyst: "J&J Investor Day 2024", firm: "", showDot: false },
      ],
    },
    {
      text: "HHS has not publicly committed to either treatment, but its negotiation of Keytruda's SC formulation alongside IV in the 2028 cycle established a precedent that runs directly counter to J&J's argument.",
      chips: [
        { analyst: "HHS IRA Negotiation Framework", firm: "", showDot: false },
      ],
    },
    {
      text: "Tim Anderson at Wolfe flagged this precedent in a February note, estimating a 40% probability of bundled 2029 negotiation — the bear case BI also treats as plausible.",
      chips: [
        { analyst: "Tim Anderson", firm: "Wolfe Research", showDot: true, dotColor: GREEN },
      ],
    },
    {
      text: "BI's base case models a 25-point rebate increase from 2029, taking effective rebate from ~20% to ~45% — consistent with IRA-negotiated levels seen on Eliquis and Jardiance.",
      chips: [
        { analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN },
      ],
    },
    {
      text: "The $42B cumulative impact figure is a 2029–2032 revenue delta, not a single-year hit — it reflects the compounding effect of the rebate across Faspro's peak commercial years.",
      chips: [
        { analyst: "Max Nisen", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN },
      ],
    },
    {
      text: "BMO's Evan Seigerman noted in April that this is the one scenario J&J's management has conspicuously declined to model publicly, which the market has largely read as de-risking the bear case — BI disagrees with that read.",
      chips: [
        { analyst: "Evan Seigerman", firm: "BMO Capital Markets", showDot: true, dotColor: RED },
      ],
    },
  ],
};

export const ASKB_CART_CONSENSUS = {
  sourceCount: 16,
  queryText: '"BCMA CAR-T · Carvykti vs anito-cel · bispecific compression · 2L uptake impact"',
  parts: [
    {
      text: "The consensus bridge on Carvykti reflects a structural disagreement about how much of the late-line patient pool survives broad 2L bispecific adoption. BI's model shows a 25% reduction in treatment-eligible 3L/4L patients by 2030 under the base Tecvayli scenario — a compression that flows directly into Carvykti's addressable market.",
      chips: [
        { analyst: "Max Nisen", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN },
      ],
    },
    {
      text: "At ASCO 2026, the MajecTEC-3 data showed an 83% reduction in progression risk for Tecvayli plus Darzalex in second line — a result that materially accelerated BI's timeline for 2L penetration reaching the 35% threshold that triggers pool compression.",
      chips: [
        { analyst: "MajecTEC-3", firm: "ASCO 2026", showDot: false },
      ],
    },
    {
      text: "JPMorgan's Chris Schott cut his Carvykti 2030 estimate to $2.8B following MajecTEC-3, still above BI's $2.3B — the remaining gap is BI's more aggressive assumption on how quickly community oncologists adopt 2L bispecifics vs. academic centers.",
      chips: [
        { analyst: "Chris Schott", firm: "JPMorgan", showDot: true, dotColor: RED },
      ],
    },
    {
      text: "Anito-cel's differentiation case rests on its safety profile from the CARTITUDE-6 comparison data — lower rates of Grade 3+ CRS and ICANS than Carvykti in matched cohort analysis.",
      chips: [
        { analyst: "CARTITUDE-6", firm: "NEJM 2025", showDot: false },
      ],
    },
    {
      text: "Gilead's management cited the safety data as the primary driver of physician preference in community settings at its Q1 2025 earnings, noting 39% of surveyed physicians now favor anito-cel for patients over 70.",
      chips: [
        { analyst: "Gilead Q1 2025 Earnings", firm: "", showDot: false },
      ],
    },
    {
      text: "BI's $3.1B anito-cel estimate — $100M above consensus — reflects this safety-driven community uptake assumption, which is the single highest-conviction differentiation call in BI's myeloma model.",
      chips: [
        { analyst: "Aude Gerspacher", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN },
      ],
    },
  ],
};

// ── Ask ASKB synthesis responses — additional components ──────────────────────

export const ASKB_THERAPY_CLASS = {
  sourceCount: 12,
  queryText: '"MM therapy class dynamics · CD38 vs CAR-T vs bispecific · 2030 mix shift"',
  parts: [
    {
      text: "CD38 antibodies will remain the dominant therapy class through 2030, but their share is structurally declining as CAR-T and bispecifics capture more of the second and third-line market. Darzalex accounts for over 95% of the CD38 class today.",
      chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "Morgan Stanley's Terence Flynn has modeled the CD38 class compressing from 55% of 2023 sales to 46% by 2030 — driven almost entirely by bispecific 2L uptake pulling patients away from CD38-based retreatment regimens.",
      chips: [{ analyst: "Terence Flynn", firm: "Morgan Stanley", showDot: true, dotColor: GREEN }],
    },
    {
      text: "CAR-T's 22% share by 2030 assumes Carvykti and anito-cel together reach approximately $5.4B — a figure that is highly sensitive to the bispecific 2L penetration rate, which BI models more conservatively than consensus.",
      chips: [{ analyst: "Max Nisen", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The small molecule erosion story is essentially complete by 2026 — Revlimid generic entry has already compressed BMS's franchise from $12B peak to under $200M, freeing up formulary and payer budget that flows directly to the newer immunotherapy classes.",
      chips: [{ analyst: "Tim Anderson", firm: "Wolfe Research", showDot: true, dotColor: GREEN }],
    },
    {
      text: "NEJM's 2025 retrospective on myeloma treatment patterns confirmed that CD38-exposed patients who receive CAR-T have materially better outcomes than those receiving further CD38 therapy — a clinical signal that is accelerating the sequencing shift BI models.",
      chips: [{ analyst: "NEJM Myeloma Treatment Patterns · 2025", firm: "", showDot: false }],
    },
  ],
};

export const ASKB_PHYSICIAN_SURVEY = {
  sourceCount: 9,
  queryText: '"MM physician survey · Darzalex front-line adoption · 2L CAR-T vs bispecific preference"',
  parts: [
    {
      text: "BI's quarterly survey of 100 hematologists is one of the most granular real-world reads on myeloma practice patterns available. The 66% quadruplet adoption rate for transplant-eligible patients in April 2026 is a significant jump from 55% a year prior — driven by the Faspro-based quadruplet approval and improved tolerability data.",
      chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The European penetration figure — over 75% — reflects both earlier Darzalex approval timelines and less aggressive biosimilar competition in the SC segment. JPMorgan's Chris Schott has flagged EU/US convergence as a near-term upside catalyst for J&J's ex-US sales guidance.",
      chips: [{ analyst: "Chris Schott", firm: "JPMorgan", showDot: true, dotColor: RED }],
    },
    {
      text: "The 2L preference split — 60% CAR-T, 18% Tecvayli plus Darzalex — is more CAR-T-forward than the street anticipated following MajecTEC-3. BI interprets this as physicians prioritizing depth of response over convenience at first relapse in fit patients.",
      chips: [{ analyst: "Aude Gerspacher", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The 23% of academic centers refusing the Tecvayli plus Darzalex combination reflects concerns about T-cell exhaustion compromising subsequent CAR-T efficacy — a mechanistic concern that has appeared in three ASCO 2026 abstracts.",
      chips: [{ analyst: "ASCO 2026 T-cell Exhaustion Data", firm: "", showDot: false }],
    },
    {
      text: "Wolfe's Tim Anderson noted the survey data implies Carvykti volume upside in the near term, even as the structural 2030 pool compression story plays out — a tension BI's model explicitly captures in the 2026-2028 period.",
      chips: [{ analyst: "Tim Anderson", firm: "Wolfe Research", showDot: true, dotColor: GREEN }],
    },
  ],
};

export const ASKB_PATIENT_ATTRITION = {
  sourceCount: 34,
  queryText: '"MM patient attrition · line of therapy progression · bispecific pull-forward · CAR-T eligibility compression"',
  parts: [
    {
      section: "The Attrition Funnel: Quantified",
      text: "Structural attrition in MM is severe and well-documented. ~36,000 new US cases are diagnosed annually, but the addressable late-line pool is a fraction of that: 51% of US NDMM patients are ineligible for autologous stem cell transplant due to comorbidities. Non-transplant attrition to 2L runs ~57.7%; transplant-eligible patients face ~21% attrition before reaching 2L. Only 52% of 2L patients progress to 3L, and of those, only 39% advance to 4L — meaning roughly 20% of 2L patients ever reach the line where CAR-T has historically been deployed. Approximately 16,000 US patients start 4L+ therapy annually.",
      chips: [{ analyst: "Bethan Swift", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      section: "Stage-by-Stage Drivers",
      text: "Diagnosis to 2L: Comorbidities — hepatorenal dysfunction, peripheral neuropathy, diabetes mellitus, poor ECOG performance status — are as determinative as age in excluding patients from intensive regimens. The majority of patients now enter 1L on daratumumab-based quadruplets (Dara-VRd), meaning nearly all 2L patients are already CD38-refractory, constraining downstream regimen options.",
      chips: [{ analyst: "Cindy Wu", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "1L to 2L — Early Mortality and Relapse Dynamics: ~16% of patients relapse within 12 months of starting therapy; ~50% relapse after approximately two years. Fatal adverse reactions within 30 days of last treatment were observed in 6–9% of patients in pivotal trials (BOSTON/STORM). The five-year survival rate is approximately 50%, and patients surviving to later lines are progressively frailer due to cumulative disease burden and treatment toxicity.",
      chips: [
        { analyst: "Etzer Darout", firm: "Barclays", showDot: true, dotColor: RED },
      ],
    },
    {
      text: "2L to 3L — Access Barriers Compounding Clinical Attrition: The 48% attrition between 2L and 3L reflects early mortality, disease progression outpacing treatment timelines, tolerability failures, and logistical barriers. Treatment discontinuation due to adverse reactions runs 19–27% in pivotal trials. CAR-T manufacturing lead times, geographic access constraints, insurance approvals, and REMS logistics prevent many technically eligible patients from receiving therapy — only ~25% of technically eligible patients actually receive autologous CAR-T, per Roche's Pharma Day 2025 disclosure.",
      chips: [
        { analyst: "Sami Corwin", firm: "William Blair", showDot: true, dotColor: RED },
      ],
    },
    {
      text: "3L to 4L — Triple-Class Refractoriness: After 3–4 lines, drug resistance, comorbidity accumulation, and poor tolerability severely limit remaining options. Roth Capital estimates only 13% of transplant patients and 35% of non-transplant patients with symptomatic myeloma progress to 4L. Most patients do not reach 5L — attrition is driven by infections, severe disease, and treatment-related mortality.",
      chips: [
        { analyst: "Charles Butler", firm: "Roth Capital Partners", showDot: true, dotColor: RED },
      ],
    },
    {
      section: "The Bispecific Pull-Forward Problem",
      text: "Earlier 2L bispecific use introduces compounding structural risk across three mechanisms. First, T-cell exhaustion: bispecifics deplete and exhaust T cells with each dose, impairing fitness of cells available for CAR-T manufacturing — 65% of physicians surveyed prefer a CAR-T-first approach specifically due to this concern. Patients exposed to bispecifics before BCMA CAR-T show significantly decreased CAR-T response rates, and over 80% of respondents indicate a non-BCMA washout line is necessary before rechallenging with the same target.",
      chips: [{ analyst: "Cindy Wu", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "Second, antigen loss and target resistance: prior BCMA-directed therapy causes loss of BCMA downregulation on myeloma cells, directly reducing the binding efficacy of subsequent BCMA-targeted agents including CAR-T. Notably, 57% of patients who relapsed on prior anti-BCMA bispecifics still responded to Carvykti — suggesting partial but not complete cross-resistance.",
      chips: [{ analyst: "Leslie Yang", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "Third, market compression: earlier use of T-cell engagers in RRMM could reduce the pool of treatment-eligible late-line US patients by up to 40% by 2030, compressing the downstream late-line market beginning around 2027. Currently only 5% of 2L MM patients utilize bispecifics — but this share is rising, and MajesTEC-3 (Tec-Dara vs. DPd/DVd in 1–3 prior lines) is accelerating physician willingness to deploy them earlier. BCMA bispecifics are unlikely to displace CAR-T in 2L at academic centers but may see meaningful uptake in community settings where CAR-T infrastructure is limited.",
      chips: [{ analyst: "Bethan Swift", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      section: "Key Structural Takeaways",
      text: "The funnel is narrow by design: structural attrition means only ~20% of 2L patients reach 4L — the historical CAR-T sweet spot — before any sequencing debates. The 40% late-line pool compression by 2030 is the most consequential sell-side modeling assumption for CAR-T revenue forecasts, implying the addressable US late-line patient base could fall from ~16,000 to roughly 9,600–10,000 annually. Community vs. academic divergence will likely determine sequencing outcomes — community physicians, lacking CAR-T infrastructure, will default to bispecifics earlier, accelerating the attrition dynamic disproportionately in that setting.",
      chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
  ],
};

export const ASKB_COMPETITIVE_LANDSCAPE = {
  sourceCount: 46,
  queryText: '"bispecific differentiation · Tecvayli vs Elrexfio vs Talvey · MajesTEC-3 · anito-cel risk · community adoption"',
  parts: [
    {
      section: "Market Position Snapshot",
      text: "Tecvayli (teclistamab) holds over 55% market share in the late-line BCMA bispecific market, driven by first-to-market status and its March 2026 2L approval via MajesTEC-3. Elrexfio (elranatamab) trails at approximately 30% share, while Lynozyfic (linvoseltamab) has captured ~17% of the US market since its 2025 approval, aided by its fixed dose and flexible dosing schedule. The key differentiating axis for community adoption is CRS burden and hospitalization requirements — not efficacy, which analysts broadly view as equi-efficacious across BCMA bispecifics as monotherapy.",
      chips: [{ analyst: "Cindy Wu", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      section: "Dosing & Community Adoption",
      text: "Tecvayli requires ~6 nights of step-up hospitalization — the most burdensome among the three — with a 72% any-grade CRS rate in monotherapy trials. Only 9% of patients remain fully outpatient. Prophylactic tocilizumab (OPTec trial) significantly mitigates CRS without compromising efficacy. More community practices are becoming REMS-certified but often refer patients to academic institutions for step-up dosing. Elrexfio requires ~3 nights (50% fewer) and uses a flat non-weight-based subcutaneous dose — a meaningful practical differentiator cited by community physicians. Despite these advantages, Elrexfio has struggled to gain penetration even when offered at no cost, with teclistamab dominant at a 4:1 ratio at most sites.",
      chips: [{ analyst: "Michael Schmidt", firm: "Guggenheim", showDot: true, dotColor: RED }],
    },
    {
      text: "Talvey targets GPRC5D rather than BCMA — a structurally different competitive position that makes it complementary rather than directly substitutable with the BCMA bispecifics. Off-target GPRC5D toxicities — taste changes, skin/nail/hair toxicity, and ataxia — limit its use as a primary therapy and make it difficult for patients to remain on treatment long-term. BI survey data confirms Talvey's positioning as the preferred therapy after failure of BCMA-targeted treatments, not as a first bispecific choice. The Tecvayli + Talvey combination (RedirecTT-1) showed mPFS of 20.9 months in Phase 1b but is considered very difficult to tolerate in practice.",
      chips: [{ analyst: "GLG Expert Content · April 2026", firm: "", showDot: false }],
    },
    {
      section: "MajesTEC-3 and Tecvayli's 2L Repositioning",
      text: "MajesTEC-3 evaluated Tec-Dara vs. investigator's choice DPd/DVd in 587 RRMM patients with 1–3 prior lines. Results: 83% reduction in progression risk, 54% reduction in death risk vs. SOC; 36-month PFS of 83.4% vs. 29.7%; ORR 89% vs. 75.3%; CR/sCR 81.8% vs. 32.1%; MRD negativity 58.4% vs. 17.1%. FDA approved Tec-Dara for 2L+ RRMM in March 2026, fast-tracked in 55 days. Bullish read: Scotiabank and Leerink see ~30% anticipated penetration in 2L+ post-label expansion. Skeptical read: Stifel flags only ~5% of MajesTEC-3 patients had prior anti-CD38 exposure — a critical limitation given that nearly all US patients now receive daratumumab in 1L. Tec-Dara is the preferred 2L choice for only 18% of physicians surveyed, with 60% still favoring CAR-T for fit patients at first relapse.",
      chips: [{ analyst: "Stephen Willey", firm: "Stifel", showDot: true, dotColor: RED }],
    },
    {
      section: "Which Asset Is Most at Risk from Anito-cel?",
      text: "Near-universal sell-side agreement: Abecma (ide-cel) is the primary casualty, not the bispecifics. Abecma reported US revenues of $77M in Q3 2024 — a fraction of Carvykti's trajectory. Anito-cel offers 'Carvykti-like efficacy and Abecma-like safety,' directly stranding Abecma's sole remaining differentiator. KarMMa-9, Abecma's sole earlier-line expansion study, was discontinued. TD Cowen projects anito-cel could reach 75% peak CAR-T market share, capturing ~50% of Carvykti's 4L+ share. However, 65% of Carvykti's current usage is in the 2–4L setting where anito-cel's initial label (expected 4L/5L) will not compete directly — providing a near-term buffer. Morgan Stanley flags that anito-cel's 'safer Carvykti' profile makes physicians reluctant to use Carvykti broadly in earlier lines, a structural headwind even before direct label competition.",
      chips: [{ analyst: "Terence Flynn", firm: "Morgan Stanley", showDot: true, dotColor: GREEN }],
    },
    {
      text: "Among the three bispecifics, Tecvayli monotherapy is most exposed to anito-cel — it occupies the same patient population (post-CAR-T relapse or CAR-T-ineligible) and is viewed as comparable in efficacy to Abecma. Talvey's GPRC5D target provides structural insulation as the preferred post-BCMA-exposure option. Elrexfio's Phase 3 MagnetisMM-32 data in 2L+ (expected 2026) is the key catalyst that could either entrench or erode its position relative to both Tec-Dara and anito-cel. Emerging threat: AbbVie's ABBV-383 requires only one step-up dose with monthly dosing from the start, with a 40% any-grade CRS rate vs. 72% for Tecvayli — a profile analysts believe will resonate strongly with community physicians.",
      chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
  ],
};

export const ASKB_CATALYSTS = {
  sourceCount: 11,
  queryText: '"MM key catalysts 2026-2030 · IRA decision · Tecvayli 2L · anito-cel approval · arlo-cel data"',
  parts: [
    {
      text: "The IRA Faspro decision is the highest-magnitude binary event in the myeloma space — J&J's management has consistently guided investors toward the 2034 standalone eligibility timeline, but HHS precedent on SC formulations has moved against that position over the past 18 months.",
      chips: [{ analyst: "J&J Investor Day 2024", firm: "", showDot: false }],
    },
    {
      text: "The Tecvayli 2L approval — confirmed by MajecTEC-3's 83% PFS reduction — is already a fait accompli, but its commercial ramp in 2L is the real catalyst to watch. Wells Fargo's Mohit Bansal estimates Tecvayli 2L adoption reaches 25% market share by end of 2027 under his base case, with upside to 35% if payer coverage aligns by mid-2027.",
      chips: [{ analyst: "Mohit Bansal", firm: "Wells Fargo", showDot: true, dotColor: GREEN }],
    },
    {
      text: "Anito-cel's December 2026 PDUFA date is the next binary event — approval is widely expected, but the label breadth matters. An earlier-line label (3L versus 4L) would be a material upside versus BI's model, which assumes a 3L-plus initial indication.",
      chips: [{ analyst: "Terence Flynn", firm: "Morgan Stanley", showDot: true, dotColor: GREEN }],
    },
    {
      text: "Arlo-cel is the least-modeled catalyst on the list — a GPRC5D-targeting CAR-T with a post-BCMA retreatment positioning that creates a niche not captured in most competitive models. ASCO 2026 data showed a 71% ORR in heavily pretreated patients.",
      chips: [{ analyst: "Arlo-cel ASCO 2026 Data", firm: "", showDot: false }],
    },
  ],
};

export const ASKB_ASSUMPTION_GRID = {
  sourceCount: 8,
  queryText: '"IRA model assumptions · Faspro rebate scenario · HHS negotiation methodology"',
  parts: [
    {
      text: "The 45% effective rebate assumption in BI's IRA scenario is grounded in the observed central tendency of HHS's first two negotiation cycles — Eliquis moved from 15% to 41% effective rebate, Jardiance from 18% to 47%. Faspro's profile — dominant market share, high Medicare penetration, no therapeutic alternative — maps closely to both precedents.",
      chips: [{ analyst: "HHS IRA Negotiation Framework", firm: "", showDot: false }],
    },
    {
      text: "The Medicare eligibility figure of approximately 75% is consistent across all sell-side models and J&J's own disclosures — myeloma's median age of diagnosis is 69, making it one of the most Medicare-heavy oncology indications.",
      chips: [{ analyst: "CMS Medicare Part B Data · 2024", firm: "", showDot: false }],
    },
    {
      text: "Tim Anderson at Wolfe has done the most granular public analysis of the IRA bundling question, estimating a 40% probability of Faspro being bundled with IV Darzalex in the 2029 cycle rather than treated as a separate negotiation in 2034. BI treats this as its base case, not a bear case.",
      chips: [{ analyst: "Tim Anderson", firm: "Wolfe Research", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The $1.8B 2030 sales difference between baseline and IRA scenario flows almost entirely from the rebate line — all other assumptions are held constant. This makes the model's output unusually sensitive to a single regulatory decision, which is why BI flags it as the primary risk to its J&J revenue forecast.",
      chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
  ],
};

export const ASKB_JJ_REVENUE = {
  sourceCount: 13,
  queryText: '"J&J myeloma revenue 2023-2030 · Darzalex growth drivers · IRA waterfall impact"',
  parts: [
    {
      text: "J&J's myeloma franchise is the most valuable oncology asset in the industry by revenue — $10.9B in 2023, growing to $14.9B by 2030 in BI's model despite the IRA headwind. The franchise's breadth across four distinct mechanisms (CD38, CAR-T, bispecific, GPRC5D) is what makes it uniquely resilient to class-level disruption.",
      chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The Carvykti ramp contribution (+$2.1B) assumes J&J resolves manufacturing capacity constraints by 2026 — a view supported by management's Q4 2024 guidance on Raritan facility expansion, which targets 10,000 annual doses by end of 2026.",
      chips: [{ analyst: "J&J Q4 2024 Earnings", firm: "", showDot: false }],
    },
    {
      text: "The $2.0B IRA rebate drag is the single largest negative contributor in the waterfall — larger than generic erosion, larger than competitive pressure from bispecifics. Morgan Stanley's David Risinger excludes this drag entirely from his model, which explains most of the $12B gap between our $14.9B forecast and the $26.9B street consensus.",
      chips: [{ analyst: "David Risinger", firm: "Morgan Stanley", showDot: true, dotColor: RED }],
    },
    {
      text: "BMO's Evan Seigerman sits between BI and consensus at $19.4B, applying a partial IRA discount but assuming Faspro standalone eligibility in 2034. The range of sell-side estimates — from BI's $14.9B to the high end of $28B+ — reflects genuine model uncertainty on the IRA question, not just forecast imprecision.",
      chips: [{ analyst: "Evan Seigerman", firm: "BMO Capital Markets", showDot: true, dotColor: RED }],
    },
  ],
};

export const ASKB_PATIENT_FUNNEL = {
  sourceCount: 13,
  queryText: '"3L/4L patient pool · bispecific compression scenario · epidemiology model 2024-2032"',
  parts: [
    {
      text: "The patient funnel compression scenario is BI's most differentiated epidemiology call in the myeloma space — a 25% reduction in treatment-eligible 3L/4L patients by 2030 under broad 2L bispecific adoption. This is not a marginal adjustment; it restructures the late-line competitive landscape permanently.",
      chips: [{ analyst: "Max Nisen", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The 35% 2L Tecvayli share threshold is the key model parameter — below it, late-line pool compression is manageable; above it, the funnel shifts in a way that no CAR-T ramp can compensate for by 2032. BI's base case sits at 28% by 2028, close enough to the threshold that the bear case is plausible.",
      chips: [{ analyst: "Bethan Swift", firm: "Bloomberg Intelligence", showDot: true, dotColor: RED }],
    },
    {
      text: "MajecTEC-3's 83% PFS reduction data from ASCO 2026 has caused BI to revise the 2L uptake timeline forward by approximately 18 months relative to the pre-trial model — the pace of community adoption is now the key uncertainty, not the clinical efficacy case.",
      chips: [{ analyst: "MajecTEC-3 · ASCO 2026", firm: "", showDot: false }],
    },
    {
      text: "JPMorgan's Chris Schott has argued the compression scenario is too aggressive because it assumes bispecific 2L use is additive to the existing patient population — in practice, some patients who receive 2L bispecifics will have longer remissions and eventually become eligible for 3L CAR-T. BI's model accounts for this delay but not full recovery.",
      chips: [{ analyst: "Chris Schott", firm: "JPMorgan", showDot: true, dotColor: RED }],
    },
  ],
};

export const ASKB_BISPECIFIC_SHARE = {
  sourceCount: 10,
  queryText: '"Bispecific antibody market share · Tecvayli vs Elrexfio vs Lynozyfic · physician preference"',
  parts: [
    {
      text: "Tecvayli's 55% physician preference among bispecifics reflects both its two-year first-mover advantage and its 2L approval — it is now the only bispecific with a randomized trial showing superiority to standard of care in second line. That combination of data and label breadth is difficult for Elrexfio or Lynozyfic to replicate quickly.",
      chips: [{ analyst: "Aude Gerspacher", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "Elrexfio's 30% share reflects Pfizer's flexible dosing schedule as the primary differentiator — physicians treating community patients with transportation constraints specifically cite the option of monthly dosing after initial cycles. Wells Fargo's Mohit Bansal has the most bullish Elrexfio estimate on the street at $2.1B for 2030, above our class allocation.",
      chips: [{ analyst: "Mohit Bansal", firm: "Wells Fargo", showDot: true, dotColor: GREEN }],
    },
    {
      text: "Lynozyfic's 17% preference and fixed every-4-week dosing from day one is the most differentiated convenience profile in the class — but Regeneron's commercial infrastructure in hematology is thinner than J&J's or Pfizer's, which BI views as the binding constraint on its uptake curve.",
      chips: [{ analyst: "Tim Anderson", firm: "Wolfe Research", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The 65% of physicians preferring CAR-T before bispecifics is a sequencing preference with major commercial consequences — it means bispecifics are largely a post-CAR-T or CAR-T-ineligible market today, even as the 2L approval begins to shift that calculus for fit patients.",
      chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
  ],
};

export const ASKB_THERAPY_SEQUENCING = {
  sourceCount: 14,
  queryText: '"MM therapy sequencing · treatment pathway 2026 · post-BCMA options · GPRC5D rationale"',
  parts: [
    {
      text: "The therapy sequencing landscape in 2026 is more complex than at any prior point in myeloma history — four distinct mechanisms across four lines of therapy, with physician preference bifurcating between academic centers (more aggressive early CAR-T) and community practice (more sequential CD38-based approaches).",
      chips: [{ analyst: "Sam Fazeli", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The 66% Darzalex quadruplet penetration in front-line reflects a near-complete shift in the transplant-eligible standard of care since 2022. The clinical implication is that virtually all patients entering 2L are now CD38-exposed, which eliminates retreatment as a viable option and drives both the CAR-T and bispecific markets downstream.",
      chips: [{ analyst: "ASCO 2026 NDMM Data", firm: "", showDot: false }],
    },
    {
      text: "Post-BCMA sequencing — after CAR-T or bispecific failure — is where Talvey's GPRC5D targeting becomes commercially relevant. The 41% physician preference for Talvey after CAR-T reflects a genuine unmet need: BCMA-targeting is exhausted at that point, and GPRC5D offers a distinct mechanism with a 73% ORR in the MonumenTAL-1 trial.",
      chips: [{ analyst: "MonumenTAL-1 · NEJM 2024", firm: "", showDot: false }],
    },
    {
      text: "Morgan Stanley's Terence Flynn has the highest Talvey 2030 estimate on the street at $3.2B, predicated on earlier-line label expansion into 2L — a scenario we treat as upside rather than base case, given the ongoing TRIMM-3 combination trial data expected in late 2026.",
      chips: [{ analyst: "Terence Flynn", firm: "Morgan Stanley", showDot: true, dotColor: GREEN }],
    },
    {
      text: "The community/academic split at 4L — 39% CAR-T preference in community versus essentially 0% in practice due to logistics — captures the gap between physician intent and commercial reality that BI's model tries to explicitly bridge.",
      chips: [{ analyst: "Bethan Swift", firm: "Bloomberg Intelligence", showDot: true, dotColor: RED }],
    },
  ],
};

export const Q3_TEXT = "How does broad 2L bispecific uptake affect CAR-T eligible patients and Carvykti sales?";

export const Q3_RESPONSE_PARTS = [
  {
    text: "Beyond direct sales competition, bispecifics create a structural risk for CAR-T by compressing the late-line patient pool they depend on.",
    chips: []
  },
  {
    text: "BI's epidemiology model shows treatment-eligible 3L/4L US patients would grow to ~12,000 by 2030 under the base case as the population ages.",
    chips: [{ analyst: "Max Nisen", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }]
  },
  {
    text: "Under a scenario where Tecvayli + Darzalex (approved 2L in March, MajecTEC-3: 83% reduction in progression risk) reaches 35% 2L market share by 2028, that eligible pool falls to ~9,000 — nearly half.",
    chips: [{ analyst: "J&J MajecTEC-3 Trial Data", firm: "ASCO 2026", showDot: false }]
  },
  {
    text: "The impact is most acute in 4th line: from ~4,000 patients in the base case to ~2,600 in the high-uptake scenario. No modeled trajectory recovers to baseline by 2040.",
    chips: [{ analyst: "BI Epi Scenario Builder", firm: "May 2026", showDot: false }]
  },
  {
    text: "For Carvykti specifically, BI's model projects 2030 sales of $2.3 billion under this scenario — approximately $1 billion below current consensus.",
    chips: [{ analyst: "Max Nisen", firm: "Bloomberg Intelligence", showDot: true, dotColor: GREEN }]
  },
  {
    text: "Global consensus has already fallen over $1 billion in the past year as bispecific efficacy data has come into focus.",
    chips: [{ analyst: "Evan Seigerman", firm: "BMO Capital Markets", showDot: true, dotColor: RED }]
  }
];
