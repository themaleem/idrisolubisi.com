import PropTypes from 'prop-types'
import React from 'react'
//import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'
import boe from "../../Content/assets/boeinvest.webp"
import dig from "../../Content/assets/digiitalClock.png"
import isa from "../../Content/assets/isazoni.png"
import kwarasell from "../../Content/assets/kwarasell.png"
import musical from "../../Content/assets/musicalEvent.png"
import naija4life from "../../Content/assets/naija4life.png"
import ponk from "../../Content/assets/ponkApp.png"
import rethinkLagos from "../../Content/assets/rethinkLagos.png"
import vogue from "../../Content/assets/vogu.png"
import web from "../../Content/assets/webclock.png"
import gatsby from '../images/gatsby2.png'

//http://jsfiddle.net/5e6zr2Lq/1/


class Main extends React.Component {

  render() {
    let myFunction = () => {
      alert("Thanks For getting in Touch... You will get a feedback soon")
    }
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">MY Blog</h2>
          <span className="image main">
            <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308681/Idris%20Portfolio%20Pictures/digiitalClock.webp" alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article> */}

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >


          <h2 className="major">PROJECTS</h2>
          <h5><a href="https://github.com/Olanetsoft"
            target='_blank'
            rel="noopener noreferrer"
            className="icon fa-github"> Click here to View More on GitHub</a></h5>

          <h5><a href="https://gitlab.com/Olanetsoft"
            target='_blank'
            rel="noopener noreferrer"
            className="icon fa-gitlab"> Click here to View More on GitLab</a></h5>



          <span className="image main">
            <a href="https://vogue.herokuapp.com/"
              target='_blank'
              rel="noopener noreferrer" >
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1585696699/Idris%20Portfolio%20Pictures/vogue.webp" alt="vogue" /></a>
            {/* https://res.cloudinary.com/olanetsoft/image/upload/v1585696699/Idris%20Portfolio%20Pictures/vogue.webp */}
            {/* <img src="https://api.miniature.io/?width=100&height=30&url=rethinklagos.com"/> */}
          </span>
          <p>
            PROJECT NAME: VOGUE STORE <br />
            <a href="https://vogue.herokuapp.com/" target='_blank'
              rel="noopener noreferrer"
              className="fa fa-eye"> Visit Site  </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Olanetsoft/Vogue-Store"
              target='_blank' className="icon fa-github"
              rel="noopener noreferrer"> View Source Code</a>
          </p>



          <span className="image main">
            <a href="https://integrations.eu-gb.assistant.watson.cloud.ibm.com/web/public/08c8e484-3c52-4685-8cc5-be6974aaeb8f"
              target='_blank'
              rel="noopener noreferrer" >
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1586018935/Idris%20Portfolio%20Pictures/waka.webp" alt="wakalagos" /></a>
          </span>
          <p>
            PROJECT NAME: WAKALAGOS CHAT APP <br /><a href="https://integrations.eu-gb.assistant.watson.cloud.ibm.com/web/public/08c8e484-3c52-4685-8cc5-be6974aaeb8f" target='_blank'
              rel="noopener noreferrer"
              className="fa fa-eye"> Visit Site </a>
          </p>





          <span className="image main">
            <a href="https://www.rethinklagos.com"
              target='_blank'
              rel="noopener noreferrer" >
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308684/Idris%20Portfolio%20Pictures/rethinkLagos.webp"
                alt="Rethink" /></a>
            {/* https://res.cloudinary.com/olanetsoft/image/upload/v1580308684/Idris%20Portfolio%20Pictures/rethinkLagos.webp */}
            {/* <img src="https://api.miniature.io/?width=100&height=30&url=rethinklagos.com"/> */}
          </span>
          <p>
            PROJECT NAME: RETHINK LAGOS <br />
            <a href="https://www.rethinklagos.com" target='_blank'
              rel="noopener noreferrer"
              className="fa fa-eye"> Visit Site </a>

          </p>


          <span className="image main">
            <a href="https://we-flex.netlify.com/"
              target='_blank'
              rel="noopener noreferrer" >
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1585911355/Idris%20Portfolio%20Pictures/we-flex.webp" alt="vogue" /></a>
            {/* https://res.cloudinary.com/olanetsoft/image/upload/v1585696699/Idris%20Portfolio%20Pictures/vogue.webp */}
            {/* <img src="https://api.miniature.io/?width=100&height=30&url=rethinklagos.com"/> */}
          </span>
          <p>
            PROJECT NAME: WE-FLEX <br />
            <a href="https://we-flex.netlify.com/" target='_blank'
              rel="noopener noreferrer"
              className="fa fa-eye"> Visit Site </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/Olanetsoft/we-flex"
              target='_blank' className="icon fa-github"
              rel="noopener noreferrer"> View Source Code</a>
          </p>


          <span className="image main">
            <a href="https://digital-web-clock.netlify.com" target='_blank' rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308681/Idris%20Portfolio%20Pictures/digiitalClock.webp"
                alt="DigitalClock" /></a>
            {/* "https://res.cloudinary.com/olanetsoft/image/upload/v1580308681/Idris%20Portfolio%20Pictures/digiitalClock.webp" */}
          </span>
          <p>

            PROJECT NAME: DIGITAL CLOCK <br /><a href="https://digital-web-clock.netlify.com"
              target='_blank' rel="noopener noreferrer"
              className="fa fa-eye"> Visit Site </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <a href="https://github.com/Olanetsoft/Ticking-Clock-With-React"
              target='_blank' className="icon fa-github"
              rel="noopener noreferrer"> View Source Code</a>

          </p>


          <span className="image main">
            <a href="https://www.naija4life.com.ng" target='_blank' rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308683/Idris%20Portfolio%20Pictures/naija4life.webp"
                alt="naija4life" /></a>
            {/* "https://res.cloudinary.com/olanetsoft/image/upload/v1580308683/Idris%20Portfolio%20Pictures/naija4life.webp" */}
          </span>
          <p>
            PROJECT NAME: NAIJA4LIFE BLOG <br />
            <a href="https://www.naija4life.com.ng" target='_blank'
              rel="noopener noreferrer" className="fa fa-eye"> Visit Site</a>
          </p>


          <span className="image main">
            <a href="https://www.isazoni.com" target='_blank' rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308681/Idris%20Portfolio%20Pictures/isazoni.webp" alt="isazoni" /></a>
            {/* "https://res.cloudinary.com/olanetsoft/image/upload/v1580308681/Idris%20Portfolio%20Pictures/isazoni.webp" */}
          </span>
          <p>
            PROJECT NAME: ISAZ-ONI <br />
            <a href="https://www.isazoni.com.ng" target='_blank'
              rel="noopener noreferrer" className="fa fa-eye"> Visit Site </a>
          </p>

          <span className="image main">
            <a href="https://www.kwarasell.com" target='_blank' rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308684/Idris%20Portfolio%20Pictures/kwarasell.webp" alt="Kwarasell" /></a>

            {/* "https://res.cloudinary.com/olanetsoft/image/upload/v1580308684/Idris%20Portfolio%20Pictures/kwarasell.webp" */}
          </span>
          <p>
            PROJECT NAME: KWARASELL.COM <br />
            <a href="https://www.kwarasell.com"
              target='_blank' rel="noopener noreferrer" className="fa fa-eye"> Visit Site </a>
          </p>

          <span className="image main">
            <a href="https://ponk-app.netlify.com" target='_blank' rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308684/Idris%20Portfolio%20Pictures/ponkApp.webp" alt="ponkApp" /></a>
            {/* "https://res.cloudinary.com/olanetsoft/image/upload/v1580308684/Idris%20Portfolio%20Pictures/ponkApp.webp" */}
          </span>
          <p>
            PROJECT NAME: Ponk App <br />
            <a href="https://ponk-app.netlify.com"
              target='_blank' rel="noopener noreferrer" className="fa fa-eye">
              Visit Site </a>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <a href="https://github.com/Olanetsoft/Ponk-App" target='_blank'
              rel="noopener noreferrer"
              className="icon fa-github"> View Source Code</a>
          </p>

          <span className="image main">

            <a href="https://music-event.netlify.com" target='_blank' rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308685/Idris%20Portfolio%20Pictures/musicalEvent.webp"
                alt="MusicEvent" /></a>
            {/* "https://res.cloudinary.com/olanetsoft/image/upload/v1580308685/Idris%20Portfolio%20Pictures/musicalEvent.webp" */}
          </span>
          <p>
            PROJECT NAME: Musical Event<br />
            <a href="https://music-event.netlify.com" target='_blank'
              rel="noopener noreferrer"
              className="fa fa-eye"> Visit Site </a>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <a href="https://github.com/Olanetsoft/musical-event-project" target='_blank' rel="noopener noreferrer"
              className="icon fa-github"> View Source Code</a>
          </p>


          <span className="image main">

            <a href="https://web-clockjs.netlify.com" target='_blank' rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1582408165/Idris%20Portfolio%20Pictures/jsclock.webp" alt="jsClock" /></a>
            {/* "https://res.cloudinary.com/olanetsoft/image/upload/v1582408165/Idris%20Portfolio%20Pictures/jsclock.webp" */}
          </span>
          <p>
            PROJECT NAME: Web Clock <br />
            <a href="https://web-clockjs.netlify.com" target='_blank'
              rel="noopener noreferrer"
              className="fa fa-eye"> Visit Site </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Olanetsoft/webclock" target='_blank' rel="noopener noreferrer"
              className="icon fa-github"> View Source Code</a>
          </p>





          <span className="image main">
            <a href="https://www.boeinvest.com" target='_blank' rel="noopener noreferrer">

              <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308681/Idris%20Portfolio%20Pictures/boeinvest.webp" alt="Boeinvest" /></a>
            {/* https://res.cloudinary.com/olanetsoft/image/upload/v1580308681/Idris%20Portfolio%20Pictures/boeinvest.webp */}
            {/* <img src="https://api.miniature.io/?width=100&height=30&url=rethinklagos.com" /> */}
          </span>
          <p>
            PROJECT NAME: BOE INVESTMENT NIGERIA <br />
            <a href="https://www.boeinvest.com"
              target='_blank' rel="noopener noreferrer" className="fa fa-eye"> Visit Site </a>
          </p>

          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/olanetsoft"
                className="icon fa-twitter"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Twitter"
              > </a>
            </li>
            <li>
              <a
                href="https://github.com/olanetsoft"
                className="icon fa-github"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Github"
              ></a>
            </li>
            <li>
              <a href="https://medium.com/@olanetsoft"
                className="icon fa-medium"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Medium">
              </a>
            </li>
            <li>
              <a href="https://facebook.com/olubisiidris"
                className="icon fa-facebook"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Facebook">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/olanetsoft"
                className="icon fa-instagram"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Instagram">
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olubisi-idris-ayinde-05727b17a/"
                className="icon fa-linkedin"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
              </a>
            </li>

          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src="https://res.cloudinary.com/olanetsoft/image/upload/v1580308684/Idris%20Portfolio%20Pictures/aboutPic.webp" alt="My_photo" />
          </span>

          <h5>I strive for excellence and precision at all time, contributing the best of my ability and quota to improving organizational objective and achieving all goals set and target.</h5>

          <h3>skill set</h3>

          <h5>front End: </h5>
          <img src="https://img.icons8.com/color/60/000000/html-5.png" alt="html" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/css3.png" alt="css" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/javascript.png" alt="js" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/bootstrap.png" alt="bootstrap" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/officel/60/000000/react.png" alt="react" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/ios-filled/60/000000/jquery.png" alt="jquery" />
          <br /><br />


          <h5>Back End: </h5>
          <img src="https://img.icons8.com/color/60/000000/nodejs.png" alt="node" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/nolan/60/asp.png" alt="net" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/dusk/60/000000/sql.png" alt="sql" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/graphql.png" alt="graphql" />

          <br /><br />

          <h5>Content Management System: </h5>
          <img src="https://img.icons8.com/color/60/000000/ms-share-point.png" alt="share" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/wordpress.png" alt="wordpress" />&nbsp;&nbsp;&nbsp;
          <img src={gatsby} alt="gatsby" />

          <br /><br />

          <h5>Development Tools: </h5>
          <img src="https://img.icons8.com/color/60/000000/git.png" alt="git" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" alt="github" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/gitlab.png" alt="gitlab" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/trello.png" alt="trello" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/bitbucket.png" alt="bit" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/microsoft-teams.png" alt="teams" />

          <br /><br />

          <h5>Programing Languages: </h5>
          <img src="https://img.icons8.com/color/60/000000/javascript.png" alt="js" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/color/60/000000/c-sharp-logo.png" alt="csharp" />&nbsp;&nbsp;&nbsp;
          <img src="https://img.icons8.com/dusk/60/000000/python.png" alt="python" />&nbsp;&nbsp;&nbsp;

          <br /><br />

          <h3>Tertiary Institution Details :</h3>
          <h5>Abubakar Tafawa Balewa University<br />
            Degree Name: Bachelor's degree<br />
            Field Of Study: Electrical and Electronics Engineering<br />
            Dates attended: 2012 – 2017
              <h3>Leadership Role:</h3>
            1. Social Director of the Nigerian Institute of Electrical and Electronics Engineering (NIEEE)Atbu Chapter 2015/2016 Academic Session<br />
            2. Vice-president of National Association of Kwara state Student (NAKSS)Atbu Chapter 2015.<br />
            3. Secretary General of Ilorin Emirate Student's Union(IESU) 2014/2015<br />
            4. Welfare Director of Isokan Students State Association(ISSA) 2014/2015<br />
            5. Director of Social, National Union of Lagos State students (NULASS) 2014/2015<br />
          </h5>


          <h3>College Details: </h3>
          <h5>Brainpoint College<br />
            Degree Name: West Africa Examination Council<br />
            Dates attended : 2006 – 2011<br />
          </h5>

          <h3>Primary school Details: </h3>
          <h5>Muslim Children Private School<br />
            Degree Name: First school leaving certificate<br />
            Dates attended or expected graduation 2000 – 2005<br />
          </h5>


          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/olanetsoft"
                className="icon fa-twitter"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Twitter"
              > </a>
            </li>
            <li>
              <a
                href="https://github.com/olanetsoft"
                className="icon fa-github"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Github"
              ></a>
            </li>
            <li>
              <a href="https://medium.com/@olanetsoft"
                className="icon fa-medium"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Medium">
              </a>
            </li>
            <li>
              <a href="https://facebook.com/olubisiidris"
                className="icon fa-facebook"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Facebook">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/olanetsoft"
                className="icon fa-instagram"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Instagram">
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olubisi-idris-ayinde-05727b17a/"
                className="icon fa-linkedin"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
              </a>
            </li>

          </ul>
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'skill/certificate' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience & <br />Achievements</h2>


          <span className="image main">
            {/* <img src={CertImage} alt="" /> */}
          </span>

          <h3>Tavia Technologies Limited</h3>
          <h4>ROLE: Software Developer/Support Analyst -SharePoint<br /><br />
            Dates Employed: May 2019 – Present<br /><br />
            Location: Lagos, Nigeria</h4>
          <br />

          <h3>Ultra Media Solution</h3>
          <h4>Role: Web Development and Digital Marketing Intern<br /><br />
            Dates Employed: Mar 2019 – Apr 2019<br /><br />
            Location: 11 Unity Road ikeja lagos</h4>
          <br />

          <h3>CVIT</h3>
          <h4>Role: Network Administrator intern<br />
            Dates Employed: Mar 2019 – Apr 2019<br />
            Location: Ikeja lagos</h4>
          <br />
          <h3>FIIRO AUTOMATION</h3>
          <h4>Role: Graduate Electrical Engineer Trainee<br /><br />
            Dates Employed: Jun 2018 – Mar 2019<br /><br />
            Location: Lagos, Nigeria</h4>
          <br />
          <h3>Code lagos</h3>
          <h4>Role:Trainee<br />
            Dates Employed: Oct 2018 – Nov 2018<br /><br />
            Location: Lagos,Nigeria</h4>
          <br />

          <h3>Cisco Networking Academy</h3>
          <h4>Role: Engineering Trainee<br /><br />
            Dates Employed: Sep 2018 – Nov 2018</h4>
          <br />

          <h3>Google Digital Skills For Africa</h3>
          <h4>Digital Marketing Trainee<br /><br />
            Dates Employed: Sep 2018 – Oct 2018</h4>
          <br />
          <h3>Al-Hikmah University</h3>
          <h4>Electrical & Electronics Engineer Trainee<br /><br />
            Dates Employed: Nov 2016 – Apr 2017<br /><br />
            Location: Kwara, Nigeria</h4>
          <br />

          <h3>More Blessing Engineering Works</h3>
          <h4>Role: Engineer Trainee<br /><br />
            Dates Employed: Jan 2016 – Mar 2016<br /><br />
            Location: Lagos, Nigeria</h4>
          <br />



          <p>
            <b>ACHIEVEMENTS</b>
          </p>
          <h4>
            <a class="fa fa-trophy" aria-hidden="true" href="https://openclassrooms.com/en/course-certificates/7471028571"> Build web apps with ReactJS</a>
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/verify/M96TN8JSDWXP"> Front-End Web UI Frameworks and Tools:Bootstrap 4</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/records/69E4K5X3NBLY"> Responsive Website Basics: code with HTML,CSS & Js</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://academy.infinite.red/courses/679257/certificate"> AI Demystified: 5-Day Mini-Course</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/verify/BAP3BYQ2K4AJ"> Home Networking Basics</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/verify/M3TZQUVANEW3"> Data Communications and Network Services</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/verify/UFGB7QCD8RFK"> Network Protocols and Architecture</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/verify/F5RX3YLQKCYP"> Internet Connection: How to Get Online?</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/verify/35ZJQ28HWABE"> Preparing to Manage Human Resources</a>
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/verify/2ERVRYUM39E9"> Project Management: The Basics for Success</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="http://GOO.GL/y4UjgN"> The Fundamentals of DIgital Marketing</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.sololearn.com/Certificate/1051-8503127/pdf/"> C++ Tutorial course</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.sololearn.com/Certificate/1023-8503127/pdf/"> CSS Fundamentals course</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.sololearn.com/Certificate/1014-8503127/pdf/"> HTML Fundamentals course</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="#"> SharePoint Development</a><br />
            <br /><br />
            <a class="fa fa-trophy" aria-hidden="true" href="https://www.coursera.org/account/accomplishments/verify/2RUKKMFTZALP"> Enterprise System Management and Security</a><br />

          </h4>
          <a href="https://drive.google.com/file/d/1i5Rqzc_lh7fMNIxqJjQK1u7ktn168mJF/view">View CV</a>
          <br />
          <br />


          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/olanetsoft"
                className="icon fa-twitter"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Twitter"
              > </a>
            </li>
            <li>
              <a
                href="https://github.com/olanetsoft"
                className="icon fa-github"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Github"
              ></a>
            </li>
            <li>
              <a href="https://medium.com/@olanetsoft"
                className="icon fa-medium"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Medium">
              </a>
            </li>
            <li>
              <a href="https://facebook.com/olubisiidris"
                className="icon fa-facebook"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Facebook">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/olanetsoft"
                className="icon fa-instagram"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Instagram">
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olubisi-idris-ayinde-05727b17a/"
                className="icon fa-linkedin"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
              </a>
            </li>

          </ul>
          {close}
        </article>



        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            name="contact"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field" >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" onClick={myFunction} />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>

          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/olanetsoft"
                className="icon fa-twitter"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Twitter"
              > </a>
            </li>
            <li>
              <a
                href="https://github.com/olanetsoft"
                className="icon fa-github"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Github"
              ></a>
            </li>
            <li>
              <a href="https://medium.com/@olanetsoft"
                className="icon fa-medium"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Medium">
              </a>
            </li>
            <li>
              <a href="https://facebook.com/olubisiidris"
                className="icon fa-facebook"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Facebook">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/olanetsoft"
                className="icon fa-instagram"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Instagram">
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olubisi-idris-ayinde-05727b17a/"
                className="icon fa-linkedin"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
              </a>
            </li>

          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
