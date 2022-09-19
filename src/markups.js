const countriesListElem = document.querySelector('.country-list');
const countryInfoElem = document.querySelector('.country-info');

function resetMarkup(a, b) {
  a.innerHTML = '';
  b.innerHTML = '';
}

function makeMarkupList(countries) {
  const countriesList = countries.map(country => {
    return `<li class="country-list__item">
        <img src=${country.flags.png} width="50" alt="flag">
        <span class="country-list__name">${country.name.official}</span>
        </li>`;
  });
  countriesList.forEach(markupCountry => {
    countriesListElem.insertAdjacentHTML('beforeend', markupCountry);
  });
}

function makeMarkupInfo(countries) {
  const country = countries[0];
  const info = `<div class="country-info__box">
    <img src=${country.flags.png} width="50" alt="flag">
    <span class="country-info__name">${country.name.official}</span> 
   </div>
    <p class="country-text"><span class="country-info--accent">Capital:</span> ${
      country.capital
    }</p>
            <p class="country-text"><span class="country-info--accent">Population:</span> ${
              country.population
            }</p>
            <p class="country-text"><span class="country-info--accent">Languages:</span> ${Object.values(
              country.languages
        ).join(', ')}</p>`;
    
    countryInfoElem.insertAdjacentHTML('beforeend', info);
}

export {
  countriesListElem,
  countryInfoElem,
  makeMarkupInfo,
  makeMarkupList,
  resetMarkup,
};
