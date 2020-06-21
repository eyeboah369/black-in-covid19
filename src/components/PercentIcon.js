import React from 'react'
import {CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

function PercentIcon(props){
    return (
        <AnimatedProgressProvider
        valueStart={0}
        valueEnd={props.percent}
        duration={3}
        easingFunction={easeQuadInOut}
        >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({
                pathColor: `${props.pathColor}`,
                pathTransition: "none",
                innerHeight: "3px",
                innerHeight: "3px"
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    )
}
export default PercentIcon

