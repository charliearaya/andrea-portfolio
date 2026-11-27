import { FiSearch, FiUsers, FiMessageCircle, FiLayers, FiTarget, FiShield, FiRefreshCw, FiCompass, FiTrendingUp } from "react-icons/fi";
import { CaseCarousel } from "./CaseCarousel";
import styles from "./FlowResearch.module.scss";

const direct = ["Product Manager", "CEO / Founder", "Developer", "Marketing", "Support Team", "Strategy / Planner", "UX Researcher", "Content Designer"];
const indirect = ["AI tool vendors", "AI Research & Dev", "Legal / Compliance", "Investors / Board", "End Users", "Partners / Integrations", "Regulators", "Hosting / Infra", "Investor Group", "Performance Analytics", "Psychological Safety"];

export function FlowResearchSummary() {
  return (
    <div className={styles.bento} aria-label="Research summary">
      <div className={styles.stat}><strong>10</strong><h3>UX designers interviewed</h3><p>Across different seniority levels</p></div>
      <div className={styles.stat}><strong>80+</strong><h3>Research data points</h3><p>Synthesised through affinity mapping</p></div>
      <div className={styles.highlight}><span>Key research finding</span><h3>Confidence builds by accident, not by design.</h3><p>Designers lack structured support for developing AI confidence at work.</p></div>
      <div><h3>Trust &amp; accountability</h3><p>Designers want to understand when AI outputs can be trusted and when human validation is necessary.</p></div>
      <div><h3>Fragmented workflows</h3><p>Switching between tools creates friction, repetitive work and loss of context.</p></div>
      <div className={styles.full}><h3>Creative ownership</h3><p>Designers envision AI as an evolving collaborator, while retaining control over their thinking and decisions.</p></div>
    </div>
  );
}

export function FlowResearchCarousel() {
  return <CaseCarousel items={[
    {title: "Research methods", content: <div className={styles.artifact}><h3>How we researched</h3><div className={styles.methodGrid}>{[
      { icon: FiSearch, title: "Desk research", copy: "AI tool landscape, usage patterns and market signals." },
      { icon: FiUsers, title: "User interviews", copy: "10 UX designers across seniority levels, 30 minutes each." },
      { icon: FiMessageCircle, title: "SME interviews", copy: "AI practitioners and design educators." },
      { icon: FiLayers, title: "Affinity mapping", copy: "Themes clustered across 80+ data points." }
    ].map(({ icon: Icon, title, copy }, index) => <div className={styles.method} key={title}><div className={styles.methodTop}><Icon aria-hidden="true" /><span>0{index + 1}</span></div><h4>{title}</h4><span>{copy}</span></div>)}</div></div>},
    {title: "Stakeholder ecosystem", content: <div className={styles.artifact}><h3>Who is in the ecosystem?</h3><div className={styles.outer}><h4>Indirect stakeholders</h4><div className={styles.tags}>{indirect.map(label => <span key={label}>{label}</span>)}</div><div className={styles.inner}><h4>Direct stakeholders</h4><div className={styles.tags}>{direct.map(label => <span key={label}>{label}</span>)}</div><div className={styles.core}>UX &amp; Product Designers</div></div></div><p>AI trust is shaped by the ecosystem of tools, teams and organisational dynamics.</p></div>},
    {title: "Persona", content: <div className={styles.artifact}><div className={styles.personaHeader}><svg className={styles.portrait} viewBox="0 0 144 144" role="img" aria-label="Stylised illustration of the fictional research persona Sara"><rect width="144" height="144" rx="20" fill="#e4d9f2"/><circle cx="112" cy="30" r="18" fill="#c6f432"/><path d="M28 144v-18q0-35 44-39 44 4 44 39v18" fill="#58446e"/><path d="M57 83v19q15 17 30 0V83" fill="#d4a084"/><path d="M41 62q-4-38 30-41 35-3 35 37l-6 40-19-6-33 6z" fill="#48342f"/><ellipse cx="73" cy="64" rx="25" ry="32" fill="#e8b99b"/><path d="M46 60q-7-38 27-38 26 0 30 26-18-3-32-14-8 18-25 26" fill="#48342f"/><path d="M57 61h10m12 0h10" stroke="#48342f" strokeWidth="2" strokeLinecap="round"/><circle cx="63" cy="66" r="1.8" fill="#48342f"/><circle cx="84" cy="66" r="1.8" fill="#48342f"/><path d="M67 80q6 5 13 0" stroke="#a65f56" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M56 102l16 20 16-20" stroke="#e4d9f2" strokeWidth="3" fill="none"/></svg><div><h3>Sara, UX designer</h3><span>39 · Amsterdam</span><span className={styles.experience}>8 years in UX / product design</span><span className={styles.personaLabel}>Research persona</span></div></div><blockquote>“I want to use AI to work smarter, not to replace thinking”</blockquote><div className={styles.personaTraits}>{[{icon:FiTarget,title:"Goal",copy:"Thoughtful, high-quality design without losing human judgement."},{icon:FiCompass,title:"Behaviour",copy:"Experiments with AI selectively and critically; values synthesis over speed."},{icon:FiShield,title:"Frustration",copy:"Distrusts AI insights without visible reasoning and worries about loss of foundational skills."}].map(({icon:Icon,title,copy})=><div key={title}><Icon aria-hidden="true"/><div><h4>{title}</h4><span>{copy}</span></div></div>)}</div></div>},
    {title: "Participant voices", content: <div className={styles.artifact}><h3>What we heard</h3><div className={styles.voices}><blockquote>“I spend more time managing tools than actually designing. It breaks my flow constantly.”<cite>UX Designer · Agency</cite></blockquote><blockquote>“I'd pay for something that just remembered what I was doing across my whole workflow.”<cite>Freelance UX Designer</cite></blockquote><blockquote>“I lose the thinking every time I switch tabs. The insight doesn't transfer.”<cite>Senior Product Designer · Fintech</cite></blockquote></div></div>},
    {title: "Research synthesis", content: <div className={styles.artifact}><h3>Five themes from synthesis</h3><div className={styles.themeMap}>{[{icon:FiCompass,title:"Entry points & use triggers",copy:"No clear trigger for when to use AI."},{icon:FiMessageCircle,title:"Emotional landscape",copy:"Uncertainty and limited trust in outputs."},{icon:FiShield,title:"Risk & consequences",copy:"Designers carry the burden of accountability."},{icon:FiTrendingUp,title:"Learning loops & growth",copy:"Confidence develops without structured support."},{icon:FiRefreshCw,title:"Future mental models",copy:"AI as a growing collaborator that retains context."}].map(({icon:Icon,title,copy})=><div key={title}><Icon aria-hidden="true"/><h4>{title}</h4><span>{copy}</span></div>)}</div></div>}
  ]} />;
}


export function FlowDevelopCarousel() {
  return (
    <CaseCarousel items={[
      {
        title: "Crazy 8s",
        content: (
          <div className={styles.artifact}>
            <h3>Crazy 8s</h3>
            <div className={styles.developStat}><strong>8</strong><span>Ideas in 8 minutes</span></div>
            <div className={styles.sketchGrid} aria-hidden="true">
              {Array.from({ length: 8 }, (_, i) => (
                <svg key={i} viewBox="0 0 100 68" fill="none">
                  <rect x="5" y="5" width="90" height="58" rx="4" stroke="#79638e" strokeWidth="1.5"/>
                  <path d="M5 16H95" stroke="#79638e"/>
                  {i % 3 === 0 ? <><rect x="12" y="23" width="24" height="32" rx="2" fill="#d9cce9"/><path d="M44 27h42M44 35h32M44 43h40M44 51h23" stroke="#79638e" strokeWidth="2" strokeLinecap="round"/></> : i % 3 === 1 ? <><rect x="13" y="23" width="32" height="29" rx="3" fill="#e5f6ad"/><rect x="55" y="23" width="32" height="29" rx="3" fill="#d9cce9"/><path d="M45 37h10" stroke="#79638e" strokeWidth="2"/></> : <><circle cx="50" cy="28" r="8" fill="#d9cce9"/><path d="M50 36v8M24 44h52M24 44v9M76 44v9" stroke="#79638e" strokeWidth="2"/><rect x="14" y="53" width="20" height="5" rx="2" fill="#d9cce9"/><rect x="66" y="53" width="20" height="5" rx="2" fill="#e5f6ad"/></>}
                </svg>
              ))}
            </div>
            <span className={styles.diagramLabel}>Illustrative reconstruction of divergent ideation</span>
            <h4>Ideas that emerged</h4>
            <div className={styles.conceptTags}>{["AI companion", "AI picker", "Planning", "Tailored guidance", "Saving progress"].map(label => <span key={label}>{label}</span>)}</div>
          </div>
        )
      },
      {
        title: "Converging on a direction",
        content: (
          <div className={styles.artifact}>
            <h3>From ambiguity to clarity</h3>
            <svg className={styles.developDiagram} viewBox="0 0 480 220" role="img" aria-label="Scattered ideas converge into a shared direction through Crazy 8s, discussion and feedback">
              <path d="M35 110L170 22L305 110L170 198Z" fill="#e8e3ef"/>
              <path d="M175 110L305 30L445 110L305 190Z" fill="#e5f6ad" fillOpacity=".75"/>
              {[[85,94],[125,68],[150,140],[185,83],[120,130],[175,162]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5" fill="#79638e"/>)}
              <path d="M170 110H410" stroke="#79638e" strokeDasharray="4 5" strokeWidth="1.5"/>
              <circle cx="305" cy="110" r="9" fill="#79638e"/>
              <circle cx="445" cy="110" r="10" fill="#c6f432" stroke="#303030"/>
              <g fontSize="13" fill="#303030" textAnchor="middle"><text x="65" y="211">Scattered ideas</text><text x="240" y="211">Discussion &amp; feedback</text><text x="405" y="211">Shared direction</text></g>
            </svg>
            <p>Crazy 8s helped transform individual ideas into a shared sense of direction.</p>
          </div>
        )
      },
      {
        title: "Storyboarding",
        content: (
          <div className={styles.artifact}>
            <h3>Storyboard concept</h3>
            <div className={styles.storyGrid}>
              {[
                ["Define intent", "Describe the design task", "task"],
                ["Explore options", "Compare suggested workflows", "options"],
                ["Follow the process", "Understand steps and progress", "steps"],
                ["Review the outcome", "Evaluate the results", "result"]
              ].map(([title, copy, type], i) => (
                <div key={title}>
                  <svg viewBox="0 0 160 90" aria-hidden="true">
                    <rect x="8" y="8" width="144" height="74" rx="5" fill="#fff" stroke="#bcb1cc"/>
                    <path d="M8 21H152" stroke="#bcb1cc"/>
                    {type === "task" ? <><rect x="26" y="35" width="108" height="20" rx="5" fill="#e8e3ef"/><path d="M35 45h62" stroke="#79638e" strokeWidth="2"/><rect x="99" y="60" width="35" height="10" rx="3" fill="#c6f432"/></> : type === "options" ? <><rect x="22" y="33" width="54" height="37" rx="4" fill="#e8e3ef"/><rect x="84" y="33" width="54" height="37" rx="4" fill="#e5f6ad"/><path d="M30 44h37M30 52h27M92 44h36M92 52h26" stroke="#79638e" strokeWidth="2"/></> : type === "steps" ? <><path d="M34 34v33" stroke="#79638e"/>{[34,50,67].map((y,j)=><g key={y}><circle cx="34" cy={y} r="5" fill={j===1?"#c6f432":"#d9cce9"}/><path d={`M47 ${y}h72`} stroke="#79638e" strokeWidth="2"/></g>)}</> : <><circle cx="80" cy="42" r="12" fill="#c6f432"/><path d="m74 42 4 4 8-9" stroke="#303030" strokeWidth="2" fill="none"/><path d="M45 62h70M55 70h50" stroke="#79638e" strokeWidth="2"/></>}
                  </svg>
                  <h4>{i+1}. {title}</h4><span>{copy}</span>
                </div>
              ))}
            </div>
            <span className={styles.diagramLabel}>Retrospective storyboard of the concept, not the original sketches</span>
          </div>
        )
      },
      {
        title: "Prototyping",
        content: (
          <div className={styles.artifact}>
            <h3>From concept to prototype</h3>
            <div className={styles.prototypeFlow}>
              <div><span>01</span><h4>Low fidelity</h4><svg viewBox="0 0 220 115" aria-hidden="true"><rect x="12" y="8" width="196" height="99" rx="6" fill="#fff" stroke="#bcb1cc"/><rect x="22" y="18" width="38" height="79" rx="3" fill="#e5e5e5"/><rect x="70" y="24" width="124" height="16" rx="3" fill="#ddd"/><rect x="70" y="49" width="124" height="20" rx="3" fill="#eee"/><rect x="70" y="77" width="75" height="12" rx="3" fill="#ddd"/></svg><span>Explore structure and interactions.</span></div>
              <div><span>02</span><h4>Refined experience</h4><svg viewBox="0 0 220 115" aria-hidden="true"><rect x="12" y="8" width="196" height="99" rx="6" fill="#fff" stroke="#bcb1cc"/><rect x="22" y="18" width="38" height="79" rx="3" fill="#e8e3ef"/><rect x="70" y="24" width="124" height="16" rx="3" fill="#d9cce9"/><rect x="70" y="49" width="58" height="28" rx="3" fill="#e8e3ef"/><rect x="136" y="49" width="58" height="28" rx="3" fill="#e5f6ad"/><rect x="146" y="85" width="48" height="12" rx="3" fill="#c6f432"/></svg><span>Clarify guidance, workflow stages and feedback.</span></div>
            </div>
            <span className={styles.diagramLabel}>Illustrative wireframes, not original prototype screens</span>
            <p>Iterative prototyping and concept testing informed the guided workflow presented below.</p>
          </div>
        )
      }
    ]} />
  );
}
