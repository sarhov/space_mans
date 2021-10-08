import React from 'react'
import Header from '../components/header'
import AdvantageScreen from '../screens/advantage_screen'

import FirstScreen from '../screens/first_screen'
import InfoScreen from '../screens/info_screen'
import OurGamesScreen from '../screens/our_games_screen'
import SpaceBackground from '../screens/space_background'
import VirtualScreen from '../screens/virtual_screen'

import '../styles/__app.scss'

const IndexPage = () => {
  return (
    <>
      <Header />
      <FirstScreen />
      <InfoScreen />
      <VirtualScreen />
      <SpaceBackground>
        <OurGamesScreen />
        <AdvantageScreen />
      </SpaceBackground>
    </>
  )
}

export default IndexPage
