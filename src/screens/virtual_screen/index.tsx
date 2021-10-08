import clsx from 'clsx'
import React from 'react'

import * as styles from './styles.module.scss'

const VirtualScreen = (): JSX.Element => {
  return (
    <div className={styles.virtual__screen}>
      <div className={styles.virtual__screen__container}>
        <div className={styles.virtual__screen_content}>
          <h2 className={clsx(styles.virtual__screen_heading, styles.green)}>
            Virtual <span>land</span>
          </h2>
          <p className={styles.virtual__screen_info}>
            Each game will have its own governing planet. We will run virtual
            land auctions, where people can purchase their own piece of that
            planet and earn revenue from the game by completing specific tasks.
            <br />
            <br />
            In the future, these pieces of land can be used to build
            infrastructure for that planet, such as virtual NFT stores,
            collection galleries, weapon stores, and buy/sell NFTs from the
            game.
          </p>
        </div>
      </div>
    </div>
  )
}

export default VirtualScreen
