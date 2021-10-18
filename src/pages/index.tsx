import React from 'react'
import Header from '../components/header'
import AdvantageScreen from '../screens/advantage_screen'

import FirstScreen from '../screens/first_screen'
import FooterScreen from '../screens/footer_screen'
import InfoScreen from '../screens/info_screen'
import OurGamesScreen from '../screens/our_games_screen'
import SpaceBackground from '../screens/space_background'
import VirtualScreen from '../screens/virtual_screen'

import ReactFullpage from '@fullpage/react-fullpage'

import '../styles/__app.module.scss'

const IndexPage = () => {
  return (
    <ReactFullpage
      scrollOverflow
      scrollingSpeed={1000}
      render={() => (
        <div id="fullpage-wrapper">
          <Header />
          <div className="section">
            <FirstScreen />
          </div>
          <div className="section">
            <InfoScreen />
          </div>
          <div className="section">
            <VirtualScreen />
          </div>
          <div className="section">
            <SpaceBackground>
              <OurGamesScreen />
              <AdvantageScreen />
            </SpaceBackground>
          </div>
          <div className="section fp-auto-height">
            <FooterScreen />
          </div>
        </div>
      )}
    />
  )
}

export default IndexPage
