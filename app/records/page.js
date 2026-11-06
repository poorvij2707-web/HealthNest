"use client";

import { useState } from "react";
import { useHealth } from "../../context/HealthContext";

export default function Records() {
  const { records, addRecord, deleteRecord } = useHealth();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    addRecord({ title, date });

    setTitle("");
    setDate("");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Health Records</h1>
      <p>Store and manage your health information.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter record name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">Add Record</button>
      </form>

      <h2>My Records</h2>

      {records.length === 0 && <p>No records added yet.</p>}

      {records.map((record) => (
        <div key={record.id}>
          <h3>{record.title}</h3>
          <p>{record.date}</p>

          <button onClick={() => deleteRecord(record.id)}>
            Delete
          </button>
        </div>
      ))}
    </main>
  );
}