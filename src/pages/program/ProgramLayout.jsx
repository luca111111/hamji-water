
import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { to: "/program/stage", label: "무대프로그램" },
  { to: "/program/water", label: "물놀이프로그램" },
  { to: "/program/experience", label: "부대프로그램" },
  { to: "/program/rest", label: "휴식존" },
];

export default function ProgramLayout() {
  return (
    <div className="pt-28 px-4">
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full border ${isActive ? "bg-blue-500 text-white" : "bg-white text-gray-700 border-gray-300"}`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
