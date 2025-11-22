import { XIcon } from "lucide-react";
import PropTypes from "prop-types";

function Modal({ isOpen, onClose, title, message, type = "error" }) {
  if (!isOpen) return null;

  const titleColor = type === "error" ? "text-red-800" : "text-blue-800";
  const messageColor = type === "error" ? "text-red-700" : "text-blue-700";
  const buttonColor = type === "error" ? "bg-red-600 hover:bg-red-700" : "bg-blue-900 hover:bg-blue-800";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`flex items-center gap-3 ${titleColor}`}>
              <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          
          <p className={`${messageColor} mb-6`}>
            {message}
          </p>
          
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className={`px-4 py-2 ${buttonColor} text-white rounded-md transition-colors font-medium`}
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "info", "success"]),
};

export default Modal;

