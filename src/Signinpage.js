import React, {useState, useRef} from 'react';
import { useAuth } from './AuthContext';
import { jwtDecode } from 'jwt-decode';
import './Signinpage.css';

const Signinpage = (props) => {

const [sign, setSign] = useState({signuptop: 'Signuptopshow', signintop: 'Signintophid', 
signup: "Signupbuttonhid", invitationcode: "Invitationcodehid",
repeatpassword: "Repeatpasswordtextinputdivhid", signin: "Signinbuttonshow"});
const username = useRef(null);
const password = useRef(null);
const invitecodesign = useRef(null);
const { login, token } = useAuth();

async function sendSignupMess(){
      let usernya = username.current.value;
      let passwordnya = password.current.value;
      let invitecodenya = invitecodesign.current.value;
      let datauser = {"operatorname": usernya, "password": passwordnya, "invite": invitecodenya }
     
      await fetch(`${process.env.REACT_APP_API_BASE_URL}/user`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(datauser)
}).then((response) => response.json()
   ).then(function(data){
if(data.token){
 try{
         login(data.token);
         }
          catch (error) {
               console.error(error);
         }
          props.opendataprocess("true");
}
});
}

async function sendSigninMess(){
      let usernya = username.current.value;
      let passwordnya = password.current.value;
      let datauser = {"operatorname": usernya, "password": passwordnya }
     
      await fetch(`${process.env.REACT_APP_API_BASE_URL}/user`, {
               method: "POST",
               headers: { 'Content-Type': 'application/json',
               'Authorization': token ? token : '' },
               body: JSON.stringify(datauser)
}).then((response) => response.json()
   ).then(function(data){

if (data.token) {
   try {
      login(data.token);
      const decoded = jwtDecode(data.token);

      if (decoded.role === "admin") {
         props.openadminpage("true");
      } else {
         props.opendataprocess("true");
      }
   } catch (err) {
      console.error("Token error", err);
   }
}

});
}

const handleSigninsubmit = async(event) => {
    event.stopPropagation();
    event.preventDefault();
   await sendSigninMess();    
     
}

const handleSignupsubmit = async(event) => {
    event.stopPropagation();
    event.preventDefault();
    await sendSignupMess();
}

const handleSignup = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if(sign.signuptop === 'Signuptopshow'){
    let newsign = {signuptop: 'Signuptophid', signintop: 'Signintopshow', signup: 'Signupbuttonshow', 
invitationcode: 'Invitationcodeshow',
repeatpassword: "Repeatpasswordtextinputdivshow", signin: 'Signinbuttonhid'};
   setSign(newsign);
}
}


const handleSignin = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if(sign.signintop === 'Signintopshow'){
    let newsign = {signuptop: 'Signuptopshow', signintop: 'Signintophid', signup: 'Signupbuttonhid', 
invitationcode: 'Invitationcodehid',
repeatpassword: "Repeatpasswordtextinputdivhid", signin: 'Signinbuttonshow'};
   setSign(newsign);
}
}

return(
<div className="Signpagediv">
  <div className="Topsidediv">
   <div className="Signuptextdiv">
   <span className="Signuptextspan"> Not sign up yet ? </span>
   </div>
    <div className="Signup1buttondiv">
   <button onClick={(e) => handleSignup(e)} className={sign.signuptop}>
Sign up
</button>
   <button onClick={(e) => handleSignin(e)} className={sign.signintop}>
Sign in
</button>
   </div>
</div>  {/* closing for Topsidediv */}
<div className="Middlesidediv">
 <div className="Usernametextinputdiv">
   <div className="Usernametextspandiv">
  <span className="Usernametextspan">Username: </span>
   </div>
   <div className="Usernameinputdiv">
   <input type="text" className="Usernameinput" ref={username} />
    </div>
  </div> {/* closing for usernametextinputdiv */}
   <div className="Passwordtextinputdiv">
    <div className="Passwordtextspandiv">
  <span className="Passwordtextspan">Password: </span>
    </div>
     <div className="Passwordinputdiv">
   <input type="password" className="Passwordinput" ref={password} />
    </div>
   </div> {/* closing for passwordtextinputdiv */}
   <div className={sign.repeatpassword}>
   <div className="Repeatpasswordtextspandiv">
  <span className="Repeatpasswordtextspan">Repeat Password: </span>
   </div>
   <div className="Repeatpasswordinputdiv">
   <input type="password" className="Repeatpasswordinput" />
     </div>
   </div> {/* closing for sign.repeatpassword */}
   <div className={sign.invitationcode}>
   <div className="Invitetextspandiv">
  <span className="Invitetextspan">Invitation code: </span>
   </div>
     <div className="Inviteinputdiv">
    <input type="text" className="Inviteinput" ref={invitecodesign} />
   </div>
    </div> {/* closing for middlebottomdiv */}
</div>
<div className="Bottomsidediv">
<button className={sign.signin} onClick={(e) => handleSigninsubmit(e)} >
<span>Sign in</span>
</button>
<button className={sign.signup} onClick={(e) => handleSignupsubmit(e)} >
<span>Sign up</span>
</button>
</div>

</div>
);
}

export default Signinpage;
