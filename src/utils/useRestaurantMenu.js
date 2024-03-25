import { useState, useEffect } from "react";

const useRestaurantMenu = (resid, MENU_RES) => {
  const [resmenu, setResMenu] = useState(null);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_RES + resid);
      const result = await response.json();
      setResMenu(result);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  return resmenu;
};

export default useRestaurantMenu;
