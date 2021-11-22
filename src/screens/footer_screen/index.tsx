import clsx from 'clsx'
import { Link } from 'gatsby'
import React, { ChangeEvent, ReactEventHandler, useState } from 'react'
import Social from '../../components/social'
import config from '../../utils/config'
import {
  discord,
  facebook,
  instagram,
  intel,
  nvidia,
  riot,
  telegram,
  twitter,
  youtube,
  youtube_2,
} from '../../utils/icons'

import * as styles from './styles.module.scss'

const FooterScreen = (): JSX.Element => {
  const plane = (
    <svg
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.499175 0.500825L0.499175 8.21022L12.2111 11L0.499175 13.7911L0.500074 21.5001L26 11L0.499175 0.500825Z"
        fill="#0EDFF7"
      />
    </svg>
  )

  const [input, setInput] = useState('')

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt

    setInput(value)
  }

  return (
    <div className={styles.footer__screen}>
      <div className={styles.footer__screen__container}>
        <div className={styles.footer__screen__form}>
          <h2 className={styles.footer__screen__form_heading}>Registration</h2>
          <p className={styles.footer__screen__form_info}>
            Register here to be one of the first to get access to the Super
            Galactic Beta.
          </p>
          <div className={styles.footer__screen__form_input}>
            <input
              className={styles.footer__screen__form_input_field}
              placeholder="email"
              value={input}
              onChange={handleChange}
            />
            <button className={styles.footer__screen__form_input_button}>
              {plane}
            </button>
          </div>
        </div>
        <footer className={styles.footer__screen__footer}>
          <nav className={styles.footer__screen__footer_socials}>
            <Link to={config.socials.telegram}>
              <Social>{telegram}</Social>
            </Link>
            <Link to={config.socials.discord}>
              <Social>{discord}</Social>
            </Link>
            <Link to={config.socials.instagram}>
              <Social>{instagram}</Social>
            </Link>
            <Link to={config.socials.twitter}>
              <Social>{twitter}</Social>
            </Link>
            <Link to={config.socials.youtube}>
              <Social>{youtube}</Social>
            </Link>
          </nav>
          <span className={styles.footer__screen__footer_copy}>
            UFOGaming.io © 2021, All rights reserved
          </span>
        </footer>
      </div>
    </div>
  )
}

export default FooterScreen
