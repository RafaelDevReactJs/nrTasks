import { Link, useLocation } from "react-router-dom";
import { ListIcon, PlusIcon, MenuIcon, XIcon } from "lucide-react";
import PropTypes from "prop-types";

function Sidebar({ isOpen, onToggle }) {
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

  const handleLinkClick = () => {
    // Fechar sidebar em mobile ao clicar em um link
    if (window.innerWidth < 768 && isOpen) {
      onToggle();
    }
  };

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static
          top-0 left-0
          h-full
          w-64 bg-blue-900 text-white
          flex flex-col items-center py-8 px-4
          z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Botão de fechar para mobile */}
        <button
          onClick={onToggle}
          className="md:hidden absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <XIcon className="w-6 h-6" />
        </button>

        {/* Logo ou ícone no topo - formato de diamante */}
        <div className="mb-8 md:mb-12 flex flex-col items-center gap-3 md:gap-5">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white transform rotate-45 flex items-center justify-center shadow-lg">
            <span className="text-blue-900 font-bold text-lg md:text-xl transform -rotate-45">✓</span>
          </div>
          <span className="text-white font-medium text-sm md:text-base">RN Tasks</span>
        </div>

        {/* Menu de navegação */}
        <nav className="flex flex-col gap-2 md:gap-3 w-full">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={handleLinkClick}
                className={`
                  flex items-center gap-3 px-4 py-2.5 md:py-3 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "text-blue-200 hover:bg-blue-800 hover:text-white"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm md:text-base">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Botão hambúrguer para mobile */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="md:hidden fixed top-4 left-4 z-30 bg-blue-900 text-white p-2 rounded-md shadow-lg"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

Sidebar.defaultProps = {
  isOpen: false,
  onToggle: () => {},
};

export default Sidebar;

