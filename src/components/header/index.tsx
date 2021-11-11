import { Link } from 'gatsby'
import React from 'react'
import config from '../../utils/config'
import { instagram, logo, vk, youtube } from '../../utils/icons'
import Social from '../social'
import Etherscan from '../../images/Etherscan.png'
import Dex_Tools from '../../images/Dex_Tools.png'
import FTX from '../../images/FTX.png'
import Uniswap from '../../images/Uniswap.png'
import Coin_Market_Cap from '../../images/Coin_Market_Cap.png'
import Coin_Gecko from '../../images/Coin_Gecko.png'
import Shiba_Swap from '../../images/Shiba_Swap.png'

import * as styles from './styles.module.scss'

const Header = (): JSX.Element => {
  const arrow = (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.14258 1L5.64258 6L10.1426 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {logo}
        <menu className={styles.header__menu}>
          <Link className={styles.header__menu_item} to="#">
            ECOSYSTEM
          </Link>
          <Link className={styles.header__menu_item} to="#">
            METAVERSE
          </Link>
          <Link className={styles.header__menu_item} to="#">
            SUPER GALACTIC
          </Link>
          <Link className={styles.header__menu_item} to="#">
            <span className={styles.header__menu_item_container}>
              LINKS
              <span className={styles.header__menu_item_arrow}>{arrow}</span>
            </span>
            <div className={styles.header__menu_item__menu}>
              <div className={styles.header__menu_item__menu_container}>
                <Link
                  className={styles.header__menu_item__menu_container_item}
                  to="/">
                  <div
                    className={
                      styles.header__menu_item__menu_container_item_image
                    }>
                    <img src={Etherscan} alt="Etherscan" />
                  </div>
                  Etherscan
                </Link>
                <Link
                  className={styles.header__menu_item__menu_container_item}
                  to="/">
                  <div
                    className={
                      styles.header__menu_item__menu_container_item_image
                    }>
                    <img src={Dex_Tools} alt="Dex_Tools" />
                  </div>
                  Dex Tools
                </Link>
                <Link
                  className={styles.header__menu_item__menu_container_item}
                  to="/">
                  <div
                    className={
                      styles.header__menu_item__menu_container_item_image
                    }>
                    <img src={FTX} alt="FTX" />
                  </div>
                  FTX
                </Link>
                <Link
                  className={styles.header__menu_item__menu_container_item}
                  to="/">
                  <div
                    className={
                      styles.header__menu_item__menu_container_item_image
                    }>
                    <img src={Uniswap} alt="Uniswap" />
                  </div>
                  Uniswap
                </Link>
                <Link
                  className={styles.header__menu_item__menu_container_item}
                  to="/">
                  <div
                    className={
                      styles.header__menu_item__menu_container_item_image
                    }>
                    <img src={Coin_Market_Cap} alt="Coin_Market_Cap" />
                  </div>
                  Coin Market Cap
                </Link>
                <Link
                  className={styles.header__menu_item__menu_container_item}
                  to="/">
                  <div
                    className={
                      styles.header__menu_item__menu_container_item_image
                    }>
                    <img src={Coin_Gecko} alt="Coin_Gecko" />
                  </div>
                  Coin Gecko
                </Link>
                <Link
                  className={styles.header__menu_item__menu_container_item}
                  to="/">
                  <div
                    className={
                      styles.header__menu_item__menu_container_item_image
                    }>
                    <img src={Shiba_Swap} alt="Shiba_Swap" />
                  </div>
                  Shiba Swap
                </Link>
              </div>
            </div>
          </Link>
          <Link className={styles.header__menu_item} to="#">
            STAKING
          </Link>
          <Link className={styles.header__menu_item} to="#">
            ABOUT US
          </Link>
        </menu>
        <div className={styles.header__socials}>
          <Link
            to={config.socials.instagram}
            target="_blank"
            rel="noopener noreferrer">
            <Social>{instagram}</Social>
          </Link>
          <Link
            to={config.socials.youtube}
            target="_blank"
            rel="noopener noreferrer">
            <Social>{youtube}</Social>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
