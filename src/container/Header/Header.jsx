import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__header-info"
      >
        <div className="app_header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> Olá, eu sou o </p>
              <h1 className="head-text">Artur</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text"> Desenvolvedor Fullstack </p>
            <p className="p-text"> 🚀 </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay-circle"
          src={images.circle}
          alt="profile_cicle"
        />
      </motion.div>

      <motion.div> </motion.div>
    </div>
  );
};

export default Header;
