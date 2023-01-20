import { AnimatePresence, motion } from "framer-motion";

import logo from "../assets/boblogo.png";

export default function LoadingScreen({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatePresence>
        <motion.div
          animate={{
            rotate: 360,
            duration: isLoading && Infinity,
          }}
          transition={{ duration: isLoading ? 1 : 0 }}
        >
          <img
            style={{ opacity: "40%" }}
            className="loading-logo"
            src={logo}
            alt="Företages Logga, BOB"
          />
        </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
