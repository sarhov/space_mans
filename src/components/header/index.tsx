import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
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
import clsx from 'clsx'

const Header = (): JSX.Element => {
  const [show, setShow] = useState(false)
  const [showLinks, setShowLinks] = useState(false)

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

  useEffect(() => {
    document.documentElement.style.overflow = show ? 'hidden' : 'auto'

    return () => {
      document.documentElement.style.overflow = 'auto'
    }
  }, [show])

  const clickLink = () => {
    setShow(false)
    setShowLinks(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>{logo}</div>
        <menu
          className={clsx({
            [styles.header__menu]: true,
            [styles.header__menu_open]: show,
          })}>
          <div className={styles.header__menu_items}>
            <Link
              onClick={clickLink}
              className={styles.header__menu_item}
              to="#">
              <span className={styles.header__menu_item_container}>
                ECOSYSTEM
              </span>
            </Link>
            <Link
              onClick={clickLink}
              className={styles.header__menu_item}
              to="#">
              <span className={styles.header__menu_item_container}>
                METAVERSE
              </span>
            </Link>
            <Link
              onClick={clickLink}
              className={styles.header__menu_item}
              to="#">
              <span className={styles.header__menu_item_container}>
                SUPER GALACTIC
              </span>
            </Link>
            <div className={styles.header__menu_item}>
              <span
                className={styles.header__menu_item_container}
                onClick={() => setShowLinks((preShow) => !preShow)}>
                LINKS
                <span className={styles.header__menu_item_arrow}>{arrow}</span>
              </span>
              <div
                className={clsx({
                  [styles.header__menu_item__menu]: true,
                  [styles.header__menu_item__menu_show]: showLinks,
                })}>
                <div className={styles.header__menu_item__menu_container}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.header__menu_item__menu_container_item}
                    to="https://etherscan.io/token/0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b">
                    <div
                      className={
                        styles.header__menu_item__menu_container_item_image
                      }>
                      <img src={Etherscan} alt="Etherscan" />
                    </div>
                    Etherscan
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.header__menu_item__menu_container_item}
                    to="https://www.dextools.io/app/uniswap/pair-explorer/0x97e1fcb93ae7267dbafad23f7b9afaa08264cfd8">
                    <div
                      className={
                        styles.header__menu_item__menu_container_item_image
                      }>
                      <img src={Dex_Tools} alt="Dex_Tools" />
                    </div>
                    Dex Tools
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.header__menu_item__menu_container_item}
                    to="https://blockfolio.com/coin/UFO_2">
                    <div
                      className={
                        styles.header__menu_item__menu_container_item_image
                      }>
                      <img src={FTX} alt="FTX" />
                    </div>
                    FTX
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.header__menu_item__menu_container_item}
                    to="https://app.uniswap.org/#/swap?outputCurrency=0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b&use=V2">
                    <div
                      className={
                        styles.header__menu_item__menu_container_item_image
                      }>
                      <img src={Uniswap} alt="Uniswap" />
                    </div>
                    Uniswap
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.header__menu_item__menu_container_item}
                    to="https://coinmarketcap.com/currencies/ufo-gaming/">
                    <div
                      className={
                        styles.header__menu_item__menu_container_item_image
                      }>
                      <img src={Coin_Market_Cap} alt="Coin_Market_Cap" />
                    </div>
                    Coin Market Cap
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.header__menu_item__menu_container_item}
                    to="https://www.coingecko.com/en/coins/ufo-gaming">
                    <div
                      className={
                        styles.header__menu_item__menu_container_item_image
                      }>
                      <img src={Coin_Gecko} alt="Coin_Gecko" />
                    </div>
                    Coin Gecko
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.header__menu_item__menu_container_item}
                    to="https://shibaswap.com/#/add/ETH/0x249e38Ea4102D0cf8264d3701f1a0E39C4f2DC3B">
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
            </div>
            <Link
              onClick={clickLink}
              className={styles.header__menu_item}
              to="#">
              <span className={styles.header__menu_item_container}>
                STAKING
              </span>
            </Link>
            <Link
              onClick={clickLink}
              className={styles.header__menu_item}
              to="#">
              <span className={styles.header__menu_item_container}>
                ABOUT US
              </span>
            </Link>
          </div>
        </menu>
        <div
          className={clsx({
            [styles.header__burger]: true,
            [styles.header__burger_open]: show,
          })}
          onClick={() => setShow((preShow) => !preShow)}>
          <div className={styles.header__burger_bar1} />
          <div className={styles.header__burger_bar2} />
          <div className={styles.header__burger_bar3} />
        </div>
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
