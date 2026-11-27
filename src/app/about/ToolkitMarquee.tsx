import { FaFigma, FaJira, FaSlack } from "react-icons/fa6";
import { SiAnthropic, SiNotion, SiMiro, SiHotjar } from "react-icons/si";
import { BsOpenai } from "react-icons/bs";
import type { IconType } from "react-icons";
import styles from "./ToolkitMarquee.module.scss";

type Tool = {
  name: string;
  Icon?: IconType;
  color?: string;
};

const coreTools: Tool[] = [
  { name: "Figma", Icon: FaFigma, color: "#a259ff" },
  { name: "Claude", Icon: SiAnthropic, color: "#d97757" },
  { name: "ChatGPT", Icon: BsOpenai },
  { name: "FigJam", color: "#9747ff" },
  { name: "Jira", Icon: FaJira, color: "#2684ff" },
];

const supportingTools: Tool[] = [
  { name: "Miro", Icon: SiMiro, color: "#b89b00" },
  { name: "Hotjar", Icon: SiHotjar, color: "#ff3c00" },
  { name: "Lyssna" },
  { name: "Zeroheight" },
  { name: "Lovable" },
  { name: "Notion", Icon: SiNotion },
  { name: "Slack", Icon: FaSlack, color: "#b45cb3" },
];

function ToolTile({ tool }: { tool: Tool }) {
  const { name, Icon, color } = tool;
  return (
    <li className={styles.tile} title={name}>
      <span className={styles.srOnly}>{name}</span>
      {Icon ? (
        <Icon aria-hidden="true" style={{ color }} />
      ) : (
        <span aria-hidden="true" className={styles.wordmark} style={{ color }}>
          {name}
        </span>
      )}
    </li>
  );
}

export function ToolkitMarquee() {
  return (
    <div className={styles.toolkit}>
      <input
        type="checkbox"
        id="pause-toolkit"
        className={styles.pause}
        aria-label="Pause toolkit animation"
      />
      <ul className={styles.core} aria-label="Core tools">
        {coreTools.map((tool) => (
          <ToolTile key={tool.name} tool={tool} />
        ))}
      </ul>
      <div className={styles.rows}>
        <div className={styles.row}>
          <div className={styles.track}>
            {[0, 1].map((copy) => (
              <ul
                className={styles.group}
                key={copy}
                aria-label="Supporting tools"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {supportingTools.map((tool) => (
                  <ToolTile key={tool.name} tool={tool} />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.heading}>
        <h2>Tools I work with</h2>
        <label htmlFor="pause-toolkit" className={styles.control}>
          <span className={styles.pauseText}>Pause</span>
          <span className={styles.playText}>Play</span>
        </label>
      </div>
    </div>
  );
}
