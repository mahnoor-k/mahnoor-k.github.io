export default function TabBar({ tabs, activeTab, setActiveTab, theme }) {
  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${tab === activeTab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
