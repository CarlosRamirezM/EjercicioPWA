import React, { useEffect, useState } from "react";

function Character(props) {
  const [ name ] = useState(props.name);
  const [ description ] = useState(props.description);
  const [ image ]  = useState(props.image);
  console.log(image)

  return (
    <div className="col-2"> 
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Character;
