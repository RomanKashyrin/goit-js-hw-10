import './css/styles.css';
import Notiflix from 'notiflix';
import API from './fetchCountries';
import {
  countriesListElem,
  countryInfoElem,
  makeMarkupInfo,
  makeMarkupList,
  resetMarkup,
} from './markups';

const DEBOUNCE_DELAY = 300;

const debounce = require('lodash.debounce');
const inputElem = document.querySelector('input#search-box');

inputElem.addEventListener(
  'input',
  debounce(e => {
    let name = inputElem.value.trim();

    if (name.length === 0) {
      resetMarkup(countryInfoElem, countriesListElem);
      return;
    }

      API.fetchCountries(name).then(data => {
          console.log(data);

          console.log(data.length);

          if (data.length === 1) {
              Notiflix.Notify.info('Found');
              console.log(data[0].name.common);
              resetMarkup(countryInfoElem, countriesListElem);
              makeMarkupInfo(data);
          } else if (data.length > 1 && data.length <= 7) {
              Notiflix.Notify.info('We found some...');
              resetMarkup(countryInfoElem, countriesListElem);
              makeMarkupList(data);
          } else {
              Notiflix.Notify.info(
                  'Too many matches found. Please enter a more specific name.'
              );
              resetMarkup(countryInfoElem, countriesListElem);
          }
      }).catch(error => {
          Notiflix.Notify.failure('Oops, there is no country with that name');
          resetMarkup(countryInfoElem, countriesListElem);
      });
  }, DEBOUNCE_DELAY)
);
