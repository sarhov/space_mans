import React from 'react'

import clsx from 'clsx'

import ufo from '../../images/ufo.png'
import robots from '../../images/robots.png'

import * as styles from './styles.module.scss'

const InfoScreen = (): JSX.Element => {
  return (
    <div className={styles.info__screen}>
      <div className={styles.info__screen__container}>
        <div className={styles.info__screen__block}>
          <img width={635} src={ufo} />
          <div className={styles.info__screen__block_content}>
            <h2
              className={clsx(
                styles.info__screen__block_heading,
                styles.green,
              )}>
              A <span>P2E</span> Metaverse
            </h2>
            <p className={styles.info__screen__block_info}>
              Play-to-earn games are the new gaming model taking the world by
              storm.
              <br />
              UFO Gaming will be the cornerpiece.
              <br />
              <br />
              One planet, one game. An ever-growing ecosystem of play to earn
              games.
            </p>
          </div>
        </div>
        <div className={styles.info__screen__block}>
          <img width={628} src={robots} />
          <div className={styles.info__screen__block_content}>
            <h2
              className={clsx(
                styles.info__screen__block_heading,
                styles.purple,
              )}>
              Gaming x <span>Blockchain</span>
            </h2>
            <p className={styles.info__screen__block_info}>
              Collaboration with traditional gaming companies to integrate
              <br />
              them into the blockchain and bring in new features
              <br />
              that exist in blockchain gaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoScreen
