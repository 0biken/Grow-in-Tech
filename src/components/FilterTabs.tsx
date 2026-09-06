interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const FilterTabs = ({ tabs, activeTab, onTabChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeTab === tab}
          onClick={() => onTabChange(tab)}
          className={`rounded-full px-4 py-2 font-sans text-sm transition-colors duration-200 ${
            activeTab === tab
              ? "bg-git-accent text-git-dark font-semibold"
              : "bg-git-surface-2 text-git-muted hover:bg-git-surface-3"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
