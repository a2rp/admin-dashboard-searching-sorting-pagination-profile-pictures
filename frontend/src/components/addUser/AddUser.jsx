import { Button, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../config/api';

const AddUser = () => {
    const navigate = useNavigate(null);
    useEffect(() => {
        if (window.localStorage.getItem("role") !== "administrator") {
            navigate("/home");
        }
    }, [navigate]);

    // add user
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        password_confirm: "",
        role: ""
    });
    const [response, setResponse] = useState("");
    const handleInputsChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };

    const handleAddUserSubmit = (event) => {
        event.preventDefault();

        setResponse(false);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputs.email)) {
            setResponse("Invalid Email");
            return;
        }

        if (inputs.password.trim().length < 8) {
            setResponse("Password length minimum 8 required");
            return;
        }

        // console.log(inputs);
        if (inputs.role === "") {
            setResponse("role not selected");
            return;
        }

        // const formData = new FormData();
        // formData.append("name", inputs.name);
        // formData.append("email", inputs.email);
        // formData.append("password", inputs.password);
        // formData.append("password_confirm", inputs.password_confirm);
        // formData.append("role", inputs.role);

        setIsSubmitting(true);
        setResponse("");
        axios.post(`${API_BASE_URL}/api/v1/user-add`, inputs).then(response => {
            if (response.data.success) {
                // window.location.reload();
                setInputs({
                    name: "",
                    email: "",
                    password: "",
                    password_confirm: "",
                    role: ""
                });
            }
            setResponse(response.data.message);
        }).catch(error => {
            setResponse(error.message);
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    const [selected, setSelected] = useState();
    const handleRoleChange = event => {
        setSelected(event.target.value);
        setInputs({ ...inputs, role: event.target.value });
    };


    return (
        <div>
            <Text fontSize="20px" color="tomato" marginLeft="15px">
                Add User
            </Text>
            <form onSubmit={handleAddUserSubmit} encType="multipart/form-data" >
                <FormControl margin="15px" width="900px">
                    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                        <div style={{ width: "50%" }}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input type="name" id="name" name="name" onChange={handleInputsChange} required value={inputs.name} placeholder="name" />
                        </div>
                        <div style={{ width: "50%" }}>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input type="email" id="email" name="email" onChange={handleInputsChange} required value={inputs.email} placeholder="email" />
                        </div>

                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                        <div style={{ width: "50%" }}>
                            <FormLabel htmlFor="password" marginTop="30px">Password</FormLabel>
                            <Input type="password" id="password" name="password" placeholder="Password" onChange={handleInputsChange} required value={inputs.password} />
                        </div>
                        <div style={{ width: "50%" }}>
                            <FormLabel htmlFor="password_confirm" marginTop="30px">Password Confirm</FormLabel>
                            <Input type="password" id="password_confirm" name="password_confirm" placeholder="Password Confirm" onChange={handleInputsChange} required value={inputs.password_confirm} />
                        </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "30px", marginTop: "30px" }}>
                        <Select placeholder="Select option" onChange={handleRoleChange} value={selected}>
                            <option value="administrator">administrator</option>
                            <option value="viewer">viewer</option>
                            <option value="editor">editor</option>
                        </Select>
                    </div>

                    <label style={{ display: "block", marginTop: "30px", color: "orangered" }}>{response}</label>

                    <Button
                        mt={4}
                        marginTop="50px"
                        colorScheme="teal"
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Submit
                    </Button>

                    <Button
                        mt={4}
                        marginTop="50px"
                        colorScheme="red"
                        onClick={() => {
                            window.location.reload();
                        }}
                        marginLeft="15px"
                    >
                        Cancel
                    </Button>
                </FormControl>
            </form>
        </div >
    )
}

export default AddUser
