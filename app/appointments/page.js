"use client";

import { useState } from "react";
import { useHealth } from "../../context/HealthContext";

export default function Appointments() {
  const {
    appointments,
    addAppointment,
    toggleAppointment,
    deleteAppointment
  } = useHealth();

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!doctor.trim()) return;

    addAppointment({ doctor, date, time });

    setDoctor("");
    setDate("");
    setTime("");
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Appointments</h1>
      <p>Manage your doctor appointments.</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Doctor name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button type="submit">Add Appointment</button>
      </form>

      <h2>My Appointments</h2>

      {appointments.length === 0 && (
        <p>No appointments added yet.</p>
      )}

      {appointments.map((appointment) => (
        <div key={appointment.id}>
          <h3>{appointment.doctor}</h3>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <p>
            Status: {appointment.completed ? "Completed" : "Upcoming"}
          </p>

          <button onClick={() => toggleAppointment(appointment.id)}>
            {appointment.completed ? "Mark Upcoming" : "Mark Completed"}
          </button>

          <button onClick={() => deleteAppointment(appointment.id)}>
            Delete
          </button>
        </div>
      ))}
    </main>
  );
}