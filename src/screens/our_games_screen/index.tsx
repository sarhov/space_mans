import React from 'react'
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import logo_galaxy from '../../images/logo_galaxy.png'
import slide from '../../images/slide.png'

import * as styles from './styles.module.scss'

import 'swiper/css'

const OurGamesScreen = (): JSX.Element => {
  return (
    <div className={styles.our_games__screen}>
      <div className={styles.our_games__screen__container}>
        <div className={styles.our_games__screen_header}>
          <h2>OUR GAMES</h2>
        </div>
        <img src={logo_galaxy} />
        <Swiper
          pagination={{
            el: '.pagination',
            clickable: true,
            bulletClass: styles.our_games__screen_slider_bullet,
            bulletActiveClass: styles.our_games__screen_slider_bullet_active,
          }}
          className={styles.our_games__screen_slider}
          slidesPerView={1}
          modules={[Pagination]}>
          <SwiperSlide>
            <img src={slide} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide} />
          </SwiperSlide>
        </Swiper>
        <div className="pagination" />
      </div>
    </div>
  )
}

export default OurGamesScreen
