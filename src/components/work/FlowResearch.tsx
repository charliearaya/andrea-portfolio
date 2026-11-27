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
    {title: "Research methods", content: <div className={styles.artifact}><h3>How we researched</h3><dl><dt>Desk research</dt><dd>AI tool landscape, usage patterns and market signals.</dd><dt>User interviews</dt><dd>10 UX designers across seniority levels, 30 minutes each.</dd><dt>SME interviews</dt><dd>AI practitioners and design educators.</dd><dt>Affinity mapping</dt><dd>Themes clustered across 80+ data points.</dd></dl></div>},
    {title: "Stakeholder ecosystem", content: <div className={styles.artifact}><h3>Who is in the ecosystem?</h3><div className={styles.outer}><h4>Indirect stakeholders</h4><div className={styles.tags}>{indirect.map(label => <span key={label}>{label}</span>)}</div><div className={styles.inner}><h4>Direct stakeholders</h4><div className={styles.tags}>{direct.map(label => <span key={label}>{label}</span>)}</div><div className={styles.core}>UX &amp; Product Designers</div></div></div><p>AI trust is shaped by the ecosystem of tools, teams and organisational dynamics.</p></div>},
    {title: "Persona", content: <div className={styles.artifact}><h3>Sara, UX designer</h3><p>39 · Amsterdam · 8 years in UX / product design</p><blockquote>“I want to use AI to work smarter, not to replace thinking”</blockquote><dl><dt>Goal</dt><dd>Thoughtful, high-quality design without losing human judgement.</dd><dt>Behaviour</dt><dd>Experiments with AI selectively and critically; values synthesis over speed.</dd><dt>Frustration</dt><dd>Distrusts AI insights without visible reasoning and worries about loss of foundational skills.</dd></dl></div>},
    {title: "Participant voices", content: <div className={styles.artifact}><h3>What we heard</h3><blockquote>“I spend more time managing tools than actually designing. It breaks my flow constantly.”<cite>UX Designer · Agency</cite></blockquote><blockquote>“I'd pay for something that just remembered what I was doing across my whole workflow.”<cite>Freelance UX Designer</cite></blockquote><blockquote>“I lose the thinking every time I switch tabs. The insight doesn't transfer.”<cite>Senior Product Designer · Fintech</cite></blockquote></div>},
    {title: "Research synthesis", content: <div className={styles.artifact}><h3>Five themes from synthesis</h3><dl><dt>Entry points &amp; use triggers</dt><dd>No clear trigger for when to use AI.</dd><dt>Emotional landscape</dt><dd>Uncertainty and limited trust in outputs.</dd><dt>Risk &amp; consequences</dt><dd>Designers carry the burden of accountability.</dd><dt>Learning loops &amp; growth</dt><dd>Confidence develops without structured support.</dd><dt>Future mental models</dt><dd>AI as a growing collaborator that retains context.</dd></dl></div>}
  ]} />;
}
