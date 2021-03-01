import React from 'react';
import Tomagatchi1 from '../../project photos/tomagotchi1.png'
import Tomagatchi2 from '../../project photos/tomagotchi2.png'
import Tomagatchi3 from '../../project photos/tomagotchi3.png'
import Tomagatchi4 from '../../project photos/tomagotchi4.png'
import Yoga1 from '../../project photos/yoga1.png'
import Yoga2 from '../../project photos/yoga2.png'
import Yoga3 from '../../project photos/yoga5.png'
import Yoga4 from '../../project photos/yoga6.png'
import Chisme1 from '../../project photos/chisme1.png'
import Chisme2 from '../../project photos/chisme2.png'
import Chisme3 from '../../project photos/chisme3.png'
import Chisme4 from '../../project photos/chisme4.png'
import Chisme5 from '../../project photos/chisme5.png'


function Projects() {
    return (
<div>
 <section id="home" className="hero">
      <div className="title">
        <h1>Stephen D. Smith's Projects</h1>
        <p id="color">Software Engineer/Front End Developer</p>
      </div>
    </section>

    <section id="about" className="container">
      <h2 className="under">Projects</h2>
    <br/>
      <section>
        <h3 className="under">Tomagatchi</h3>
        <p className="change1">
            My game design will be based off the original tomagotchi. The pet will be able to
            eat, exercise, play, age, and die. The death of the pet will be dependent on the 
            age of the pet and the amount of food, exercise, and play time it receives.        </p>
        <br/>
        <img className="projectimg" src={Tomagatchi1} alt=""/>
        <img className="projectimg" src={Tomagatchi2} alt=""/>
        <img className="projectimg" src={Tomagatchi3} alt=""/>
        <img className="projectimg" src={Tomagatchi4} alt=""/>
        

        <a href="https://github.com/zetadx9/Tamagotchi"><h3 className="links">Link to Tomagatchi Project</h3></a>
        <a href="https://zetadx9.github.io/Tamagotchi/"><h3 className="links">Link to Tomagatchi Game</h3></a>



    </section>
<br/>
<section>
    <h3 className="under">Yoga Express</h3>
    <p className="change2">
        Yoga Express is a web application that allows the user to select yoga poses and create their own yoga sequence which they can practice at home.

        The Home Page explains the premise of the site (create your own yoga sequence), and has links to the Poses page, the Yoga Sequence page, History of Yoga page, and the About page.
        
        The homepage directs users to the New Sequence page where users will name their sequences.
        
        The Yoga Poses page has photos of many different yoga poses and their names. Users can click the "add pose" button to add the pose to their specified sequence.
        
        The Poses Show page displays more information about each pose.
        
        Yoga Sequence show page: When the user adds poses via the Poses Page, the Sequence page will become populated with yoga poses (and their photos) creating a sequence. Users will be able to click on the poses for their descriptions.
        
        Yoga History page: tells a brief history of yoga.
        
        About page: Has photos of developers Stephen Smith and Leah Davis as well as the description of the project.        </p>
    <br/>
    <img className="projectimg" src={Yoga1} alt=""/>
    <img className="projectimg" src={Yoga2} alt=""/>
    <img className="projectimg" src={Yoga3} alt=""/>
    <img className="projectimg" src={Yoga4} alt=""/>

    <a href="https://git.generalassemb.ly/davisstacked/expressYogaDeliverable"><h3 className="links">Link to Yoga Express Project</h3></a>
    <a href="https://enigmatic-oasis-59448.herokuapp.com/"><h3 className="links">Link to Yoga Express</h3></a>



</section>
<br/>
    <section>
      <h3 className="under">CHISME</h3>
      <p className="change1"> In this project, we workded with UX designers to create a Celebrity Gossip page. 
          We chose to make the page circulate around Kanye West. 
          We had to set up the blog as well as return data from users.</p>
      <br/>
      <img className="projectimg" src={Chisme1} alt=""/>
      <img className="projectimg" src={Chisme2} alt=""/>
      <img className="projectimg" src={Chisme3} alt=""/>
      <img className="projectimg" src={Chisme4} alt=""/>
      <img className="projectimg" src={Chisme5} alt=""/>


      <a href="https://git.generalassemb.ly/derek-oshita/chisme"><h3 className="links">Link to CHISME Project</h3></a>
      <a href="https://secret-thicket-11557.herokuapp.com/#nav-link-container"><h3 className="links">Link to CHISME</h3></a>



</section>
</section>
</div>
    );
}

export default Projects;