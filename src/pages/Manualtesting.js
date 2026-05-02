import React, { useState } from "react";
import './Manualtesting.css';
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
function Manualtesting(){
    const [isVisible,setIsVisible]=useState(false);
    const [isVisible2,setIsVisible2]=useState(false);
    const [isVisible3,setIsVisible3]=useState(false);
    const [isVisible4,setIsVisible4]=useState(false);
    const [isVisible5,setIsVisible5]=useState(false);
    const [isVisible6,setIsVisible6]=useState(false);
    const [score,setScore]=useState(0);
    const [answered,setAnswered]=useState(false);
    const [answered2,setAnswered2]=useState(false);
    const [answered3,setAnswered3]=useState(false);
    const [answered4,setAnswered4]=useState(false);
    const [answered5,setAnswered5]=useState(false);
    const [answered6,setAnswered6]=useState(false);
    const navigate=useNavigate();
    const handleClick=()=>{
        const correctOption=document.getElementById("1b");
        if(correctOption.checked && !answered){
            setScore(score+1);
        }
        setIsVisible(true);
        setAnswered(true);
    };
    const handleClick2=()=>{
        const correctOption2=document.getElementById("2c");
        if(correctOption2.checked && !answered2){
            setScore(score+1);
        }
        setIsVisible2(true);
        setAnswered2(true);
    };
    const handleClick3=()=>{
        const correctOption3=document.getElementById("3d");
        if(correctOption3.checked && !answered3){
            setScore(score+1);
        }
        setIsVisible3(true);
        setAnswered3(true);
    };
    const handleClick4=()=>{
        const correctOption4=document.getElementById("4d");
        if(correctOption4.checked && !answered4){
            setScore(score+1);
        }
        setIsVisible4(true);
        setAnswered4(true);
    };
    const handleClick5=()=>{
        const correctOption5=document.getElementById("5b");
        if(correctOption5.checked && !answered5){
            setScore(score+1);
        }
        setIsVisible5(true);
        setAnswered5(true);
    };
    const handleClick6=()=>{
        const correctOption6=document.getElementById("6c");
        if(correctOption6.checked && !answered6){
            setScore(score+1);
        }
        setIsVisible6(true);
        setAnswered6(true);
    };
    const navigate_career_suggestion=()=>{
        if(score>3){
            navigate('/careersuggestions',{
                state:{
                    score:score,
                    total:6,
                    subject: "Manual Testing"
                }
            });
        }
        else{
            alert("Your score is too low for career suggestions. Please try again!");
        }
    };
    return(
    <div>
    <h2 style={{color: "white", textAlign:"center"}}>Manual Testing Quizz!</h2>
    <h3>1. What is the primary goal of manual testing?</h3>
    <div className="options">
    <input type="radio" id="1a" className="incorrect" name="q1" style={{marginLeft:"400px",height: "1em"}}/>
    <label htmlFor="1a">A. To test the software using automated scripts</label>
    <br/>
    <input type="radio" id="1b" className="correct" name="q1" style={{marginLeft:"400px",height: "1em"}}/>
    <label htmlFor="1b">B. To detect bugs and errors manually</label>
    <br/>
    <input type="radio" id="1c" className="incorrect" name="q1" style={{marginLeft:"400px",height: "1em"}}/>
    <label htmlFor="1c">C. To create test scripts</label>
    <br/>
    <input type="radio" id="1d" className="incorrect" name="q1" style={{marginLeft:"400px",height: "1em"}}/>
    <label htmlFor="1d">D. To develop new features</label>
    <br/>
    <button id="ansbtn" onClick={handleClick}>Answer</button>
    </div>
    {isVisible && 
        <p>B. To detect bugs and errors manually <br/> <b id="heading">Explanation:</b>Manual testing is performed by testers without using automation tools to identify defects in the software.</p>
    }

    <h3>2. System testing is a</h3>
    <div className="options">
    <input type="radio" id="2a" class="incorrect" name="q2" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="2a">A. Grey box testing</label>
    <br/>
    <input type="radio" id="2b" class="incorrect" name="q2" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="2b">B. White box testing</label>
    <br/>
    <input type="radio" id="2c" className="correct" name="q2" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="2c">C. Black box testing</label>
    <br/>
    <input type="radio" id="2d" className="incorrect" name="q2" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="2d">D. Both b&c</label>
    <br/>
    <button id="ansbtn" onClick={handleClick2}>Answer</button>
    </div>
    {isVisible2 && 
        <p>C. Black box testing <br/> <b id="heading">Explanation:</b>It focuses on validating the system's functionality without knowledge of its internal code or implementation.</p>
    }

    <h3>3. Select the best time when regression testing should be done?</h3>
    <div className="options">
    <input type="radio" id="3a" className="incorrect" name="q3" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="3a">A. As frequent as possible</label>
    <br/>
    <input type="radio" id="3b" className="incorrect" name="q3" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="3b">B. When the environment has been modified.</label>
    <br/>
    <input type="radio" id="3c" className="incorrect" name="q3" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="3c">C. After the software has been modified</label>
    <br/>
    <input type="radio" id="3d" className="correct" name="q3" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="3d">D. Both b&c</label>
    <br/>
    <button id="ansbtn" onClick={handleClick3}>Answer</button>
    </div>
    {isVisible3 && 
        <p>D. Both b&c</p>
    }

    <h3>4. Test cases are designed during which of the following stages?</h3>
    <div className="options">
    <input type="radio" id="4a" className="incorrect" name="q4" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="4a">A. Test recording</label>
    <br/>
    <input type="radio" id="4b" className="incorrect" name="q4" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="4b">B. Test configuration</label>
    <br/>
    <input type="radio" id="4c" className="incorrect" name="q4" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="4c">C. Test planning</label>
    <br/>
    <input type="radio" id="4d" className="correct" name="q4" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="4d">D. Test specification</label>
    <br/>
    <button id="ansbtn" onClick={handleClick4}>Answer</button>
    </div>
    {isVisible4 && 
        <p>D. Test specification</p>
    }

    <h3>5. Unit testing is done by:</h3>
    <div className="options">
    <input type="radio" id="5a" className="incorrect" name="q5" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="5a" >A. Users</label>
    <br/>
    <input type="radio" id="5b" className="correct" name="q5" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="5b">B. Developers</label>
    <br/>
    <input type="radio" id="5c" className="incorrect" name="q5" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="5c">C. Customers</label>
    <br/>
    <input type="radio" id="5d" className="incorrect" name="q5" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="5d">D. None of the mentioned</label>
    <br/>
    <button id="ansbtn" onClick={handleClick5}>Answer</button>
    </div>
    {isVisible5 && 
        <p>B. Developers</p>
    }

    <h3>6. What is the purpose of Regression Testing?</h3>
    <div className="options">
    <input type="radio" id="6a" className="incorrect" name="q6" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="6a">A. To test a new feature in the software</label>
    <br/>
    <input type="radio" id="6b" className="incorrect" name="q6" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="6b">B. To test the overall system performance</label>
    <br/>
    <input type="radio" id="6c" className="correct" name="q6" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="6c">C. To ensure existing functionality is not affected by changes</label>
    <br/>
    <input type="radio" id="6d" className="incorrect" name="q6" style={{marginLeft:"400px",height: "1em"}}/>
    <label for="6d">D. To test the user interface design</label>
    <br/>
    <button id="ansbtn" onClick={handleClick6}>Answer</button>
    </div>
    {isVisible6 && 
        <p>C. To ensure existing functionality is not affected by changes</p>
    }

    <h2 style={{textAlign: "center"}}>Your Score:{score}</h2>
    <p>Want career Suggestion?🤔 
        <button onClick={navigate_career_suggestion}>Click me</button>
    </p>
    </div>
    );
}
export default Manualtesting;