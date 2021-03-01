import React from 'react';
import Therrell from '../../images/Therrell1.png'
import Morehouse from '../../images/morehouse.png'
import GA from '../../images/general assembly.png'
import Semester from '../../images/semester.jpg'
import Degree from '../../images/degree.jpg'
import Codecademy from '../../images/codecademy.png'




function Accomplishments() {
    return (
        <section id="Skills" class="container">
            <h2 class="under">Accomplishments</h2>
            <br/>
            <div class="skills-gallery">
              <img src={Therrell} alt="Therrell"/>
              <img src={Morehouse} alt="Morehouse"/>
              <img src={GA} alt="General Assembly"/>
              <img src={Semester} alt="teacher of the semester"/>
              <img src={Degree} alt="Degree"/>
              <img src={Codecademy} alt="Codecademy"/>
            </div>
          </section>
    );
}

export default Accomplishments;