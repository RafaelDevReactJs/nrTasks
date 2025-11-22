import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Header(props) {
    const { title = "Gerenciador de Tarefas" } = props;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile ? (
        <div className="fixed top-0 left-0 right-0 h-16 bg-blue-900 flex items-center justify-end px-4 z-10">
            <h1 className="text-white text-sm font-semibold text-right">
                {title}
            </h1>
        </div>
    ) : (
        <div className="mb-6">
            <h1 className="text-gray-900 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                {title}
            </h1>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;