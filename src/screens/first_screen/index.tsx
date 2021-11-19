import React from 'react'

import gnom from '../../images/gnom.png'
import gnom_mobile from '../../images/gnom_mobile.png'

import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import * as styles from './styles.module.scss'
import { Link } from 'gatsby'

const FirstScreen = (): JSX.Element => {
  const breakpoints = useBreakpoint()

  const play = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 5.37258 5.37258 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76515 24 8.8174 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM10.4182 17.2691L16.9636 12.9055C17.2652 12.7028 17.4461 12.3633 17.4461 12C17.4461 11.6367 17.2652 11.2972 16.9636 11.0945L10.4182 6.73091C10.0839 6.51079 9.656 6.49136 9.30319 6.68028C8.95038 6.86921 8.72934 7.23616 8.72727 7.63636V16.3636C8.72934 16.7638 8.95038 17.1308 9.30319 17.3197C9.656 17.5086 10.0839 17.4892 10.4182 17.2691Z"
        fill="white"
      />
    </svg>
  )

  return (
    <div className={styles.first__screen}>
      <div className={styles.first__screen__container}>
        <h2 className={styles.first__screen__title}>
          WELCOME TO
          <br />
          DARK METAVERSE
        </h2>
        <span className={styles.first__screen__subtitle}>
          The truth is out there…
        </span>
        <Link
          to="https://www.youtube.com/watch?v=bwUlP_Oeq94&ab_channel=UFOGamingOfficial"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.first__screen__watch}>
          {play}Watch video
        </Link>
        <img
          className={styles.first__screen__hero}
          src={breakpoints.md ? gnom_mobile : gnom}
        />
      </div>
    </div>
  )
}

export default FirstScreen
