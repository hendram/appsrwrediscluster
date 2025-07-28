import React, {useRef, useState} from 'react';
import './Adminpage.css';
import { useAuth } from './AuthContext.js';


const Adminpage = () => {

const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), [])
const [uploadfile, setUploadfile] = useState({open: "Uploadhid" });
const [file, setFile] = useState();


const resultrandomoperator = useRef(null);
const operatorname = useRef(null);
const successsubmit = useRef(null);
const successdelete = useRef(null);
const { token } = useAuth();


function forbuttonclick(event){
        event.stopPropagation();
        event.preventDefault();
}

const handleClicktokenoperator = (event) => {
      forbuttonclick(event);
     resultrandomoperator.current = Math.random().toString(36).slice(2);
      forceUpdate();
}

const handleSubmitoperator = async(event) => {
   forbuttonclick(event);

    let randomx = resultrandomoperator.current;
    let namaoperator = operatorname.current.value;
            if((namaoperator !== "") || (namaoperator !== undefined) || (randomx !== undefined)){
    let operatordata = {"operatorname": namaoperator, "invite": randomx }

try {

    if (!token) {
      // Redirect to the login page
      return;
    }

       await fetch(`${process.env.REACT_APP_API_BASE_URL}/operator`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json', 'Authorization': token? token : '' },
               body: JSON.stringify(operatordata)
}).then((response) =>  response.json()
       ).then(function(data){
        if(data.answer === "ok"){
           successsubmit.current = "Success";
           forceUpdate(); 
}
});
} catch (error) {
    console.error(error);
  }
}
}


const handleDeleteoperator = async(event) => {
   forbuttonclick(event);

    let namaoperator = operatorname.current.value;
            if((namaoperator !== "") || (namaoperator !== undefined)){
    let operatordata = {"operatorname": namaoperator }


try {

    if (!token) {
      // Redirect to the login page
      return;
    }


       await fetch(`${process.env.REACT_APP_API_BASE_URL}/operator`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json', 'Authentication': token? token : '' },
               body: JSON.stringify(operatordata)
}).then((response) =>  response.json()
       ).then(function(data){
        if(data.answer === "ok"){
           successdelete.current = "Success";
           forceUpdate(); 
}
});
} catch (error) {
    console.error(error);
  }

}
}


const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

const handleBackup = async (event) => {
   forbuttonclick(event);

        let backupdata = {backup: "ok"};

       await fetch(`${process.env.REACT_APP_API_BASE_URL}/backupdb`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(backupdata)
}).then((response) => response.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'greenbay.zip';
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
}


const handleRestore = async (event) => {
    forbuttonclick(event);
   
    let newuploadfile = {open: "Uploadshow"};
     setUploadfile(newuploadfile);

}


const handleUpload = async (event) => { 
    forbuttonclick(event);

  const stream = await file.arrayBuffer();
    const streamData = new Uint8Array(stream);

       await fetch(`${process.env.REACT_APP_API_BASE_URL}/restoredb`, {
      method: 'POST',
      headers: {
        'content-type': 'application/octet-stream',
  //      'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
      body: streamData,
      // 👇 Set headers manually for single file upload
    })
      .then((res) => res.json())
      .then(function(data) {
    if(data.answer === "ok"){
     setUploadfile({open: "Uploadhid"})
}
})
      .catch((err) => console.error(err));
}


 


return(
<div className="Adminpagediv">
<div className="Inviteoperator">
<div className="Generatetokenoperatordiv">
<button onClick={(e) => handleClicktokenoperator(e)} className="Generatetokenoperatorbut">
Generate Token</button>
<span>{resultrandomoperator.current}</span>
</div>
<div className="Operatornameadmdiv">
<div className="Operatornameadmtext">Operator Name:</div>
<div className="Operatornameadmininputdiv">
<input type="text"  ref={operatorname} className="Operatornameinput" />
</div>
</div>
<div className="Submitoperatorbuttondiv">
<button onClick={(e) => handleSubmitoperator(e)} className="Submitoperator">Submit</button>
<span>{successsubmit.current}</span>
</div>

<div className="Deleteoperatorbuttondiv">
<button onClick={(e) => handleDeleteoperator(e)} className="Deleteoperator">Delete</button>
<span>{successdelete.current}</span>
</div>
</div> {/* closing for Inviteoperator */}
<div className="Backuprestorediv">
<div className="Backupbuttondiv">
<button onClick={(e) => handleBackup(e)} className="Backupbutton">Backup</button>
</div>
<div className="Restorebuttondiv">
<button onClick={(e) => handleRestore(e)} className="Restorebutton">Restore</button>
</div>
</div> {/* closing for Backuprestorediv */ }
<div className={uploadfile.open}>
<label htmlFor="uploadfile">Please upload your file below:</label>
<input type="file" id="uploadfile" className="Uploadfileinput" onChange={handleFileChange} />
<button onClick={(e) => handleUpload(e)} className="Uploadbutton">Upload</button>
</div>
</div>
);
}

export default Adminpage;
