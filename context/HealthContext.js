"use client";

import { createContext, useContext, useState } from "react";

const HealthContext = createContext(null);

// Sample dummy data
const initialRecords = [
  { id: 1, title: "Annual Health Checkup", date: "2026-10-12" },
  { id: 2, title: "Blood Test", date: "2026-10-20" },
];

const initialMedicines = [
  { id: 1, name: "Sample Medicine", dosage: "As entered", active: true },
];

const initialAppointments = [
  {
    id: 1,
    doctor: "Dr. Sharma",
    date: "2026-11-10",
    time: "10:00",
    completed: false,
  },
];

export function HealthProvider({ children }) {
  const [records, setRecords] = useState(initialRecords);
  const [medicines, setMedicines] = useState(initialMedicines);
  const [appointments, setAppointments] = useState(initialAppointments);

  // Wellness data
  const [water, setWater] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [exercise, setExercise] = useState(0);

  // Records
  function addRecord(record) {
    setRecords((prev) => [...prev, { ...record, id: Date.now() }]);
  }

  function deleteRecord(id) {
    setRecords((prev) => prev.filter((item) => item.id !== id));
  }

  // Medicines
  function addMedicine(medicine) {
    setMedicines((prev) => [...prev, { ...medicine, id: Date.now(), active: true }]);
  }

  function toggleMedicine(id) {
    setMedicines((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  }

  function deleteMedicine(id) {
    setMedicines((prev) => prev.filter((item) => item.id !== id));
  }

  // Appointments
  function addAppointment(appointment) {
    setAppointments((prev) => [
      ...prev,
      { ...appointment, id: Date.now(), completed: false },
    ]);
  }

  function toggleAppointment(id) {
    setAppointments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function deleteAppointment(id) {
    setAppointments((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <HealthContext.Provider
      value={{
        records,
        addRecord,
        deleteRecord,
        medicines,
        addMedicine,
        toggleMedicine,
        deleteMedicine,
        appointments,
        addAppointment,
        toggleAppointment,
        deleteAppointment,
        water,
        setWater,
        sleep,
        setSleep,
        exercise,
        setExercise,
      }}
    >
      {children}
    </HealthContext.Provider>
  );
}

export function useHealth() {
  const context = useContext(HealthContext);

  if (!context) {
    throw new Error("useHealth must be used inside HealthProvider");
  }

  return context;
}