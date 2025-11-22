import PropTypes from "prop-types";

function Input(props) {
    const { type = "text", placeholder = "Digite aqui", value, onChange } = props;
    return (
        <input 
            type={type}
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" />
    );
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
};

export default Input;