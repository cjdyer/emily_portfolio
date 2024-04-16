import React from "react";
import { css } from "@emotion/css";
import { palette } from "./types";

const getStyles = () => ({
  container: css({
    padding: "4vh 4vw",
  }),

  items: css({
  }),

  header: css({
    color: palette.accent,
    textAlign: "center",
    userSelect: "none",
    margin: 0,
  }),

  item: css({
    textAlign: "center",
    userSelect: "none",
    paddingTop: "2vh",
    paddingLeft: "10px",
  }),
});

const MeasurementItem: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => {
  const styles = getStyles();

  return (
    <div className={styles.item}>
      <strong>{label}:</strong> {value}
    </div>
  );
};

const Measurements: React.FC = () => {
  const styles = getStyles();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Measurements</h1>
      <div className={styles.items}>
        <MeasurementItem label="Height" value="178cm" />
        <MeasurementItem label="Bust" value="35" />
        <MeasurementItem label="Waist" value="26" />
        <MeasurementItem label="Hips" value="36.5" />
        <MeasurementItem label="Dress" value="6" />
        <MeasurementItem label="Shoe" value="8" />
        <MeasurementItem label="Cup" value="DD" />
        <MeasurementItem label="Hair" value="Auburn" />
        <MeasurementItem label="Eyes" value="Hazel" />
      </div>
    </div>
  );
};

export default Measurements;
