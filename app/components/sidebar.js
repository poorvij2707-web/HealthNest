"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>HealthNest</h2>
      <p>PERSONAL HEALTH MANAGER</p>

      <nav>
        <Link href="/">Dashboard</Link>
        <Link href="/records">Health Records</Link>
        <Link href="/medications">Medications</Link>
        <Link href="/appointments">Appointments</Link>
        <Link href="/wellness">Wellness Tracker</Link>
        <Link href="/profile">Profile</Link>
      </nav>

    </aside>
  );
}