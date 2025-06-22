import React, { useState, useRef, useEffect, useMemo } from "react";
import type { ReactNode, ReactElement } from "react";
import styles from "./styles.module.scss";
import { ToggleButton } from "../toggle-button";

interface CollapsibleProps {
  children?: ReactNode;
  width?: string | number;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  width,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isText = typeof children === "string";
  const isArray = Array.isArray(children);
  const isNull = children === null || children === undefined;

  const validElements = useMemo(() => {
    return isArray ? (children as ReactElement[]).filter(Boolean) : [];
  }, [children, isArray]);

  const firstValidElement = validElements[0] || null;
  const restValidElements = validElements.slice(1);

  useEffect(() => {
    const updateShowToggle = (): void => {
      if (isText && textRef.current && wrapperRef.current) {
        const text = textRef.current;
        const container = wrapperRef.current;
        setShowToggle(text.scrollWidth > container.clientWidth);
      }

      if (isArray) {
        setShowToggle(validElements.length > 1);
      }
    };

    updateShowToggle();

    const resizeObserver = new ResizeObserver(updateShowToggle);
    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [validElements, isText, isArray]);

  if (isNull) return null;

  const handleToggle = (): void => setExpanded((prev) => !prev);

  const containerStyle: React.CSSProperties =
    typeof width === "number" ? { width: `${width}px` } : { width };

  return (
    <div className={styles.wrapper} style={containerStyle} ref={wrapperRef}>
      {isText && (
        <div className={styles.rowLayout}>
          <div
            className={styles.textContent}
            ref={textRef}
            style={{
              whiteSpace: expanded ? "normal" : "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              flex: 1,
            }}
          >
            {children}
            {expanded && (
              <ToggleButton
                expanded={expanded}
                onClick={handleToggle}
                style={{
                  marginLeft: 4,
                  paddingTop: 8,
                  display: "inline-flex",
                }}
              />
            )}
          </div>
          {!expanded && (showToggle || expanded) && (
            <ToggleButton expanded={expanded} onClick={handleToggle} />
          )}
        </div>
      )}

      {isArray && (
        <div className={styles.listWrapper}>
          <div className={styles.rowLayout}>
            <div className={styles.childItem}>
              {firstValidElement}
              {showToggle && (
                <ToggleButton
                  expanded={expanded}
                  onClick={handleToggle}
                  style={{ marginLeft: 4 }}
                />
              )}
            </div>
          </div>

          {expanded && (
            <div className={styles.restList}>
              {restValidElements.map((child, index) => (
                <div key={index} className={styles.childItem}>
                  {child}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {!isText && !isArray && <div>{children}</div>}
    </div>
  );
};
