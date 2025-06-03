import React, { useState, useEffect } from "react";

const TrafficLightSimulator = () => {
  const [currentLight, setCurrentLight] = useState("red");

 
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Traffic Light Simulator</h2>
      <div style={styles.trafficLight}>
        <div
          style={{
            ...styles.light,
            ...styles.red,
            ...(currentLight === "red" ? styles.active : {}),
          }}
        ></div>
        <div
          style={{
            ...styles.light,
            ...styles.yellow,
            ...(currentLight === "yellow" ? styles.active : {}),
          }}
        ></div>
        <div
          style={{
            ...styles.light,
            ...styles.green,
            ...(currentLight === "green" ? styles.active : {}),
          }}
        ></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#1e1e1e",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
  },
  trafficLight: {
    backgroundColor: "#2f2f2f",
    padding: "20px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },
  light: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#555",
    transition: "background-color 0.5s, box-shadow 0.5s",
  },
  red: {
    backgroundColor: "#440000",
  },
  yellow: {
    backgroundColor: "#444000",
  },
  green: {
    backgroundColor: "#004400",
  },
  active: {
    boxShadow: "0 0 20px 10px currentColor",
    filter: "brightness(1.5)",
  },
};

export default TrafficLightSimulator;
