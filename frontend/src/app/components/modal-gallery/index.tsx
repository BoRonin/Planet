import ReactPortal from "../react-portal/ReactPortal";
import s from "./styles.module.css";
import React, { useEffect } from 'react'

// import ReactPortal from "./ReactPortal";

interface ModalGalleryProps {
    children: React.ReactNode; /* React.ReactChildren | React.ReactChild */
    isOpen: boolean;
    handleClose: () => void;
}

function ModalGallery({ children, isOpen, handleClose}: ModalGalleryProps) {

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => 
            e.key === 'Escape' ? handleClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey); 
        return () => document.body.removeEventListener('keydown', closeOnEscapeKey)
    }, [handleClose])
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return (): void => {
            document.body.style.overflow = 'unset';
        } 
    }, [isOpen])

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <>
                <div className={s.blackened_bg} onClick={handleClose} />

                <div className={s.modal_container}>
                    {children}
                </div>
            </>
        </ReactPortal>
    );
}

export default ModalGallery;

