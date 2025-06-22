import React, { useState, useRef, useEffect } from "react";
import type { ReactNode, ReactElement } from "react";
import styles from "./Collapsible.module.scss";

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

  useEffect(() => {
    const updateShowToggle = (): void => {
      if (isText && textRef.current && wrapperRef.current) {
        const text = textRef.current;
        const container = wrapperRef.current;
        setShowToggle(text.scrollWidth > container.clientWidth);
      }

      if (isArray) {
        const validElements = (children as ReactElement[]).filter(Boolean);
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
  }, [children, isText, isArray]);

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
              <button
                className={styles.toggleIconBtn}
                onClick={handleToggle}
                style={{
                  marginLeft: 4,
                  paddingTop: 8,
                  display: "inline-flex",
                }}
              >
                <span className={expanded ? styles.iconUp : styles.iconDown} />
              </button>
            )}
          </div>
          {!expanded && (showToggle || expanded) && (
            <button className={styles.toggleIconBtn} onClick={handleToggle}>
              <span className={expanded ? styles.iconUp : styles.iconDown} />
            </button>
          )}
        </div>
      )}

      {isArray && (
        <div className={styles.listWrapper}>
          <div className={styles.rowLayout}>
            <div className={styles.childItem}>
              {(children as ReactElement[]).filter(Boolean)[0]}
              {showToggle && (
                <button
                  className={styles.toggleIconBtn}
                  onClick={handleToggle}
                  style={{
                    marginLeft: 4,
                  }}
                >
                  <span
                    className={expanded ? styles.iconUp : styles.iconDown}
                  />
                </button>
              )}
            </div>
          </div>

          {expanded && (
            <div className={styles.restList}>
              {(children as ReactElement[])
                .filter(Boolean)
                .slice(1)
                .map((child, index) => (
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
