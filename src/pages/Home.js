import React from "react";
import manualtestingimg from '../images/manual testing.jfif';
import automationimg from '../images/automation testing.jfif';
import healthimg from '../images/health.jfif';
import techimg from '../images/tech.jfif';
import './Home.css';
import { Link } from "react-router-dom";
function Home(){
    const title={
        color: "white", marginLeft: "70px", marginTop: "60px"
      }
    return(
        <div className='App'>
      {/* <button id="login">Login</button>
      <button id="signup">Sign up</button> */}
      <h3 className="heading" style={title}>Enter your skills or interests, take a quick assessment, and discover matching careers with job details, salary, and growth trends.</h3>
      <div id="search">
        <input type="text" placeholder="type to search.." list="suggestions"/>
        <button type="submit">Submit</button> 
      </div>
         
      <datalist id="suggestions">
        {/* <option value="C"></option>
        <option value="C++"></option>
        <option value="Java"></option>
        <option value="Python"></option>
        <option value="Non-Tech"></option>  */}
        <option value="Manual Testing"></option>
        <option value="Automation Testing"></option>
        <option value="Health care"></option>
        <option value="Coding Tech"></option>
        <option value="Bussiness"></option>
        <option value="Dance"></option>
        <option value="Bikes"></option>
        <option value="Cars"></option>
        <option value="Movies"></option>
      </datalist>
      <br/>
      <br/>

      <div class="card-container">
        <div class="card">
            <img src={manualtestingimg}/>
            <div class="content">
                <h2 class="card-title" style={{color: "white"}}>Manual Testing</h2>
                <p class="card-description" style={{color: "white"}}>The process of manually verifying software applications for defects by executing test cases without using automation tools.</p>
            </div>
            <Link to="/Manualtesting"><button style={{marginLeft: "70px"}}>Click me for exam</button></Link>
        </div>

        <div class="card">
            <img src={automationimg}/>
            <div class="content">
                <h2 class="card-title" style={{color: "white", marginLeft: "20px"}}>Automation Testing</h2>
                <p class="card-description" style={{color: "white"}}>It involves using automated tools and scripts to test software applications, increasing efficiency and accuracy by running repetitive tests without human intervention</p>
            </div>
            <a href=""><button style={{marginLeft: "70px"}}>Click me for exam</button></a>
        </div>
    
        <div class="card">
            <img src={healthimg}/>
            <div class="content">
                <h2 class="card-title" style={{color: "white"}}>Health Care</h2>
                <p class="card-description" style={{color: "white"}}>The field focused on maintaining and improving physical and mental health through medical services, research, and technologies.</p>
            </div>
            <a href=""><button style={{marginLeft: "70px"}}>Click me for exam</button></a>
        </div>
    
        <div class="card">
            <img src={techimg}/>
            <div class="content">
                <h2 class="card-title" style={{color: "white"}}>Coding tech</h2>
                <p class="card-description" style={{color: "white"}}>The industry involving the development of software, programming languages, and technological solutions to solve problems.</p>
            </div>
            <a href=""><button style={{marginLeft: "70px"}}>Click me for exam</button></a>
        </div>
    
        {/* <!-- <div class="card">
            <img src="./images/business.jfif">
            <div class="content">
                <h2 class="card-title" style="color: white;">Bussiness</h2>
                <p class="card-description" style="color: white;">The activities related to buying, selling, and managing products or services to create value and profit.</p>
            </div>
            <a href=""><button style="margin-left: 60px;">Click me for exam</button></a>
        </div> -->
    
        <!-- <div class="card">
            <img src="./images/dance.jfif">
            <div class="content">
                <h2 class="card-title" style="color: white;">Dance</h2>
                <p class="card-description" style="color: white;">An art form involving rhythmic movement of the body, often accompanied by music, for expression, performance, or entertainment.</p>
            </div>
        </div> -->
    
        <!-- <div class="card">
            <img src="./images/bikes.jfif">
            <div class="content">
                <h2 class="card-title" style="color: white;">Bikes</h2>
                <p class="card-description" style="color: white;">Vehicles powered by pedals or motors, commonly used for transportation, recreation, and sport.</p>
            </div>
        </div> -->
    
        <!-- <div class="card">
            <img src="./images/cars.jfif">
            <div class="content">
                <h2 class="card-title" style="color: white;">Cars</h2>
                <p class="card-description" style="color: white;">Motorized vehicles designed for road transportation, often used for personal or commercial purposes.</p>
            </div>
        </div>
    
        <div class="card">
            <img src="./images/movie.jfif">
            <div class="content">
                <h2 class="card-title" style="color: white;">Movies</h2>
                <p class="card-description" style="color: white;">A form of visual storytelling using moving images and sound to entertain, inform, or inspire audiences.</p>
            </div>
        </div>
    </div> --> */}

    <button id="reflinks">Reference books and Website links</button>
    <button>Navigate to exam</button>

      </div> 
    </div>
    );
}
export default Home;