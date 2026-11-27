import { FaFigma, FaJira, FaSlack } from "react-icons/fa6";
import { SiAnthropic, SiNotion } from "react-icons/si";
import { BsOpenai } from "react-icons/bs";
import styles from "./ToolkitMarquee.module.scss";

const tools = [
  { name: "Figma", Icon: FaFigma, color: "#a259ff" },
  { name: "Claude", Icon: SiAnthropic, color: "#d97757" },
  { name: "ChatGPT", Icon: BsOpenai, color: "currentColor" },
  { name: "Notion", Icon: SiNotion, color: "currentColor" },
  { name: "Jira", Icon: FaJira, color: "#2684ff" },
  { name: "Slack", Icon: FaSlack, color: "#b45cb3" },
  { name: "Lyssna", Icon: null, color: "currentColor" },
];

export function ToolkitMarquee() {
  return (
    <div className={styles.toolkit}>
      <input
        type="checkbox"
        id="pause-toolkit"
        className={styles.pause}
        aria-label="Pause toolkit animation"
      />
      <div className={styles.rows}>
        {[tools, [...tools.slice(3), ...tools.slice(0, 3)]].map((row, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.track}>
              {[0, 1].map((copy) => (
                <ul
                  className={styles.group}
                  key={copy}
                  aria-hidden={copy === 1 || index === 1 ? true : undefined}
                >
                  {row.map(({ name, Icon, color }) => (
                    <li className={styles.tile} key={name} title={name}>
                      <span className={styles.srOnly}>{name}</span>
                      {Icon ? (
                        <Icon aria-hidden="true" style={{ color }} />
                      ) : (
                        <span aria-hidden="true" className={styles.wordmark}>
                          Lyssna
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.heading}>
        <h2>My toolkit</h2>
        <label htmlFor="pause-toolkit" className={styles.control}>
          <span className={styles.pauseText}>Pause</span>
          <span className={styles.playText}>Play</span>
        </label>
      </div>
    </div>
  );
}
