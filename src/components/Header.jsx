import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'

const Hearder = () => {
  return (
    <div className='header'>
      <img src={logoSpotify} alt="Logo Spotify" />

      <a className='header__link' href="/">
      <h1>Spotify</h1>
      </a>
    </div>
  )
}

export default Hearder