import { useState } from "react";
import supabase from "../config/Supabaseclient";
import { motion } from "framer-motion";

import "./edit.css";
const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="editform">
        <label>Title:</label>
        <input
          className="editinput"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />

        <label htmlFor="description">Description:</label>
        <input
          className="editinput"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />

        <label htmlFor="imglink">Image Link:</label>
        <input
          className="editinput"
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
        />
        <br />

        <button
          className="inputbtn"
          onClick={async () => {
            const { data, error } = await supabase
              .from("journey")
              .insert([
                {
                  title: title,
                  description: description,
                  imgurl: imageUrl,
                },
              ])
              .select();
            if (error) {
              console.error("Error inserting data:", error);
              setMessage("Oops, there is an error...");
            } else {
              console.log("Data inserted successfully:", data);
              setMessage("Data inserted successfully");
            }
          }}
        >
          Post
        </button>
        {message && <p>{message}</p>}
      </div>
    </motion.div>
  );
};

export default Create;
