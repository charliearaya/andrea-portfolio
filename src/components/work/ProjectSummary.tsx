import { Text } from "@once-ui-system/core";
import styles from "./ProjectSummary.module.scss";

export type ProjectDetails = {
  role: string;
  context: string;
  team: string;
  timeline: string;
  scope: string;
};

export function ProjectSummary({ details }: { details: ProjectDetails }) {
  return (
    <dl className={styles.summary} aria-label="Project overview">
      <div>
        <dt>
          <Text variant="label-default-s" onBackground="neutral-weak">Role</Text>
        </dt>
        <dd>
          <Text variant="body-default-m">{details.role}</Text>
        </dd>
      </div>
      <div>
        <dt>
          <Text variant="label-default-s" onBackground="neutral-weak">Context</Text>
        </dt>
        <dd>
          <Text variant="body-default-m">{details.context}</Text>
        </dd>
      </div>
      <div>
        <dt>
          <Text variant="label-default-s" onBackground="neutral-weak">Team</Text>
        </dt>
        <dd>
          <Text variant="body-default-m">{details.team}</Text>
        </dd>
      </div>
      <div>
        <dt>
          <Text variant="label-default-s" onBackground="neutral-weak">Timeline</Text>
        </dt>
        <dd>
          <Text variant="body-default-m">{details.timeline}</Text>
        </dd>
      </div>
      <div className={styles.scope}>
        <dt>
          <Text variant="label-default-s" onBackground="neutral-weak">Scope</Text>
        </dt>
        <dd>
          <Text variant="body-default-m">{details.scope}</Text>
        </dd>
      </div>
    </dl>
  );
}
