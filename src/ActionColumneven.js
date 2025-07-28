import React, {useContext} from 'react';
import './ActionColumneven.css';
import {MainContext3} from './UserManagement';
import {MainContext4} from './DataProcess';
import Emitter from './Emitter';
import { useAuth } from './AuthContext';


const ActionColumneven = (props) => {

const c = useContext(MainContext3);
const d = useContext(MainContext4);
  const { token } = useAuth();


const handleEdit = (event) => {
 event.stopPropagation();
    event.preventDefault();

    d.toUpdatedata();
    Emitter.emit('actioneven', props.actioneven);
}

const handleDelete = async (event) => {
 event.stopPropagation();
    event.preventDefault();

   let dataaction = { "nama": props.actioneven.nama, "tempatlahir": props.actioneven.tempatlahir, 
"tgllahir": props.actioneven.tgllahir, "noktp": props.actioneven.noktp, "nohp": props.actioneven.nohp, 
"tower": props.actioneven.tower,"unit": props.actioneven.unit, "status": props.actioneven.status,
 "periodsewa": props.actioneven.periodsewa, "agen": props.actioneven.agen, 
"emergencyhp": props.actioneven.emergencyhp, 
"pemilikunit": props.actioneven.pemilikunit }    


try {

    if (!token) {
      // Redirect to the login page
      return;
    }

    await fetch(`${process.env.REACT_APP_API_BASE_URL}/action`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json', 'Authorization': token? token : ''},
               body: JSON.stringify(dataaction)
}).then((response) => response.json()
   ).then(function(data){
    if(data.answer === "ok"){
        c.callyangdicari();
}
});
} catch (error) {
    console.error(error);
  }

}


return(
<div className="editdeleteevendiv">
<div className="editbuttonevendiv">
<button className="editbuttoneven" onClick={handleEdit} >Update</button>
</div>
<div className="deletebuttonevendiv">
<button className="deletebuttoneven" onClick={handleDelete} >Delete</button>
</div>
</div>
);

}

export default ActionColumneven;
