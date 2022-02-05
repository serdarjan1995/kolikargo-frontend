/* import { useState } from "react";

function useAccordionLogic() {
  const [currentTab, setCurrentTab] = useState("Genel");
  const [showMenu, setShowMenu] = useState();

  const handleMenuClick = (e, name) => {
    e.stopPropagation();
    setCurrentTab(name);
    setShowMenu(false);
  };

  return { handleMenuClick, currentTab, setCurrentTab };
}

export default useAccordionLogic;
 */