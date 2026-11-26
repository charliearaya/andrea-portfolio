"use client";

import { useState } from "react";
import { HiOutlineClipboard, HiOutlineCheck } from "react-icons/hi2";
import styles from "./Contact.module.scss";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <div className={styles.emailRow}>
        <span>{email}</span>
        <button
          type="button"
          className={styles.copy}
          aria-label="Copy email address"
          onClick={copy}
        >
          {status === "copied" ? (
            <HiOutlineCheck aria-hidden="true" />
          ) : (
            <HiOutlineClipboard aria-hidden="true" />
          )}
        </button>
      </div>
      <span className={styles.status} role="status">
        {status === "copied" ? "Email copied" : status === "error" ? "Please select and copy the email address manually." : ""}
      </span>
    </>
  );
}
