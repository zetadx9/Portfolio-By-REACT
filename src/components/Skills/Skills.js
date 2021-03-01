import React from 'react';
import Python from '../../images/Pyhton.jpeg'
import Mongo from '../../images/mongodb.jpeg'
import SQL from '../../images/sql.png'
import Mongoose from '../../images/mongoose.png'
import REACT from '../../images/react.png'
import Django from '../../images/django.png'

function Skills() {
    return (
        <section id="Skills" className="container">
          <h2 className="under">Skills</h2>
          <br/>
          <div className="skills-gallery">
            <img src="https://i.stack.imgur.com/PgcSR.png" alt="HTML"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png" alt="CSS"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png" alt="Java Script"/>
            <img src={Python} alt="python"/>
            <img src={Mongo} alt="mongoDB"/>
            <img src={SQL} alt="SQL"/>
            <img src={Mongoose} alt="mongoose"/>
            <img src={REACT} alt="react"/>
            <img src={Django} alt="django"/>
        </div>
        </section>
    );
}

export default Skills;