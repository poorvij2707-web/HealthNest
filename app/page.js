import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F8FC" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px" }}>
        <h1>Dashboard</h1>
        <p>Welcome to your personal health space!</p>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Health Records</h2>
            <p>Manage your health information.</p>
            <a href="/records">View Records →</a>
          </div>

          <div className="dashboard-card">
            <h2>Medications</h2>
            <p>Keep track of your medicines.</p>
            <a href="/medications">View Medications →</a>
          </div>

          <div className="dashboard-card">
            <h2>Appointments</h2>
            <p>Manage your appointments.</p>
            <a href="/appointments">View Appointments →</a>
          </div>

          <div className="dashboard-card">
            <h2>Wellness Tracker</h2>
            <p>Track your daily wellness.</p>
            <a href="/wellness">View Wellness →</a>
          </div>
        </div>
      </main>
    </div>
  );
}