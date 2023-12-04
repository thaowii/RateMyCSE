import React from 'react';
import './Popup.css'

interface PopupProps {
    onClose: () => void;
    header: string;
    children: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = (props) => {
    return (
        <div className="gray-screen">
            <div className="popup-container">
                <div className="popup-header">
                    {props.header}
                    <button onClick={props.onClose} className="popup-x">X</button>
                </div>
                    <div className="popup-text">{props.children}</div>
                <button className="popup-button" onClick={props.onClose}>OK</button>
            </div>
        </div>
    )
};

export default Popup;
