import React from 'react';
import './Tabline.css';

const Tabline = (props) => {


return(
<div className="tabline">
<svg xmlns="http://www.w3.org/2000/svg" viewBox={props.locx} width="10vw" height="6vh" 
fill={props.activetab} >
  <path d="M116.486,29.036c-23.582-8-14.821-29-42.018-29h-62.4C5.441,0.036,0,5.376,0,12.003v28.033h122v-11H116.486
			z"  />
  <text x="95%" y="50%" fill={props.activecolor} textAnchor="middle">{props.text}</text>
</svg>
</div>
)
}

export default Tabline;
