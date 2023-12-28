import ReactDOM from 'react-dom';

const Modal = ({ show, onCloseButtonClick, children }) => {
    if (!show) {
        return null;
    }

    if (show) {
        document.body.style.overflow = 'hidden'; 
    } else {
        document.body.style.overflow = ''; 
    }

    const handleClose = () => {
        document.body.style.overflow = ''; 
        onCloseButtonClick();
    };

    return ReactDOM.createPortal(
        <div className="z-30 fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50 ">
            <div className="p-8 bg-white rounded-md w-[70%]">
                <h2 className="mb-4 text-lg font-bold">
                    <button className="float-right" onClick={handleClose}>
                        ✖️
                    </button>
                </h2>
                <div className="body">{children}</div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;