import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{

    
    const contact = async (name,email,message) =>{
        console.log('going to fetch')
        const response = await fetch(`https://myportfolio-beta-eosin.vercel.app/contactme`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body : JSON.stringify({name : name,email : email,message : message})
        });
        const data = await response.json(); 
        console.log(data)
    }
    

    return(
        <NoteContext.Provider value={{contact}}>
                {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState