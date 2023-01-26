import { Box, Button, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import NorthIcon from "@mui/icons-material/North";

const FixedButtons = () => {
  const theme = useTheme();
  const [buttonVissible, setButtonVissible] = useState(false);
  const scrollTop = 0;

  const topButton = {
    backgroundColor: theme.palette.primary[500],
    minWidth: "unset",
    padding: "0 0.2rem",
    height: "3rem",
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };

  const buttonNinety = {
    transform: "rotate(-90deg)",
    backgroundColor: theme.palette.primary[500],
    minWidth: "unset",
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };

  const topButtonIcon = {
    fontSize: "1.8rem",
    fontWeight: "bold",
  };

  function handleScroll() {
    if (window.scrollY >= 800) {
      setButtonVissible(true);
    } else if (window.scrollY <= 800) {
      setButtonVissible(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = () => {
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  const fixed = {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    zIndex: "100000",
    width: "40px",
  };

  return (
    <>
      <AnimatePresence>
        {buttonVissible && (
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: "0.1", duration: "0.8" }}
            exit={{ x: "100vw", transition: "ease-out 0.8" }}
            style={fixed}
          >
            <Box sx={sideButtons}>
              <Button
                aria-label="Scroll to top"
                type="contained"
                onClick={handleClick}
                sx={topButton}
              >
                <NorthIcon sx={topButtonIcon} />
              </Button>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FixedButtons;

const sideButtons = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  justifyContent: "space-between",
};
