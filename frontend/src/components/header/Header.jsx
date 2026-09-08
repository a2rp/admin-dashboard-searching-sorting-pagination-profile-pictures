import React from "react";
import styles from "./styles.module.scss";
import { Button } from '@chakra-ui/react'

const Header = () => {
    const email = window.localStorage.getItem("email") || "";
    const handleLogout = (event) => {
        event.preventDefault();
        window.localStorage.clear();
        window.location.reload();
    };

    return (
        <div className={styles.container}>
            {/* <NavLink className={styles.navlink} to="/home">Home</NavLink> */}
            USER MANAGEMENT DASHBOARD {email ? "[" + email + "]" : ""}
            {email.length === 0 ? <>
                {/* <NavLink className={styles.navlink} to="/login">Login</NavLink> */}
            </> : <>
                {/* <div className={`${styles.navlink} ${styles.logout}`} onClick={handleLogout}>Logout</div> */}
                <Button colorScheme='red' onClick={handleLogout}>Logout</Button>
            </>}
        </div>
    )
}

export default Header
