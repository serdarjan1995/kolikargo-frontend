import { useState } from "react";

function useTab(defaultTab) {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const handleTabClick = (name) => setCurrentTab(name);

  return { currentTab, handleTabClick };
}

export default useTab;
