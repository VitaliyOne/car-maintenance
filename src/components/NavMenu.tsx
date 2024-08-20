import { NavLink } from "react-router-dom";

const NavMenu = () => {
    return (
        <nav className="navMenu">
        <NavLink
          to="/fuel-filling"
          className={({ isActive }) => (isActive ? "tab active-tab" : "tab")}
        >
          Заправка
        </NavLink>
        <NavLink
          to="/oil-change"
          className={({ isActive }) => (isActive ? "tab active-tab" : "tab")}
        >
          Замена масла
        </NavLink>
        <NavLink
          to="/repair-costs"
          className={({ isActive }) => (isActive ? "tab active-tab" : "tab")}
        >
          Расходы на ремонт
        </NavLink>
        <NavLink
          to="/technical-maintenance"
          className={({ isActive }) => (isActive ? "tab active-tab" : "tab")}
        >
          Техническое обслуживание
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? "tab active-tab" : "tab")}
        >
          Статистика
        </NavLink>
        <NavLink
          to="/tuning"
          className={({ isActive }) => (isActive ? "tab active-tab" : "tab")}
        >
          Тюнинг
        </NavLink>
      </nav>
    );
  };
  
  export default NavMenu;