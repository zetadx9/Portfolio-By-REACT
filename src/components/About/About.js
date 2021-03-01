import React from 'react';
import Therrell from '../../images/Therrell.JPG'
import graduate from '../../images/graduate.jpg'




function Home() {
    return (
        <div>
        <section id="home" className="hero">
        <div className="title">
          <h1>Stephen D. Smith's Portfolio</h1>
          <p id="color">Software Engineer/Front End Developer</p>
        </div>
      </section>
        <section id="about" className="container">
          <h2 className="under">About</h2>
        
          <section>
            <h3>“OPENING”</h3>
            <p className="change1">
            My name is Stephen Smith, and I’m applying for the Software Engineering position. Before I became the software engineer you were looking for, I was a math teacher at Therrell High School in Atlanta, Ga. 
            </p>
            <br/>
            <img className="aboutimg" src={Therrell} alt=""/>
            <img className="aboutimg" src={graduate} alt=""/>
    
    
        </section>
    <br/>
      <section>
          <h3>“Main”</h3>
          <p className="change2"> I always dreamt that I would be able to use my problem solving skills to change lives and assist in the field of tech. My goal is to one day be a tech lead at a disruptive tech company. When I was in college, I received a teacher scholarship that required me to major in the field of STEM. I had to choose between Math, Biology, Computer Science, and Engineering. My choices quickly narrowed down to Math and Computer Science. I later found out that a lot of my math classes had similarities to the computer science courses so I chose Math due to its wide connection to many other majors and careers. After teaching for 2 years as a requirement for my scholarship I quickly began to remember my true goal and decided to look at the developer career route. I already had colleagues that worked at Microsoft and other Tech companies. I decided to enroll into the General Assembly bootcamp program so that I could begin to chase my dream. I was also inspired by Clément Mihailescu, a youtuber who worked at Google for 2 years and made Software Engineering sound like heaven on Earth.
        </p>
        </section>
    <br/>
      <section>
      <h3>“Why I fit the role”</h3>
        <p className="change1"> The General Assembly program taught me alot about Dev tools, API, and Frameworks. I learned HTML, CSS3, Java Script, Node, MongoDB, Python, SQL, and React. I also learned how to push products onto Github and deploy using Heroku. While in the program, I enrolled into the Web Development and Computer Science courses on Codecademy.com to help increase my understanding of CSS, HTML, Javascript, React, and Python. I also was encouraged to read the books entitled “Programming Interviews Exposed” - (by John Mongan, Noah Kindler, Eric Giguere), and “Cracking the Coding Interview” by - Gayle Laakmann Mcdowell. With 5 years of college, 3 years of math course, Codecademy experience, and General Assembly Experience, I finally felt confident in applying for the Software Engineering Position.</p>
        </section>
    <br/>
    <section>
          <h3>“Conclusion”</h3>
        <p className="change2">Now, I feel like I  have the skills and passion necessary to accomplish  any  task. Whenever I lacked the understanding to complete any assignment, project, or deliverable I quickly picked up books and surfed the web to find accurate information to help solve the puzzle at hand. I fell in love with the process of Googling because I believe all things are possible to those who effectively use Google search. Like my uncle always says, ‘“ Don’t ask me, Google it.”</p>
    </section> 
    <br/>
    <section>
      <p className="change1">I would like to thank you for your time and for considering me as a qualified candidate for the Software Engineering position.
      </p>
    </section>
        </section>
        </div>
    );
}

export default Home;