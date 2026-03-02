import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";


const Alert = ({ isVisible, onClose }) => {
    return (
        <div className={`alert ${isVisible ? 'visible' : ''}`}>
            <div className="alert__content">
                <div className="alert__actions">
                    <button className="alert__close" onClick={onClose}><IoClose /></button>
                </div>
                <div className="alert__icon">
                    <FaCheckCircle />
                </div>
                <p className="alert__message">Product successfully added to cart</p>
            </div>
        </div>
    )
}

export default Alert