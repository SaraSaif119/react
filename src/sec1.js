import React from 'react';
import Image1 from './img2.jpg';
import Image2 from './images (3).jpg';
import Image3 from './download (2).jpg';
import Image4 from './img1.jpg';
import Image5 from './89964-designer.gif';
import Image6 from './img.jpg';
function Sec1() {
    return (
        <div>
            <div class="row div3" > 
            <div class="col-lg-4 col-md-6 col-sm-12 card container-fluid p-3 my-3 border div4">
                <img src={Image1} class="img1"/>
                <div class="div5">
                <h3 class="h4 text-light">My First One</h3>
                <a href='https://sarasaif119.github.io/new-one/' target='_blank' class='text-light a1'>TAP TO SEE</a>
                </div>
            </div>  
            <div class="col-lg-4 col-md-6 col-sm-12 card container-fluid p-3 my-3 border div4"> 
                <img src={Image2} class="img1"/>
                <div class="div5">
                <h3 class="h4 text-light">Restaurant</h3>
                <a href='https://sarasaif119.github.io/restaurant/' target='_blank' class='text-light a1'>TAP TO SEE</a>
                </div>
            </div> 
            <div class="col-lg-4 col-md-6 col-sm-12 card container-fluid p-3 my-3 border div4">   
                <img src={Image3} class="img1"/> 
                <div class="div5">
                <h3 class="h4 text-light">bootstrap</h3>
                <a href='https://sarasaif119.github.io/sara/' target='_blank' class='text-light a1'>TAP TO SEE</a>
                </div>
            </div> 
        </div> 
    
    
        <div class="row div3" > 
            <div class="col-lg-4 col-md-6 col-sm-12 card container-fluid p-3 my-3 border div4">
                <img src={Image4} class="img1"/>
                <div class="div5">
                <h3 class="h4 text-light">FiRST JS PRO</h3>
                <a href='https://sarasaif119.github.io/my-store/' target='_blank' class='text-light a1'>TAP TO SEE</a>
                </div>
            </div>  
            <div class="col-lg-4 col-md-6 col-sm-12 card container-fluid p-3 my-3 border div4"> 
                <img src={Image5} class="img1"/>
                <div class="div5">
                <h3 class="h4 text-light">Second Js Pro</h3>
                <a href='https://sarasaif119.github.io/new-repository/' target='_blank' class='text-light a1'>TAP TO SEE</a>
                </div>
            </div> 
            <div class="col-lg-4 col-md-6 col-sm-12 card container-fluid p-3 my-3 border div4">   
                <img src={Image6} class="img1"/> 
                <div class="div5">
                <h3 class="h4 text-light">Third Js Project</h3>
                <a href='https://sarasaif119.github.io/iphone/' target='_blank' class='text-light a1'>TAP TO SEE</a>
                </div>
            </div> 
        </div> 
        </div>
    );
}

export default Sec1;