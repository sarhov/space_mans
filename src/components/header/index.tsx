import { Link } from 'gatsby'
import React from 'react'
import config from '../../utils/config'
import { instagram, logo, vk, youtube } from '../../utils/icons'
import Social from '../social'

import * as styles from './styles.module.scss'

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {logo}
        <menu className={styles.header__menu}>
          <a className={styles.header__menu_item} href="#">
            ECOSYSTEM
          </a>
          <a className={styles.header__menu_item} href="#">
            METAVERSE
          </a>
          <a className={styles.header__menu_item} href="#">
            SUPER GALACTIC
          </a>
          <a className={styles.header__menu_item} href="#">
            LINKS
          </a>
          <a className={styles.header__menu_item} href="#">
            STAKING
          </a>
          <a className={styles.header__menu_item} href="#">
            ABOUT US
          </a>
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
