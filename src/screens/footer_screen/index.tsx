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

  const SubmitForm = () =>{
    var form = document.getElementById("form");
    let formLoading = document.querySelector('#formLoading');
    let formSubmitButton = document.querySelector('#formSubmitButton');
    let formSuccessMessage = document.querySelector('#formSuccessMessage');
    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append(
            'email',
            document.querySelector('input[name="email"]').value
        )
        form.classList.add('loading');
        formLoading.style.cssText = "opacity:1; visibility: visible;"
        formSubmitButton.style.cssText = "opacity:0"
        fetch("https://getform.io/f/656ff1c4-4566-41b7-81d9-e8d69c7a9cf3",
        {
            method: "POST",
            body: formData,
        })
        .then(response => {
          form.classList.remove('loading');
          formLoading.style.cssText = "opacity:0; visibility: hidden;"
          formSubmitButton.style.cssText = "opacity:1";
          formSuccessMessage.style.display = "block";
          document.querySelector('input[name="email"]').value = ''
        })
        .catch(error => console.log(error))
        }
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
            <form id="form" className={styles.footer__screen__form_form}>
            <input
              className={styles.footer__screen__form_input_field}
              placeholder="email"
              value={input}
              onChange={handleChange}
              name="email"
              required
              pattern="[a-zA-Z0-9.-_+-]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}"
              type="email"
            />
            <button  id="formSubmitButton" className={styles.footer__screen__form_input_button} onClick={SubmitForm}>
              {plane}
            </button>
            <div id="formLoading" className={styles.footer__screen__form_loading}> 
              <div className={styles.lds__dual__ring}></div>
            </div>
            </form>
            <div id="formSuccessMessage" className={styles.success__message}>Confirmed! You’re in!</div>
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
