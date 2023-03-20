import React from 'react';
import Image from './img.png';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useEffect,useState } from 'react';
function Home() {
  //type writer
  const[loopNum,setLoopNum]=useState(0);
  const[isDeleting,setIsDeleting]=useState(false);
  const words=['FRONTEND DEVELOPER','BACKEND DEVELOPER','FULLSTACK DEVELOPER'];
  const[text,setText]=useState('');
  const[delta,setDelta]=useState(300-Math.random()*100);
  const period=1000;
  useEffect(()=>{
    let ticker=setInterval(()=>{
      tick();
    },delta)
    return ()=>{clearInterval(ticker)};
},[text])
const tick=()=>{
  let i=loopNum%words.length;
  let fullText=words[i];
  let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
  setText(updatedText);
  if(isDeleting){
    setDelta(prevDelta=>prevDelta/2)
  }
  if(!isDeleting&&updatedText===fullText){
    setIsDeleting(true);
    setDelta(period);
  }
  else if(isDeleting&&updatedText===''){
    setIsDeleting(false);
    setLoopNum(loopNum+1);
    setDelta(500);

  }
  }
//////////////////////////////////////////////
    return (
    <div class="card col-md-12 " id='home'>
      <div class="row ">
        <div class="col-md-6">
          <div class="card-body btn2">
            <h1 class="card-text">Hi! I,M SARA SAIF ,<p id="p1" class="p1">{text}</p></h1>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href='https://www.facebook.com/profile.php?id=100025742575328&mibextid=ZbWKwL' class='btn btn-outline-primary a1' target='_blank'>< FaFacebook /></a>
            <a href='https://www.linkedin.com/in/sara-saif-001b21238' class='btn btn-outline-primary a1' target='_blank'>< FaLinkedin /></a>
          </div>
        </div>
        <div class="col-md-6">
          <img src={Image} class="img-fluid rounded-start" alt="..."/>
        </div>
      </div>
    </div>
    );
  }
  
  export default Home;