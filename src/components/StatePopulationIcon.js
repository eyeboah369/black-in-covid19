import React from 'react'
import {CircularProgressbar,buildStyles,CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function StatePopulationIcon(props){
    return (
        <CircularProgressbarWithChildren
        value={65}
        styles={buildStyles({
          pathColor: "white",
          trailColor: "transparent",
          strokeLinecap: "butt"
        })}
      >
          <CircularProgressbarWithChildren
        value={100}
        styles={buildStyles({
          pathColor: "yellow",
          trailColor: "transparent",
          strokeLinecap: "butt"
        })}
      >
            <CircularProgressbarWithChildren
        value={90}
        styles={buildStyles({
          pathColor: "red",
          trailColor: "transparent",
          strokeLinecap: "butt"
        })}
      >
        <CircularProgressbarWithChildren
        value={85}
        styles={buildStyles({
          pathColor: "purple",
          trailColor: "transparent",
          strokeLinecap: "butt"
        })}
      >
          
      <CircularProgressbarWithChildren
        value={80}
        styles={buildStyles({
          pathColor: "orange",
          trailColor: "transparent",
          strokeLinecap: "butt"
        })}
      >
          
        <CircularProgressbarWithChildren
        value={65}
        styles={buildStyles({
          pathColor: "green",
          trailColor: "transparent",
          strokeLinecap: "butt"
        })}
      >
        {/* Foreground path */}
        <CircularProgressbar
          value={50}
          text={"Demographics"}
          styles={buildStyles({
            trailColor: "transparent",
            strokeLinecap: "butt",
            textSize: "10px",
            textColor: "black"
          })}
        />
        
        </CircularProgressbarWithChildren>
        </CircularProgressbarWithChildren>
        </CircularProgressbarWithChildren>
        </CircularProgressbarWithChildren>
        </CircularProgressbarWithChildren>
        </CircularProgressbarWithChildren>
      
    )
}
export default StatePopulationIcon

