import React, { useEffect,useState } from 'react'

import HomeIntro from '../../components/Home/HomeIntro/HomeIntro'

function HomeContainer(props) {


  return (
    <section>
      <HomeIntro 
        characters={props.data.characters}
        locations={props.data.locations}
        episodes={props.data.episodes}
      />
    </section>
  )
}
export default HomeContainer
