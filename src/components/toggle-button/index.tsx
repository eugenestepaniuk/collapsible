import React from "react";
import styles from "./styles.module.scss";

interface ToggleButtonProps {
  expanded: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  expanded,
  onClick,
  style,
}) => (
  <button
    className={styles.toggleIconBtn}
    onClick={onClick}
    style={style}
    type="button"
  >
    <span className={expanded ? styles.iconUp : styles.iconDown} />
  </button>
);
