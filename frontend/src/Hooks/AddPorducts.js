import axios from "axios";
import { useState } from "react";

export const AddProducts = () => {
  const [loading, setLoading] = useState(false);

  const Add = async (formData) => {
    try {
        setLoading(true)
      const res = await axios.post(
        "http://localhost:8080/product/add",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (!res.status){
        return  new Exception("their is error")
      }
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false)
    }
  };

  return {loading,Add}
};
