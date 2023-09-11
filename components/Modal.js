import styles from './modal.module.css';


export default function Modal({show, showHandler, children}) {
    return (
        <div className={show ? styles.modal : styles.modalHide}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={showHandler}>&times;</span>
                {children}
            </div>
        </div>
    );
}
