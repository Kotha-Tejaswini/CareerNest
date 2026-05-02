// import React,{useState,useEffect} from "react";
// import axios from 'axios';
// import { useLocation } from "react-router-dom";
// function Careersuggestions(){
//     const location = useLocation();
//     const { score, total, subject } = location.state || {};
//     const [suggestions,setSuggestions]=useState("");
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         console.log("Location state:", location.state);
//         if (score !== undefined && total !== undefined && subject) {
//             console.log({ score, total, subject });
//             axios.post("http://localhost:3001/api/analyze-quiz/careersuggestions", {
//                 answers: { score, total, subject }
//             })
//                 .then((response) => {
//                     setSuggestions(response.data.suggestions);
//                     setLoading(false);
//                 })
//                 .catch((err) => {
//                     console.error(err);
//                     setError("Failed to fetch career suggestions.");
//                     setLoading(false);
//                 });
//         } else {
//             setError("Missing quiz data. Please complete the quiz first.");
//             setLoading(false);
//         }
//     }, [location.state, score, total, subject]);    
//     if (loading) 
//     {
//         return <p>Loading suggestions...</p>;
//     }
//     if (error){
//         return <p style={{ color: "red" }}>{error}</p>;
//     } 
//     return(
//         <div>
//             <h2>Suggestions for you!!</h2>
//             <pre style={{whiteSpace:"pre-wrap"}}>{suggestions}</pre>
//         </div>
//     )   
// }
// export default Careersuggestions;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";

function Careersuggestions() {
    const location = useLocation();
    const { score, total, subject } = location.state || {};

    const [suggestions, setSuggestions] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (score !== undefined && total !== undefined && subject) {
            axios.post("http://localhost:3001/api/analyze-quiz/careersuggestions", {
                answers: { score, total, subject }
            })
            .then((response) => {
                setSuggestions(response.data.suggestions);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API Error:", err);
                setError("Failed to fetch career suggestions.");
                setLoading(false);
            });
        } else {
            setError("Missing quiz data. Please complete the quiz first.");
            setLoading(false);
        }
    }, [location.state, score, total, subject]);

    if (loading) return <p>Loading suggestions...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Suggestions for you!</h2>
            <pre style={{ whiteSpace: "pre-wrap" }}>{suggestions}</pre>
        </div>
    );
}

export default Careersuggestions;


