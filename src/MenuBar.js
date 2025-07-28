import React from 'react';
import './MenuBar.css';

const MenuBar = (props) => {

const filterName = (event) => {
  event.stopPropagation();
  event.preventDefault();

   props.filterName();
}


const filterUnit = (event) => {
  event.stopPropagation();
  event.preventDefault();

  props.filterUnit();
}

return(
<div className="menubardiv">
<div>
<button onClick={filterName} className="Buttonfiltername" >Nama
</button>
</div>
<div>
<button onClick={filterUnit} className="Buttonfilterunit" >TowerUnit
</button>
</div>



</div>

);

}

export default MenuBar;
