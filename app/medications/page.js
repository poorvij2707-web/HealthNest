"use client";

import { useState } from "react";
import { useHealth } from "../../context/HealthContext";

export default function Medications() {
  const { medicines, addMedicine, toggleMedicine, deleteMedicine } = useHealth();

  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;

    addMedicine({ name, dosage });

    setName("");
    setDosage("");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Medications</h1>
      <p>Keep track of your medicines.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Medicine name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Dosage"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />

        <button type="submit">Add Medicine</button>
      </form>

      <h2>My Medicines</h2>

      {medicines.length === 0 && <p>No medicines added yet.</p>}

      {medicines.map((medicine) => (
        <div key={medicine.id}>
          <h3>{medicine.name}</h3>
          <p>Dosage: {medicine.dosage}</p>
          <p>Status: {medicine.active ? "Active" : "Paused"}</p>

          <button onClick={() => toggleMedicine(medicine.id)}>
            {medicine.active ? "Pause" : "Activate"}
          </button>

          <button onClick={() => deleteMedicine(medicine.id)}>
            Delete
          </button>
        </div>
      ))}
    </main>
  );
}