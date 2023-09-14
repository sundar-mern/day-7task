//a Get all the countries from Asia continent /region using Filter function

fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    const asiaCountries = data.filter((country) => country.region === 'Asia');

    // Print the list of Asia countries
    console.log('Countries in Asia:');
    asiaCountries.forEach((country) => {
      console.log(country.name.common);
      console.log("===================")
    });
  })
  
  
  
//b Get all the countries with a population of less than 2 lakhs using Filter function

fetch('https://restcountries.com/v3.1/all')
.then((response) => response.json())
.then((data) => {

  const countriesWithLowPopulation = data.filter((country) => country.population < 200000);

  console.log('Countries with a population of less than 2 lakhs:');
  countriesWithLowPopulation.forEach((country) => {
    console.log(country.name.common);
    console.log("===================")
  })
});

//c Print the following details name, capital, flag using forEach function

fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log('Country Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.png);
      console.log("===================")
    })
  });
  
//d Print the total population of countries using reduce function

fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
   
    const totalPopulation = data.reduce((accumulator, country) => {
      return accumulator + country.population;
    }, 0);

    console.log('Total Population of All Countries:', totalPopulation);
    console.log("===================")
  });
  
  //e Print the country which uses US Dollars as currency.

// Fetch the data from the API
fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    // Use the find function to search for a country with USD as its currency
    const countryWithUSD = find((country) => {
      return (country.currencies).includes('USD');
    });

    // Print the country with USD as its currency or a message if none is found
    if (countryWithUSD) {
      console.log('Country using US Dollars as currency:', countryWithUSD.name.common);
    }
  });
  



