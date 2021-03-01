import React from 'react';
import Resume1 from '../../project photos/resume.png'

function Resume() {
    return (
        <div>
<section id="home" className="hero">
      <div className="title">
        <h1>Stephen D. Smith's Resume</h1>
        <p id="color">Software Engineer/Front End Developer</p>
      </div>
    </section>

    <section id="about" className="container">
      <h2 className="under">Stephen D. Smith RESUME</h2>
    <br/>
      <section>
        <p className="change1">
           Photo of Resume</p>
        <br/>
        <img className="links" id="change3" src={Resume1} alt=""/>


        <a href="https://docs.google.com/document/d/1qvsb7CyKIQ7ft7yqN8sCvBkeGMO-Tza0mVDHoT5DsHQ/edit?usp=sharing"><h3 class="links">Link to Resume</h3></a>

    </section>
    </section>
      </div>
    );
}

export default Resume;