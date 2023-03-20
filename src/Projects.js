import React from 'react';
import {Link} from 'react-router-dom';
function Projects() {
  return (
    <div id='projects'>
      <h1 class="h1">PROJECTS</h1>
      <div class="div2">
          <div class="span1" id="span1"><Link  to='/sec1' class='a2'>1st SECTION</Link></div>
          <div class="span2"></div>
          <div class="span1 " id="span2"><Link to='/sec2' class='a2'>2st SECTION</Link></div>
          <div class="span2"></div>
          <div class="span1" id="span3"><Link to='/sec3' class='a2'>3st SECTION</Link></div>
      </div>
   </div>
    );
  }
  
  export default Projects;