import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const AnimatedLazyImage = ({ src, alt, className, style, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ height: "100%" }}
    >
      <LazyLoadImage
        src={src}
        alt={alt}
        className={className}
        style={style}
        {...props}
      />
    </motion.div>
  );
};

export default AnimatedLazyImage;
