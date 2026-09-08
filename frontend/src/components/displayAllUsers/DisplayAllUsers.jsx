import { Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayPaginatedData from "./DisplayPaginatedData";
import { API_BASE_URL } from "../../config/api";

const DisplayAllUsers = () => {
    const navigate = useNavigate();
    const userEmail = window.localStorage.getItem("email") || "";
    const [allUsers, setAllUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (!userEmail) {
            navigate("/login");
            return;
        }

        axios.get(`${API_BASE_URL}/api/v1/user-all`)
            .then((response) => setAllUsers(response.data.users || []))
            .catch(() => setAllUsers([]));
    }, [navigate, userEmail]);

    const searchText = search.trim().toLowerCase();
    const filteredUsers = allUsers.filter((user) => [user.name, user.userid, user.role, user.email]
        .some((value) => String(value).toLowerCase().includes(searchText)));

    return (
        <div>
            {window.localStorage.getItem("role") === "administrator" && (
                <Input
                    type="search"
                    name="search"
                    placeholder="Search users"
                    onChange={(event) => setSearch(event.target.value)}
                    value={search}
                    marginLeft="15px"
                    width="500px"
                    backgroundColor="#aaa"
                    color="#fff"
                />
            )}
            <DisplayPaginatedData jsonData={filteredUsers} userEmail={userEmail} />
        </div>
    );
};

export default DisplayAllUsers;
