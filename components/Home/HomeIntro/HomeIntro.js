import React from "react";

import { useState } from "react";

import Link from "next/link";

function HomeIntro({characters,episodes,locations}) {

  return (
    <>
      {/* <ul>
        {Object.keys(categorias).map(function(key,index){<li>{categorias[key][0]}</li>})}
      </ul> */}

      <div>
        <h1>Bienvenido al test de la API de:</h1>
        <h2>Rick & Morty</h2>
      </div>
      <div>
    <span>Ir a  personajes{characters}</span>
      </div>
      <div>
    <span>Ir a las locaciones{episodes}</span>
      </div>
      <div>
    <span>Ir a los episodios{locations}</span>
      </div>
    </>
  );
}

export default HomeIntro;
