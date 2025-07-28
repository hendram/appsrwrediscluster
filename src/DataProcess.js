import React, {useState} from 'react';
import Tabline from './images/Tabline.js';
import UserManagement from './UserManagement';
import InputData from './InputData';
import UpdateData from './UpdateData';
import './DataProcess.css';

export const MainContext2 = React.createContext(null);
export const MainContext4 = React.createContext(null);

const DataProcess = () => {

const [viewcomp, setViewcomp] = useState({search: "Searchshow", inputdata: "Inputdatahid", 
   updatedata: "Updatedatahid" }); 
const [menu, setMenu] = useState({caridata: "Caridata3", isidata: "Isidata2",
  updatedata: "Updatedata1" });
const [activetab, setActivetab] = useState({caridata: "#ebebfa" , isidata: "#00004d", updatedata: "#00004d"});
const [activecolor, setActivecolor] = useState({caridatatxtcolor: "black", isidatatxtcolor: "white",
updatedatatxtcolor: "white" });

const handleSearchclick = (event) => {
  event.stopPropagation();
    event.preventDefault();

    let newviewcomp = {search: "Searchshow", inputdata: "Inputdatahid", 
   updatedata: "Updatedatahid" };
   let newmenu = {caridata: "Caridata3", isidata: "Isidata2",
  updatedata: "Updatedata1" }
    let newactivetab = {caridata: "#ebebfa" , isidata: "#00004d", updatedata: "#00004d"};
    let newactivecolor = {caridatatxtcolor: "black", isidatatxtcolor: "white",
updatedatatxtcolor: "white"};
     setViewcomp(newviewcomp);
     setMenu(newmenu);
     setActivetab(newactivetab);
     setActivecolor(newactivecolor);
}


const handleInputclick = (event) => {
  event.stopPropagation();
    event.preventDefault();

    let newviewcomp = {search: "Searchhid", inputdata: "Inputdatashow", 
   updatedata: "Updatedatahid" };
   let newmenu = {caridata: "Caridata2", isidata: "Isidata3",
  updatedata: "Updatedata1" }
    let newactivetab = {caridata: "#00004d" , isidata: "#ebebfa", updatedata: "#00004d"};
    let newactivecolor = {caridatatxtcolor: "white", isidatatxtcolor: "black",
updatedatatxtcolor: "white"};
     setViewcomp(newviewcomp);
     setMenu(newmenu);
     setActivetab(newactivetab);
     setActivecolor(newactivecolor);
}


const handleUpdateclick = (event) => {
  event.stopPropagation();
    event.preventDefault();

    let newviewcomp = {search: "Searchhid", inputdata: "Inputdatahid", 
   updatedata: "Updatedatashow" };
   let newmenu = {caridata: "Caridata1", isidata: "Isidata2",
  updatedata: "Updatedata3" }
    let newactivetab = {caridata: "$00004d" , isidata: "$00004d", updatedata: "#ebebfa"};
    let newactivecolor = {caridatatxtcolor: "white", isidatatxtcolor: "white",
updatedatatxtcolor: "black"};

     setViewcomp(newviewcomp);
     setMenu(newmenu);
     setActivetab(newactivetab);
     setActivecolor(newactivecolor);
}

const toUpdatedata = () => {

    let newviewcomp = {search: "Searchhid", inputdata: "Inputdatahid", 
   updatedata: "Updatedatashow" };
   let newmenu = {caridata: "Caridata1", isidata: "Isidata2",
  updatedata: "Updatedata3" }
    let newactivetab = {caridata: "$00004d" , isidata: "$00004d", updatedata: "#ebebfa"};
    let newactivecolor = {caridatatxtcolor: "white", isidatatxtcolor: "white",
updatedatatxtcolor: "black"};

     setViewcomp(newviewcomp);
     setMenu(newmenu);
     setActivetab(newactivetab);
     setActivecolor(newactivecolor);
}


const b: AppContext2 = {toUpdatedata};
const d: AppContext4 = {toUpdatedata};

return(
<div className="Dataprocessdiv">
<div className="Topframe">
<div className={menu.caridata} onClick={(e) => handleSearchclick(e)} >
<Tabline text={"Caridata"} locx={"35 0 50 35"} activetab={activetab.caridata}
activecolor={activecolor.caridatatxtcolor} />
</div>
<div  className={menu.isidata} onClick={(e) => handleInputclick(e)} >
<Tabline text={"Isidata"}  locx={"35 0 50 35"}  activetab={activetab.isidata} 
activecolor={activecolor.isidatatxtcolor}/>
</div>
<div  className={menu.updatedata} onClick={(e) => handleUpdateclick(e)} >
<Tabline text={"Updatedata"}  locx={"35 0 50 35"}  activetab={activetab.updatedata} 
activecolor={activecolor.updatedatatxtcolor} />
</div>
</div> {/* closing for Topframe */}
<div className="Bottomframe">
<div className={viewcomp.search} >
<MainContext2.Provider value={b} >
<MainContext4.Provider value={d} >
<UserManagement />
</MainContext4.Provider>
</MainContext2.Provider>
</div>
<div className={viewcomp.inputdata} >
<InputData  />
</div>
<div className={viewcomp.updatedata} >
<UpdateData />
</div>
</div> {/* closing of Bottomframe */ }
</div>
);
}

export default DataProcess;
