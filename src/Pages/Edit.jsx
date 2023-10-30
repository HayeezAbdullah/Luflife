import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./edit.css";
const Edit = () => {
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
          <div className="about-img"></div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="my-1">
            I proudly bear the mantle of Captain, leading the intrepid and
            resilient Straw Hat Pirates, as we embark on our epic odyssey across
            the treacherous seas of the Grand Line. Our unyielding quest is
            singular, driven by the allure of a legendary and enigmatic treasure
            known only as the One Piece.
            <br /> <br />
            However, no Captain's journey is ever embarked upon alone. The Straw
            Hat Pirates are more than just my crew; they are an extraordinary
            and diverse assembly of individuals, each possessing their own
            unique talents, quirks, and dreams. Together, we form an unbreakable
            bond, a family bound not by blood, but by the shared desire for
            freedom and the promise of adventure.
            <br />
            <Link to="/posts">
              <button className="view-posts-btn p-2 my-3">
                Back to home🏴‍☠️
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Edit;
