import { motion } from "framer-motion";

const AnimationVariants = {
  offscreen: {
    y: 200,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1.2,
    },
  },
};

const AnimatedBox = ({ children }) => {
    return (
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={AnimationVariants}>
          {children}
        </motion.div>
      </motion.div>
    );
  };
  
  export default AnimatedBox;