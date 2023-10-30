import Singlenews from "../components/Singlenews";
import Intro from "../components/Intro";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      <motion.div
        className="row my-3 posts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Singlenews></Singlenews>
      </motion.div>
    </div>
  );
};

export default Home;
