import React, {useRef} from 'react';
import './InputData.css';
import { useAuth } from './AuthContext.js';

const InputData = () => {



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
const { token } = useAuth();

const handleSubmit = async (event) => {
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


   let datainput = { "nama": namanya, "tempatlahir": tempatlahirnya, "tgllahir": tgllahirnya, 
"noktp": noktpnya, "nohp": nohpnya, "tower": towernya, "unit": unitnya, "status": statusnya, 
"periodsewa": periodsewanya,
"agen": agennya, "emergencyhp": emergencyhpnya, "pemilikunit": pemilikunitnya }


try {
     

    if (!token) {
      // Redirect to the login page
      return;
    }
  await fetch(`${process.env.REACT_APP_API_BASE_URL}/isidata`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json', 'Authorization': token? token : '' },
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


}

return(
  <div className="Inputdiv">
<div className="Namadiv">
  <label htmlFor="Nama">Nama:</label>
  <div className="Namainputdiv">
    <input type="text" id="Nama" ref={nama} className="Namainput" />
  </div>
</div>
<div className="Tempattanggallahirdiv">
<div className="Tempatlahirdiv">
  <label htmlFor="Tempatlahir">Tempat lahir:</label>
  <div className="Tempatlahirinputdiv">
    <input type="text"  id="Tempatlahir" ref={tempatlahir}  className="Tempatlahirinput"/>
  </div>
</div>
<div className="Tanggallahirdiv">
  <span>Tanggal lahir:</span>
   <label htmlFor="Tanggal"> Tanggal: </label>
<select id="Tanggal" ref={date} className="Tanggalselect" >
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
</select>
   <label htmlFor="Bulan"> Bulan: </label>
<select id="Bulan" ref={month} className="Bulanselect">
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
   <label htmlFor="Tahun"> Tahun: </label>

  <div className="Tanggallahirinputdiv" >
    <input id="Tahun" type="text" ref={tgllahir} className="Tanggallahirinput"/>
  </div>
</div>
</div> {/* closing of tempattanggallahirdiv */ }
<div className="Noktpnohpdiv">
<div className="Noktpdiv">
  <label htmlFor="Noktp">No ktp:</label>
  <div className="Noktpinputdiv">
    <input type="text" id="Noktp" ref={noktp} className="Noktpinput" />
  </div>
</div> 
<div className="Nohpdiv">
  <label htmlFor="Nohp">No hp:</label>
  <div className="Nohpinputdiv">
    <input type="text" id="Nohp" ref={nohp} className="Nohpinput" />
  </div>
</div> 
</div> {/* closing of noktpnohpdiv */ }
<div className="Towerunitdiv">
<div className="Towerdiv">
  <label htmlFor="Tower">Tower:</label>
 <select id="Tower" ref={tower} className="Towerselect">
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
  <label htmlFor="Unit">Unit:</label>
  <div className="Unitinputdiv">
    <input id="Unit" type="text" ref={unit} className="Unitinput" />
  </div>
</div>
</div> {/* closing for towerunitdiv */}
<div className="Statusperiodsewadiv">
<div className="Statusdiv">
  <label htmlFor="Status">Status:</label>
  <div className="Statusinputdiv">
    <input id="Status" type="text"  ref={status} className="Statusinput"/>
  </div>
</div>
<div className="Periodsewadiv">
  <label htmlFor="Periodsewa">Period Sewa:</label>
  <div className="Periodsewainputdiv">
    <input type="text" id="Periodsewa" ref={periodsewa} className="Periodsewainput"/>
  </div>
</div>
</div> {/* closing of statusperiodsewadiv */}
   <div className="Agendiv">
   <label htmlFor="Agen">Agen:</label>
  <div className="Ageninputdiv">
   <input id="Agen" type="text" ref={agen} className="Ageninput"/>
</div>    
</div>
<div className="Emergencyhpdiv">
 <label htmlFor="Emergencyhp"> Emergency hp:</label>
<div className="Emergencyhpinputdiv">   
<input id="Emergencyhp" type="text" ref={emergencyhp} className="Emergencyhpinput" />
</div>   
 </div>
  <div className="Pemilikunitdiv">
 <label htmlFor="Pemilikunit">Pemilik Unit:</label>
<div className="Pemilikunitinputdiv">  
 <input id="Pemilikunit" type="text" ref={pemilikunit}  className="Pemilikunitinput"/>
</div>   
 </div>
<div className="Submitresetdiv">
<button id="Submit" className="Submitbutton" onClick={(e) => handleSubmit(e)} >
<label htmlFor="Submit">Submit</label>
</button>
<button id="Reset" className="Resetbutton" onClick={(e) => handleReset(e)} >
<label htmlFor="Reset">Reset</label>
</button>
</div>
</div>
);
}

export default InputData;
