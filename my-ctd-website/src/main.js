import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './style.css'
import './fonts.css'
import neonCat from './assets/NeonCat_Profile.jpg'
import happyLogo from './assets/Happy.jpg'
import angryLogo from './assets/Angry.jpg'
import danceLogo from './assets/Dance.gif'
import sophisticatedLogo from './assets/Sophisticated.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Fixed navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <a href="https://catbyte.dev" target="_blank">
      <img src="${neonCat}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://catbyte.dev" target="_blank">
      <img src="${happyLogo}" class="logo vanilla" alt="Happy logo" />
    </a>
    <a href="https://catbyte.dev" target="_blank">
      <img src="${angryLogo}" class="logo cherry" alt="Angryy logo" />
    </a>
    <a href="https://catbyte.dev" target="_blank">
      <img src="${danceLogo}" class="logo mint" alt="Dance logo" />
    </a>
    <a href="https://catbyte.dev" target="_blank">
      <img src="${sophisticatedLogo}" class="logo ice" alt="Sophisticated logo" />
    </a>
    <h1>Welcome to the Moodlist!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="subtle">
      Click on a mood to get a Spotify playlist
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
