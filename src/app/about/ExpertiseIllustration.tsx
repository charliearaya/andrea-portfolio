import styles from "./ExpertiseIllustration.module.scss";

const charcoal = "#55514E";
const sand = "#D8B99E";
const rose = "#C69D91";
const stone = "#B7B0A7";
const ink = "#242322";

export function ExpertiseIllustration({ index }: { index: number }) {
  return (
    <div className={styles.illustration}>
      <svg viewBox="0 0 160 125" aria-hidden="true" focusable="false">
        {index === 0 && (
          <>
            <circle className={styles.problem} cx="43" cy="62" r="33" fill={sand} />
            <path
              className={styles.refine}
              d="M67 32 Q67 27 72 30 L118 58 Q124 62 118 66 L72 94 Q67 97 67 92 Z"
              fill={charcoal}
            />
            <path
              className={styles.problem}
              d="M43 29 A33 33 0 0 1 43 95 Z"
              fill={ink}
            />
            <circle className={styles.solution} cx="136" cy="62" r="10" fill={rose} />
          </>
        )}
        {index === 1 && (
          <>
            <rect className={styles.upperLeft} x="35" y="16" width="42" height="42" fill={charcoal} rx="5" />
            <rect className={styles.upperRight} x="83" y="16" width="42" height="42" fill={rose} rx="5" />
            <rect className={styles.lowerLeft} x="35" y="64" width="42" height="42" fill={stone} rx="5" />
            <circle className={styles.lowerRight} cx="104" cy="85" r="21" fill={sand} />
            <rect className={styles.turn} x="60" y="41" width="40" height="40" fill={ink} rx="5" />
          </>
        )}
        {index === 2 && (
          <>
            <g className={styles.scan}>
              <circle cx="68" cy="51" r="34" fill={stone} />
              <circle cx="68" cy="51" r="20" fill="var(--illustration-background)" />
              <path d="M87 73 L116 102" stroke={ink} strokeWidth="19" strokeLinecap="round" />
              <rect x="59" y="34" width="11" height="34" fill={charcoal} rx="5" />
              <rect x="75" y="44" width="10" height="24" fill={rose} rx="5" />
              <rect x="43" y="49" width="10" height="19" fill={sand} rx="5" />
            </g>
          </>
        )}
        {index === 3 && (
          <>
            <circle className={styles.left} cx="55" cy="53" r="34" fill={charcoal} />
            <circle className={styles.right} cx="105" cy="53" r="34" fill={sand} />
            <circle className={styles.up} cx="80" cy="85" r="31" fill={stone} />
            <path className={styles.pulse} d="M80 30 Q98 53 80 76 Q62 53 80 30" fill={ink} />
            <circle className={styles.pulse} cx="80" cy="72" r="12" fill={ink} />
          </>
        )}
        {index === 4 && (
          <>
            <g className={styles.tilt}>
              <path d="M31 103 Q27 103 29 98 L64 22 Q66 18 71 18 H86 L52 103 Z" fill={charcoal} />
              <path d="M66 18 H81 Q86 18 88 23 L121 98 Q123 103 119 103 H98 Z" fill={rose} />
              <rect x="48" y="66" width="55" height="16" fill={stone} rx="5" />
              <path d="M62 66 H94 L101 82 H55 Z" fill={ink} />
            </g>
            <circle className={styles.up} cx="126" cy="31" r="13" fill={sand} />
          </>
        )}
        {index === 5 && (
          <>
            <g className={styles.turn}>
              <path d="M71 23 Q75 12 79 23 L88 48 L114 58 Q125 62 114 66 L88 76 L79 101 Q75 112 71 101 L62 76 L36 66 Q25 62 36 58 L62 48 Z" fill={rose} />
              <circle cx="75" cy="62" r="22" fill={charcoal} />
              <path d="M75 40 L88 62 L75 84 L62 62 Z" fill={ink} />
            </g>
            <path
              className={styles.pulse}
              d="M123 18 Q125 13 127 18 L131 26 L139 30 Q144 32 139 34 L131 38 L127 46 Q125 51 123 46 L119 38 L111 34 Q106 32 111 30 L119 26 Z"
              fill={sand}
            />
          </>
        )}
      </svg>
    </div>
  );
}
