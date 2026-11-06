"use client";

import { useHealth } from "../../context/HealthContext";

export default function Wellness() {
  const {
    water,
    setWater,
    sleep,
    setSleep,
    exercise,
    setExercise,
  } = useHealth();

  return (
    <main style={{ padding: "40px" }}>
      <h1>Wellness Tracker</h1>
      <p>Track your daily wellness habits.</p>

      <h2>Water Intake</h2>
      <p>Glasses of water: {water}</p>

      <button onClick={() => setWater((prev) => prev + 1)}>
        + Add Glass
      </button>

      <button onClick={() => setWater(0)}>
        Reset
      </button>

      <h2>Sleep Tracker</h2>
      <label>Hours of sleep: </label>
      <input
        type="number"
        min="0"
        max="24"
        value={sleep}
        onChange={(e) => setSleep(Number(e.target.value))}
      />

      <h2>Exercise Tracker</h2>
      <label>Exercise minutes: </label>
      <input
        type="number"
        min="0"
        value={exercise}
        onChange={(e) => setExercise(Number(e.target.value))}
      />
    </main>
  );
}