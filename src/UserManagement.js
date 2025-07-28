import React, {useState, useRef} from 'react';
import TableContent from './TableContent';
import './UserManagement.css';
import Search from './images/Search';
import Filter from './images/Filter';
import Arrowleft from './images/Arrowleft';
import Arrowright from './images/Arrowright';
import Emitter3 from './Emitter';
import MenuBar from './MenuBar';
import { useAuth } from './AuthContext';


export const MainContext1 = React.createContext(null);
export const MainContext3 = React.createContext(null);


const UserManagement = () => {
  const [dataget, setDataget] = useState([]);
  const [handlefilter, setHandlefilter] = useState({filterpage: "Filterpagehid"});
  const words = useRef([]);
  const yangdicari = useRef(["nama"]);  
  const lowLimit = useRef(0);
  const lowLimittampil = useRef(1);
  const highLimit = useRef(14);
  const { token } = useAuth();

const handleFilter = (event) => {
   let newHandlefilter = { filterpage: "Filterpageshow" };
   setHandlefilter(newHandlefilter);
}

const filterName = () => {
      if(yangdicari.current.length !== 0) {
          yangdicari.current.length = 0;
       yangdicari.current.push("nama");
           }
   let newHandlefilter = { filterpage: "Filterpagehid" };
   setHandlefilter(newHandlefilter);
}


const filterUnit = () => {
      if(yangdicari.current.length !== 0) {
          yangdicari.current.length = 0;
       yangdicari.current.push("unit");
           }
   let newHandlefilter = { filterpage: "Filterpagehid" };
   setHandlefilter(newHandlefilter);
}


const dicarinama = async(activeToken) => {

     let dicari = {"nama": words.current[0], "lowlimit": lowLimit.current.toString(), "highlimit": highLimit.current.toString()};


try {

    if (!activeToken) {
      // Redirect to the login page
      return;
    }

 await fetch(`${process.env.REACT_APP_API_BASE_URL}/caridatanama`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json', 'Authorization': activeToken? activeToken : '' },
               body: JSON.stringify(dicari)
}).then((response) => response.json()
   ).then(function(data){
     if(data.answer){
        setDataget([...data.answer]);
}
    else {
       let emptyarr = [];
        setDataget(emptyarr);
         }

});
} catch (error) {
    console.error(error);
  }

}


const dicariunit = async(activeToken) => {

     
     let dicari = {"tower": words.current[0].charAt(0), "unit": words.current[0].substring(1),  "lowlimit": lowLimit.current.toString(), 
"highlimit": highLimit.current.toString() };


try {

    if (!activeToken) {
      // Redirect to the login page
      return;
    }

 await fetch(`${process.env.REACT_APP_API_BASE_URL}/caridataunit`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json', 'Authorization': activeToken ? activeToken : '' },
               body: JSON.stringify(dicari)
}).then((response) => response.json()
   ).then(function(data){
     if(data.answer){
        setDataget(data.answer);
}
    else {
       let emptyarr = [];
        setDataget(emptyarr);
         }

});
} catch (error) {
    console.error(error);
  }

}

const callyangdicari = async(tokenArg) => {
      const activeToken = tokenArg ?? token;

         if(yangdicari.current[0] === "nama"){
         dicarinama(activeToken);
   }
        else if(yangdicari.current[0] === "unit"){
          dicariunit(activeToken);
}
}

const countDown = () => {
    if(lowLimit.current > 0 && highLimit.current > 14){
        lowLimit.current = lowLimit.current - 14;
        lowLimittampil.current = lowLimit.current + 1;
        highLimit.current = highLimit.current - 14;
         callyangdicari();
   }   

}


const countUp = () => {
        lowLimit.current = lowLimit.current + 14;
        lowLimittampil.current = lowLimit.current + 1;
        highLimit.current = highLimit.current + 14;
        callyangdicari();
}

const handleKeydown = async (event) => {

     if(event.key === 'Enter' || event.keyCode === 13){
         
      if(words.current.length !== 0){
          words.current.length = 0;
        words.current.push(event.target.value);
          }
         else {
        words.current.push(event.target.value);
           }       

        callyangdicari(); 
}

}   
const a: AppContext1 = {callyangdicari};
const c: AppContext3 = {callyangdicari};


const numberRefresher = Emitter3.listenerCount('refreshsearch', callyangdicari);
if(numberRefresher < 1){
    Emitter3.on('refreshsearch', callyangdicari);
}



return(
<div>
<div className="topouterright">
<div className="innerfiltertable">
<div className="filterinput">
<div className="filtertextdiv">
<Search className="searchbutton" />
<input type="text" placeholder="Type keyword" className="filterinputtext" onKeyDown={handleKeydown}/>
</div>
<div className="filterbuttondiv">
<button onClick={handleFilter} className="filterinputbutton">
<div className="filterdiv">
<Filter/>
<span className="filterspan"> Filters</span>
</div>
</button>
</div>
</div> {/* closing for filterinput */}
<div className={handlefilter.filterpage} >
<MenuBar filterName={filterName} filterUnit={filterUnit}/>
</div>

</div> {/* closing for innerfiltertable */}
<MainContext1.Provider value={a}>
<MainContext3.Provider value={c}>
<TableContent dataget={dataget} limitbawah={lowLimittampil.current}/>
</MainContext3.Provider>
</MainContext1.Provider>
</div> {/* closing for topouterright */}
<div className="counterpagediv">
<div className="countertextdiv">
<span className="countertextspan">{lowLimittampil.current} - {highLimit.current}</span>
</div>
<div className="textselectpagediv">
<div className="arrowleftdiv" onClick={countDown} >
<Arrowleft />
</div>
<div className="arrowrightdiv" onClick={countUp} >
<Arrowright />
</div>
</div> {/* closing for textselectpagediv */}
</div> {/* closing for counterpagediv */}
</div>
)
}

export default UserManagement;
