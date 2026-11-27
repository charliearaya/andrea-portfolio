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
            <circle className={styles.left} cx="55" cy="62" r="35" fill={sand} />
            <path className={styles.right} d="M55 27 L128 62 L55 97 Z" fill={charcoal} />
            <path className={styles.left} d="M55 27 A35 35 0 0 1 55 97 Z" fill={ink} />
            <circle className={styles.right} cx="112" cy="62" r="9" fill="#F5E9DD" />
          </>
        )}
        {index === 1 && (
          <>
            <rect className={styles.upperLeft} x="35" y="16" width="42" height="42" fill={charcoal} />
            <rect className={styles.upperRight} x="83" y="16" width="42" height="42" fill={rose} />
            <rect className={styles.lowerLeft} x="35" y="64" width="42" height="42" fill={stone} />
            <circle className={styles.lowerRight} cx="104" cy="85" r="21" fill={sand} />
            <rect className={styles.turn} x="60" y="41" width="40" height="40" fill={ink} />
          </>
        )}
        {index === 2 && (
          <>
            <g className={styles.scan}>
              <circle cx="68" cy="51" r="34" fill={stone} />
              <circle cx="68" cy="51" r="20" fill="var(--illustration-background)" />
              <path d="M87 73 L116 102" stroke={ink} strokeWidth="19" />
              <rect x="59" y="34" width="11" height="34" fill={charcoal} />
              <rect x="75" y="44" width="10" height="24" fill={rose} />
              <rect x="43" y="49" width="10" height="19" fill={sand} />
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
              <path d="M28 103 L66 18 H86 L52 103 Z" fill={charcoal} />
              <path d="M66 18 H86 L123 103 H98 Z" fill={rose} />
              <rect x="48" y="66" width="55" height="16" fill={stone} />
              <path d="M62 66 H94 L101 82 H55 Z" fill={ink} />
            </g>
            <circle className={styles.up} cx="126" cy="31" r="13" fill={sand} />
          </>
        )}
        {index === 5 && (
          <>
            <g className={styles.turn}>
              <path d="M75 12 L88 48 L125 62 L88 76 L75 112 L62 76 L25 62 L62 48 Z" fill={rose} />
              <circle cx="75" cy="62" r="22" fill={charcoal} />
              <path d="M75 40 L88 62 L75 84 L62 62 Z" fill={ink} />
            </g>
            <path
              className={styles.pulse}
              d="M125 13 L131 26 L144 32 L131 38 L125 51 L119 38 L106 32 L119 26 Z"
              fill={sand}
            />
          </>
        )}
      </svg>
    </div>
  );
}
