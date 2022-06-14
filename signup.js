import './Signup.css'
import React,{useState} from 'react';
import Axios from "axios";
import x4 from './4.jpg'
import x3 from './3.jpg'
import x6 from './6.jpg'
import x5 from './5.jpg'
import x8 from './8.jpg'
import x2 from './2.jpg'
import x1 from './1.jpg'
import x9 from './9.jpg'
import x10 from './10.jpg'
import x15 from './15.jpg'
import x14 from './14.jpg'
import x11 from './11.jpg'
import x13 from './13.jpg'
import x12 from './12.jpg'
import x7 from './7.jpg'
import x16 from './16.jpg'
import x17 from './17.jpg'
import x21 from './21.jpg'
import {
  
  Link
} from "react-router-dom";


const Signup=()=>{
  const [name,setName] = useState ("");
  const [email,setEmail] = useState ("");
  const [id,setUserid] = useState ("");
  const [password,setPassword] = useState('');


  const addToList=async()=>{

   const k =await  Axios.post("http://localhost:3001/insert",
   {
    EmployeeName:name,
     Email:email,
     Setuserid:id,
     Setpassword:password,
     

   }
   );

   console.log(k)
};
  
  
  return(
        
        <body>

        <div>
          <img class="x4" src={x4} /><img class="x3" src={x3} /><img
            class="x6"
            src={x6}
          /><img class="x5" src={x5}/><img class="x8" src={x8} /><img
            class="x2"
            src={x2}
          /><img class="x1" src={x1} /><img class="x9" src={x9} /><img
            class="x10"
            src={x10}
          /><img class="x15" src={x15} /><img class="x14" src={x14} /><img
            class="x11"
            src={x11}
          /><img class="x13" src={x13} /><img class="x12" src={x12} /><img
            class="x7"
            src={x7}
          /><img class="x21" src={x21}/>
          <div class="rectangle-9"></div>
          <div class="rectangle-7"></div>
          <div class="x2022-right-of-addmission-reserved"/>2022| right of addmission reserved</div>
          <div class="rectangle-2"></div>
          <div class="rectangle-4"></div>
         
  
          
          <div class="login-form">SIGN-UP HERE</div>
          <form>
            <div class="form">
              <div class="form-group">
                  <div class="form-group">
                      <input type="text" onChange={(event)=>{
                        setName(event.target.value);
                      }} class="control-form" placeholder="FULL NAMES" name="username"/>
                    </div>
                <input type="text"onChange={(event)=>{
                        setEmail(event.target.value);
                      }} class="control-form" placeholder="Email Addresss"/>
              </div>
              <div class="form-group">
                  <input type="text"onChange={(event)=>{
                        setUserid(event.target.value);
                      }} class="control-form" placeholder="SET USER ID"/>
                </div>
  
              <div class="form-group">
                <input type="password" onChange={(event)=>{
                        setPassword(event.target.value);
                      }}class="control-form" placeholder="SET Password"/>
              </div>
              <div class="form-group">
                  <input type="password" class="control-form" placeholder="CONFIRM Password"/>
                </div>
  
              <div class="checkbox">
                <input type="checkbox" class="control-form-check" placeholder="Password"/><span> Keep Me Loggen In</span>
              </div>
  
            </div>
  
            <Link to="/teams"><input type="submit" class="rectangle-5" value="SIGN-UP" name="btnsign-up" onClick={addToList}/></Link>
        
          
  </form>
  <div class="rectangle-6"></div>
  
          <img class="oip-17-1" src={x17} />
        
</body>    
































    );
}
export default Signup;