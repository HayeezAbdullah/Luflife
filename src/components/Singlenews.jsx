import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import supabase from "../config/Supabaseclient.js";

function Singlenews() {
  const [fetchError, setFetchError] = useState(null);
  const [mileStones, setMileStones] = useState([]);
  let theArray = [];

  useEffect(() => {
    async function fetchMileStones() {
      const { data, error } = await supabase.from("journey").select();
      if (error) {
        console.log(error);
      } else {
        setMileStones(data.sort((a, b) => a.id - b.id));
      }
    }

    fetchMileStones();
  }, []);

  return (
    <>
      {fetchError && <p>{fetchError}</p>}
      {mileStones &&
        mileStones.map((mileStone) => (
          <motion.div
            key={mileStone.id}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ scale: 0.01, rotate: 20, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="col-md-4 px-md-5 my-2 mx-auto thecard "
          >
            <motion.div
              className="card m-1 shadow border thecard "
              whileHover={{
                rotate: -5,
              }}
            >
              <div className="imagecontainer">
                <img src={mileStone.imgurl} className="image" alt="image" />
              </div>
              <div className="card-body bodyofthecard">
                <h5 className="card-title">{mileStone.title}</h5>
                <p className="card-text">{mileStone.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
    </>
  );
}

export default Singlenews;
