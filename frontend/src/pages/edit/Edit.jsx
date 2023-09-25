import { Button, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";

import { v4 as uuid } from 'uuid';

const EditUser = () => {
    const { state } = useLocation();
    const { email } = state;

    const navigate = useNavigate(null);

    // fetch user by email
    const [user, setUser] = useState({ name: "", role: "" });
    useEffect(() => {
        axios.post(`http://localhost:1198/api/v1/user`, { email }).then(response => {
            console.log(response.data);
            setUser({ name: response.data.name, role: response.data.role });
            setInputs({ name: response.data.name, role: response.data.role, email: response.data.email });
            setSelected(response.data.role);
        }).catch(error => {
            console.log(error);
        })
    }, [email]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        role: ""
    });
    useEffect(() => {
        console.log(inputs);
    }, [inputs]);

    const handleInputsChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    };
    const handleUpdateUserSubmit = (event) => {
        event.preventDefault();

        console.log(inputs);
        if (inputs.role === "") {
            alert("role not selected");
            return;
        }

        setIsSubmitting(true);
        axios.patch(`http://localhost:1198/api/v1/user-update`, inputs).then(response => {
            // console.log(response);
            if (response.data.success) {
                navigate("/home");
            }
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    const [selected, setSelected] = useState();
    const handleRoleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        setInputs({ ...inputs, role: event.target.value });
    };

    // add image
    const [userImageSRC, setUserImageSRC] = useState(`http://localhost:1198/${email}.png` || "");
    const [imageResponse, setImageResponse] = useState("");
    const fileInputRef = useRef(null);
    const uploadFile = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            const uniqueId = uuid();
            const smallId = uniqueId.slice(0, 6);
            formData.append("id", user);
            formData.append("email", email);
            formData.append("file", fileInputRef.current.files[0]);
            // console.log(fileInputRef.current.files[0]);
            // return;
            if (!fileInputRef.current.files[0]) {
                setImageResponse("profile image not selected");
                return;
            }
            setImageResponse("");
            const res = await axios.post("http://localhost:1198/api/v1/user-upload-image", formData);
            console.log(res);
            setImageResponse(res.data.message);
            // window.location.reload();
            setUserImageSRC(`http://localhost:1198/${email}.png`);
        } catch (error) {
            console.log(error, "error");
            setImageResponse(error.message);
        }
    };

    return (
        <div>
            <Header />
            <Text fontSize="20px" color="tomato" marginLeft="15px">
                Update User
            </Text>
            <form onSubmit={handleUpdateUserSubmit} >
                <FormControl margin="15px" width="300px">
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input type="name" id="name" name="name" onChange={handleInputsChange} required value={inputs.name} placeholder="name" />

                    <Select placeholder="Select option" onChange={handleRoleChange} value={selected} marginTop="30px">
                        <option value="administrator" >administrator</option>
                        <option value="viewer" >viewer</option>
                        <option value="editor">editor</option>
                    </Select>

                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Submit
                    </Button>
                    <Button
                        mt={4}
                        colorScheme="red"
                        onClick={() => {
                            navigate("/home");
                        }}
                        marginLeft="15px"
                    >
                        Cancel
                    </Button>
                </FormControl>
            </form>

            {/* user add image */}
            <div style={{ marginTop: "50px", padding: "15px" }}>
                <Text style={{ fontWeight: "bolder" }}>Add Profile Image [.png file, &lt; 5mb]</Text>
                <img src={`${userImageSRC}?${new Date().getTime()}`} alt="profile image" style={{ border: "3px solid #000", borderRadius: "5px", width: "200px", height: "100px", marginTop: "30px" }} key={Date.now()} />
                <input type="file" ref={fileInputRef} style={{ marginTop: "15px" }} />
                <Button onClick={uploadFile} style={{ display: "block", marginTop: "15px" }} colorScheme="blue" >Add - Update Photos</Button>
                <div>{imageResponse}</div>
            </div>
        </div>
    )
}

export default EditUser

