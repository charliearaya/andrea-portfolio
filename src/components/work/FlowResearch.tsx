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
