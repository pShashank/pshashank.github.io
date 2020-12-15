import React from "react";
import temp from "./temp.jpg";
import { motion } from 'framer-motion';

const pageTransition = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: "-100%"
  }
}

const Projects = (props) => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={ pageTransition } className="card col-sm-7 text-center container" id="mainContent">
        <div className= "card-body text-dark col ">
        <h2> Under Construction </h2>
        <img src={temp} style={{width:"40%", height:"40%"}}></img>
        </div>
    </motion.div>
    );
};
export default Projects;
      