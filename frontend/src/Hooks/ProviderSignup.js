import React, { useState } from "react";
import axios from "axios";

export const HandleSignup = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const SignUp = async (number,email, name) => {
    try {
      setLoading(true);

      const res = await axios.post("http://localhost:8080/provider/signup", {
        number:number,
        email: email,
        name: name
      });

      if (res.status === 200 || res.status === 201) {
        const data = res.data;
        console.log("Signup Success:", data);
        setUser(data);
        if(localStorage.getItem("user")){
            localStorage.clear("user")
        }
        localStorage.setItem("user", JSON.stringify(data));
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.warn("Conflict: User already exists.");
      } else {
        console.error("Signup Error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, SignUp, user };
};
