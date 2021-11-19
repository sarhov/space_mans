import React from 'react'

import genesis from '../../images/genesis.png'
import earn from '../../images/earn.png'
import rating from '../../images/rating.png'
import breeding from '../../images/breeding.png'
import nft from '../../images/nft.png'

import * as styles from './styles.module.scss'

const AdvantageScreen = (): JSX.Element => {
  return (
    <div className={styles.advantage__screen} id="ecosystem">
      <div className={styles.advantage__screen__container}>
        <div className={styles.advantage__screen_block}>
          <img src={genesis} alt="" />
          <h4>Genesis NFTs</h4>
          <p>
            The very first edition of NFT characters from the <br />
            game. These will hold exceptional value
            <br />
            and will be scarce.
            <br />
            <br />
            Only 10000 of these will ever be minted through the Super Galactic
            staking DAPP during our Genesis Event.
          </p>
        </div>
        <div className={styles.advantage__screen_block}>
          <img src={earn} alt="" />
          <h4>Play-To-Earn</h4>
          <p>
            Two token systems. UFO will be the
            <br />
            governance token, and UAP will serve as the
            <br />
            2nd token, which people can earn via
            <br />
            completing in-game quests, tournaments, and
            <br />
            our future PVP battle mode.
          </p>
        </div>
        <div className={styles.advantage__screen_block}>
          <img src={rating} alt="" />
          <h4>Rating System</h4>
          <p>
            Unlike traditional P2E games, Super
            <br />
            Galactic will introduce the rating system,
            <br />
            where a character/player that is more
            <br />
            active will earn a higher rating, and giving
            <br />
            them the potential to make more UAP.
          </p>
        </div>
      </div>
      <div className={styles.advantage__screen__container}>
        <div className={styles.advantage__screen_block}>
          <img src={breeding} alt="" />
          <h4>
            Breeding & Trading
            <br />
            Characters
          </h4>
          <p>
            UAP & UFO will be needed to breed
            <br />
            characters. Characters can be used to play
            <br />
            in-game or traded in our in-house NFT
            <br />
            Marketplace.
          </p>
        </div>
        <div className={styles.advantage__screen_block}>
          <img src={nft} alt="" />
          <h4>
            NFT
            <br />
            Marketplace
          </h4>
          <p>
            Super Galactic will have its own NFT
            <br />
            marketplace, where players can trade
            <br />
            characters, weapons, and other in-game
            <br />
            items with UFO.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdvantageScreen
