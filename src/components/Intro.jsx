import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <motion.div
      className=" my-4 the-intro-con"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="row p-3">
        <div className="col-md-6">
          <div className="intro-img"></div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="my-1">
            I'm the captain of the Straw Hat Pirates, sailing the treacherous
            waters of the Grand Line in search of the ultimate treasure, the One
            Piece. But don't let my goofy grin and carefree attitude fool you.
            I'm a force to be reckoned with, thanks to my powerful Haki and a
            fearless crew that's always got my back. <br />
            <Link to="/posts">
              <button className="view-posts-btn p-2 my-3">View posts</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
