import React, {useRef, useEffect, useState} from 'react';
import Emitter from './Emitter';
import Emitter2 from './Emitter';
import Emitter3 from './Emitter';
import './UpdateData.css';
import { useAuth } from './AuthContext';


const UpdateData = () => {


const temp = useRef();
const nama = useRef(null);
const tempatlahir = useRef(null);
const tgllahir = useRef(null);
const noktp = useRef(null);
const nohp = useRef(null);
const tower = useRef(null);
const unit = useRef(null);
const status = useRef(null);
const periodsewa = useRef(null);
const agen = useRef(null);
const emergencyhp = useRef(null);
const pemilikunit = useRef(null);
const date = useRef(null);
const month = useRef(null);
  const [trigger, setTrigger] = useState(0);
  const { token } = useAuth();


const fillinupdate = (actionvalue) => {
         temp.current = actionvalue;
           setTrigger((prev) => prev + 1);
}


useEffect(() => {
 if(temp.current !== undefined){

  nama.current.value = temp.current.nama;
  tempatlahir.current.value = temp.current.tempatlahir;
  date.current.value = temp.current.tgllahir.split(" - ")[0];
  month.current.value = temp.current.tgllahir.split(" - ")[1];
  tgllahir.current.value = temp.current.tgllahir.split(" - ")[2];
  noktp.current.value = temp.current.noktp;
  nohp.current.value = temp.current.nohp;
  tower.current.value = temp.current.tower;
  unit.current.value = temp.current.unit;
  status.current.value = temp.current.status;
  periodsewa.current.value = temp.current.periodsewa;
  agen.current.value = temp.current.agen;
  emergencyhp.current.value = temp.current.emergencyhp;
  pemilikunit.current.value = temp.current.pemilikunit;
}
}, [trigger]);

const numberListenereven = Emitter.listenerCount('actioneven', fillinupdate);
if(numberListenereven < 1){
    Emitter.on('actioneven', fillinupdate);
}

const numberListenerodd = Emitter2.listenerCount('actionodd', fillinupdate);
if(numberListenerodd < 1){
    Emitter2.on('actionodd', fillinupdate);
}

const handleUpdate = async (event) => {
   event.stopPropagation();
    event.preventDefault();

  let namanya;
   let tempatlahirnya;
   let tgllahirnya;
   let noktpnya;
   let nohpnya;
   let towernya;
   let unitnya;
   let statusnya;
   let periodsewanya;
   let agennya;
   let emergencyhpnya;
   let pemilikunitnya;


        if(nama.current.value){
      namanya = nama.current.value.trim();
  }
    else {
      namanya = "nil";
    }

      if(tempatlahir.current.value){
         tempatlahirnya = tempatlahir.current.value.trim();
      }
     else {
       tempatlahirnya = "nil";
    }
 if(date.current.value && month.current.value && tgllahir.current.value){
      
tgllahirnya = date.current.value + " - " + month.current.value + " - " + tgllahir.current.value.trim();
          }
    else {
     tgllahirnya = date.current.value + " - " + month.current.value + " - nil";
   }

   if(noktp.current.value) {
  noktpnya = noktp.current.value.trim();
   }
   else {
    noktpnya = "nil";
   }

   if(nohp.current.value){
    nohpnya = nohp.current.value.trim();
    }
   else {
     nohpnya = "nil";
   }

     if(tower.current.value){
    towernya = tower.current.value;
    }
    else {
      towernya = tower.current.value;
      }

     if(unit.current.value){
    unitnya = unit.current.value.trim();
   }
   else {
  unitnya = "nil";
    }

    if(status.current.value){
 statusnya = status.current.value.trim();
    }
   else {
     statusnya = "nil";
   }

    if(periodsewa.current.value){
    periodsewanya = periodsewa.current.value.trim();
    }
   else {
     periodsewanya = "nil";
    }

   if(agen.current.value) {
   agennya = agen.current.value.trim();
   }
    else {
     agennya = "nil";
    }

    if(emergencyhp.current.value) {
     emergencyhpnya = emergencyhp.current.value.trim();
   }
   else {
    emergencyhpnya = "nil";
  }
   
  if(pemilikunit.current.value){
    pemilikunitnya = pemilikunit.current.value.trim();
    }
   else {
     pemilikunitnya = "nil";
}


   let datainput = { "oldnama": temp.current.nama, "oldtempatlahir": temp.current.tempatlahir, "oldtgllahir": temp.current.tgllahir,
"oldnoktp": temp.current.noktp, "oldnohp": temp.current.nohp, "oldtower": temp.current.tower, 
"oldunit": temp.current.unit, "oldstatus": temp.current.status,
"oldperiodsewa": temp.current.periodsewa, "oldagen": temp.current.agen, "oldemergencyhp": temp.current.emergencyhp,
"oldpemilikunit": temp.current.pemilikunit, 
"nama": namanya, "tempatlahir": tempatlahirnya, "tgllahir": tgllahirnya, "noktp": noktpnya,
"nohp": nohpnya, "tower": towernya, "unit": unitnya, "status": statusnya, "periodsewa": periodsewanya,
"agen": agennya, "emergencyhp": emergencyhpnya, "pemilikunit": pemilikunitnya }


try {

    if (!token) {
      // Redirect to the login page
      return;
    }

  await fetch(`${process.env.REACT_APP_API_BASE_URL}/updatedata`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json', 'Authorization': token ? token : '' },
               body: JSON.stringify(datainput)
}).then((response) => response.json()
   ).then(function(data){
    if(data.answer === "ok"){

    nama.current.value = "";
   tempatlahir.current.value = "";
 date.current.value = "1";
   month.current.value = "1";
   tgllahir.current.value = "";
   noktp.current.value = "";
   nohp.current.value = "";
   tower.current.value = "A";
   unit.current.value = "";
   status.current.value = "";
   periodsewa.current.value = "";
   agen.current.value = "";
   emergencyhp.current.value = "";
   pemilikunit.current.value = "";

    Emitter3.emit('refreshsearch', token);         
}
});
} catch (error) {
    console.error(error);
  }



}


const handleReset = (event) => {
   event.stopPropagation();
    event.preventDefault();

    nama.current.value = "";
 date.current.value = "1";
   month.current.value = "1";
   tempatlahir.current.value = "";
   tgllahir.current.value = "";
   noktp.current.value = "";
   nohp.current.value = "";
   tower.current.value = "A";
   unit.current.value = "";
   status.current.value = "";
   periodsewa.current.value = "";
   agen.current.value = "";
   emergencyhp.current.value = "";
   pemilikunit.current.value = "";

}



return(
<div className="Updatediv">
<div className="Namadiv">
  <label htmlFor="Namau">Nama:</label>
  <div className="Namainputdiv">
    <input type="text" id="Namau" ref={nama} className="Namainputu" />
  </div>
</div>
<div className="Tempattanggallahirdiv">
<div className="Tempatlahirdiv">
  <label htmlFor="Tempatlahiru">Tempat lahir:</label>
  <div className="Tempatlahirinputdiv">
    <input type="text"  id="Tempatlahiru" ref={tempatlahir}  className="Tempatlahirinputu"/>
  </div>
</div>
<div className="Tanggallahirdiv">
  <span>Tanggal lahir:</span>
   <label htmlFor="Tanggalu"> Tanggal: </label>
<select id="Tanggalu" ref={date} >
<option selected>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
<option>13</option>
<option>14</option>
<option>15</option>
<option>16</option>
<option>17</option>
<option>18</option>
<option>19</option>
<option>20</option>
<option>21</option>
<option>22</option>
<option>23</option>
<option>24</option>
<option>25</option>
<option>26</option>
<option>27</option>
<option>28</option>
<option>29</option>
<option>30</option>
<option>31</option>
<option>31</option>
</select>
   <label htmlFor="Bulanu"> Bulan: </label>
<select id="Bulanu" ref={month}>
	<option selected>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
<option>10</option>
<option>11</option>
<option>12</option>
</select>
   <label htmlFor="Tahunu"> Tahun: </label>

  <div className="Tanggallahirinputdiv" >
    <input id="Tahunu" type="text" ref={tgllahir} className="Tanggallahirinputu"/>
  </div>
</div>
</div> {/* closing of tempattanggallahirdiv */ }
<div className="Noktpnohpdiv">
<div className="Noktpdiv">
  <label htmlFor="Noktpu">No ktp:</label>
  <div className="Noktpinputdiv">
    <input type="text" id="Noktpu" ref={noktp} className="Noktpinput" />
  </div>
</div> 
<div className="Nohpdiv">
  <label htmlFor="Nohpu">No hp:</label>
  <div className="Nohpinputdiv">
    <input type="text" id="Nohpu" ref={nohp} className="Nohpinput" />
  </div>
</div> 
</div> {/* closing of noktpnohpdiv */ }
<div className="Towerunitdiv" >
<div className="Towerdiv">
  <label htmlFor="Toweru">Tower:</label>
 <select id="Toweru" ref={tower}>
        <option selected>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>G</option>
<option>H</option>
<option>J</option>
<option>K</option>
<option>L</option>
<option>M</option>
</select>

</div>
<div className="Unitdiv">
  <label htmlFor="Unitu">Unit:</label>
  <div className="Unitinputdiv">
    <input id="Unitu" type="text" ref={unit} className="Unitinputu" />
  </div>
</div>
</div> {/* closing of Towerunitdiv */}
<div className="Statusperiodsewadiv">
<div className="Statusdiv">
  <label htmlFor="Statusu">Status:</label>
  <div className="Statusinputdiv">
    <input id="Statusu" type="text"  ref={status} className="Statusinputu"/>
  </div>
</div>
<div className="Periodsewadiv">
  <label htmlFor="Periodsewau">Period Sewa:</label>
  <div className="Periodsewainputdiv">
    <input type="text" id="Periodsewau" ref={periodsewa} className="Periodsewainputu"/>
  </div>
</div>
</div> {/* closing of statusperiodsewadiv */}
   <div className="Agendiv">
   <label htmlFor="Agenu">Agen:</label>
  <div className="Ageninputdiv">
   <input id="Agenu" type="text" ref={agen} className="Ageninputu"/>
</div>    
</div>
<div className="Emergencyhpdiv">
 <label htmlFor="Emergencyhpu"> Emergency hp:</label>
<div className="Emergencyhpinputdiv">   
<input id="Emergencyhpu" type="text" ref={emergencyhp} className="Emergencyhpinputu" />
</div>   
 </div>
  <div className="Pemilikunitdiv">
 <label htmlFor="Pemilikunitu">Pemilik Unit:</label>
<div className="Pemilikunitinputdiv">  
 <input id="Pemilikunitu" type="text" ref={pemilikunit}  className="Pemilikunitinputu"/>
</div>   
 </div>
<div className="Submitresetdiv">
<button id="Update" className="Updatebutton" onClick={(e) => handleUpdate(e)} >
<label htmlFor="Update">Update</label>
</button>
<button id="Resetu" className="Resetbuttonu" onClick={(e) => handleReset(e)} >
<label htmlFor="Resetu">Reset</label>
</button>
</div>
</div>
);
}

export default UpdateData;
