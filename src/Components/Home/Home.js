import React from "react";
import "../Home/animation.css";
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, Label
} from 'recharts';

const COLORS = ['#3650c4', '#ccc'];

const Java = [
  { name: 'Group A', value: 85 },
  { name: 'Group B', value: 15 }
];

const Python = [
  { name: 'Group A', value: 90 },
  { name: 'Group B', value: 10 }
];

const JS = [
  { name: 'Group A', value: 65 },
  { name: 'Group B', value: 35 }
];

const MySQL = [
  { name: 'Group A', value: 85 },
  { name: 'Group B', value: 15 }
];

const pageTransition = {
  in: {
    opacity: 1,
    y: "1%"
  },
  out: {
    opacity: 0,
    y: "-100%"
  }
}
const Home = (props) => {
  return (
    
    <motion.div initial="out" animate="in" exit="out" variants={ pageTransition } className="card col-sm-7 text-center container" id="mainContent">
      {/* <div className="ripple-background wave animation ">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
      </div> */}
    
      <div className= "card-body text-dark col ">
        <div className="row">
            <h1 className="card-title" id="card-title">Why Hire Me ?</h1>
            <p className="description"> Created various web application using <b>Spring Boot and React.Js</b> frameworks<br></br>
            Completed Masters in Computer Science, specializing in <b>Artificial Intelligence</b><br></br>
            Worked on various cloud platforms including <b>AWS and Azure</b><br></br>
            AWS Solutions Architect Associate Certified.<br></br>
            Experience working in <b>Android</b> Development using <b>Java</b> <br></br></p>
        </div>
        <div className="row center-graph">
          {/* Java */}
          <PieChart width={150} height={150}>
            <Pie
              data={Java}
              cx= "50%"
              cy= "55%"
              innerRadius={40}
              outerRadius={50}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {
            Java.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]}/>
            ))
          }
            <Label value="Java" position="center" />
            </Pie>
          </PieChart>
          {/* Python */}
          <PieChart width={150} height={150}>
            <Pie
              data={Python}
              cx= "50%"
              cy= "55%"
              innerRadius={40}
              outerRadius={50}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {
            Python.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]}/>
            ))
          }
            <Label value="Python" position="center" />
            </Pie>
          </PieChart>
          {/* JavaScript */}
          <PieChart width={150} height={150}>
            <Pie
              data={JS}
              cx= "50%"
              cy= "55%"
              innerRadius={40}
              outerRadius={50}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {
            JS.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]}/>
            ))
          }
            <Label value="JavaScript" position="center" />
            </Pie>
          </PieChart>

          {/* MySQL */}
          <PieChart width={150} height={150}>
            <Pie
              data={MySQL}
              cx= "50%"
              cy= "55%"
              innerRadius={40}
              outerRadius={50}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {
            MySQL.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]}/>
            ))
          }
            <Label value="MySQL" position="center" />
            </Pie>
          </PieChart>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
