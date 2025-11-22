import { Link, useLocation } from "react-router-dom";
import { ListIcon, PlusIcon } from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      id: 1,
      label: "Listagem",
      path: "/",
      icon: ListIcon,
    },
    {
      id: 2,
      label: "Cadastro",
      path: "/add-task",
      icon: PlusIcon,
    },
  ];

  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col items-center py-8 px-4">
      {/* Logo ou ícone no topo - formato de diamante */}
      <div className="mb-12 flex flex-col items-center gap-5">
        <div className="w-12 h-12 bg-white transform rotate-45 flex items-center justify-center shadow-lg">
          <span className="text-blue-900 font-bold text-xl transform -rotate-45">✓</span>
        </div>
        <span className="text-white-900 font-medium">RN Tasks</span>
      </div>

      {/* Menu de navegação */}
      <nav className="flex flex-col gap-3 w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-700 text-white shadow-md"
                    : "text-blue-200 hover:bg-blue-800 hover:text-white"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;

