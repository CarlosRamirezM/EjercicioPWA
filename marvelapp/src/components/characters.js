import React, { useEffect, useState } from "react";
import Character from "./character";

function Characters() {

    const ts = 1
    const publicKey = "cc2b93e9c6a16980bc4a58e6ce395c45";
    const keyHash = "c77f8087f184c1971edc76657c32bb1b";
    const apiUrl = "https://gateway.marvel.com:443/v1/public/characters";
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if(!navigator.onLine){
            if(localStorage.getItem("characters") === null) {
                setCharacters("You are currenly offline, please try again later.")
            } else {
                setCharacters(JSON.parse(localStorage.getItem("characters")));
            }
        } else {
            fetch(apiUrl +'?'+new URLSearchParams({
                ts: ts,
                apikey: publicKey,
                hash: keyHash,
                limit: 24     
            })).then((result) => result.json()).then( (a) => {
                setCharacters(a.data.results);
                localStorage.setItem("characters", JSON.stringtify(a.data.results));
            });
        }
    }, [])


    
    return (
    <>
     <h1>Characters: </h1>
        <div className="row">
            {characters.map(c => (<Character key={c.id} name={c.name} description={c.description} image={c.thumbnail.path+'/portrait_small.'+c.thumbnail.extension}/>))}
        </div>
    </>
    );
}

export default Characters;