import 'regenerator-runtime';
import '../styles/main.css';

import switcherRegister from './utils/switcherregister';
import App from './views/app';

const nextToContent = document.querySelector('.next-to-content');
nextToContent.addEventListener('click', () => {
  document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
  nextToContent.blur();
});

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();

  switcherRegister();
});
