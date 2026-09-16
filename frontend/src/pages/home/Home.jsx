import React, { useState } from "react"
import Header from "../../components/header/Header"

import { Button } from "@chakra-ui/react"

import styles from "./styles.module.scss";
import AddUser from "../../components/addUser/AddUser";
import DisplayAllUsers from "../../components/displayAllUsers/DisplayAllUsers";
import Footer from "../../components/footer/Footer";
import { FiPlus, FiUsers } from "react-icons/fi";

const Home = () => {
    // add user or display all users
    const [section, setSection] = useState({
        addUser: false,
        displayAllUsers: true
    });
    const handleAddOrDisplayUserSection = (section) => {
        if (section === "add-user") {
            setSection({
                addUser: true,
                displayAllUsers: false
            });
        } else if (section === "display-all-users") {
            setSection({
                addUser: false,
                displayAllUsers: true
            });
        } else {
            setSection({
                addUser: true,
                displayAllUsers: false
            });
        }
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.contentContainer}>
                <div className={styles.hero}>
                    <div><span className={styles.kicker}><FiUsers /> Workspace overview</span><h1>Manage your users with clarity.</h1><p>Search, review, update, and organize account access from one focused dashboard.</p></div>
                    <div className={styles.heroStat}><strong>{window.localStorage.getItem("role") || "member"}</strong><span>Current role</span></div>
                </div>
                <div className={styles.actions}>
                {window.localStorage.getItem("role") === "administrator"
                    ? <Button leftIcon={<FiPlus />} colorScheme="blue" onClick={() => handleAddOrDisplayUserSection("add-user")}>Add User</Button>
                    : ""}

                {window.localStorage.getItem("role") === "administrator" || window.localStorage.getItem("role") === "editor"
                    ? <Button colorScheme="blue" marginLeft="15px" onClick={() => handleAddOrDisplayUserSection("display-all-users")}>Display All Users</Button>
                    : ""}
                </div>
            </div>

            {section.addUser === true ? <AddUser /> : ""}
            {section.displayAllUsers === true ? <DisplayAllUsers /> : ""}
            <Footer />
        </div>
    )
}

export default Home
