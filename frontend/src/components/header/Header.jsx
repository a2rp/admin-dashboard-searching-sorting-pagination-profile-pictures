import styles from "./styles.module.scss";
import { FiLogOut, FiShield, FiUsers } from "react-icons/fi";

const Header = () => {
    const email = window.localStorage.getItem("email") || "";
    const handleLogout = (event) => {
        event.preventDefault();
        window.localStorage.clear();
        window.location.reload();
    };

    return (
        <header className={styles.container}>
            <div className={styles.brand}>
                <span className={styles.logo}><FiUsers /></span>
                <div><strong>Admin<span>Panel</span></strong><small>User management workspace</small></div>
            </div>
            <div className={styles.account}>
                <span className={styles.accountIcon}><FiShield /></span>
                <span className={styles.email}>{email || "Guest access"}</span>
                {email && <button type="button" className={styles.logout} onClick={handleLogout}><FiLogOut /> <span>Logout</span></button>}
            </div>
        </header>
    )
}

export default Header
