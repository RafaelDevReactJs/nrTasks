import PropTypes from "prop-types";

function Header(props) {
    const { title = "Gerenciador de Tarefas" } = props;
    return (
        <div className="mb-6">
            <h1 className="text-gray-900 text-2xl tracking-tight leading-tight font-medium">
                {title}
            </h1>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;