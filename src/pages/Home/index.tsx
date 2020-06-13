import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import axios from 'axios';
import moment from 'moment';
import numberFormat from '../../utils/numberFormat';

import {
  Container,
  CardContainer,
  Card,
  Footer,
  InputContainer,
  Credits,
} from './styles';

interface CountryResponse {
  country: string;
}

interface CountryDataResponse {
  cases: number;
  todayCases: number;
  deaths: number;
  country: string;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  totalTests: number;
  testsPerOneMillion: number;
}

const Home: React.FC = () => {
  const [updatedDate, setUpdatedDate] = useState('');

  const [countries, setCountries] = useState<string[]>([]);
  const [countriesData, setcountriesData] = useState<CountryDataResponse>(
    {} as CountryDataResponse,
  );

  const [selectedCountry, setSelectedCountry] = useState('0');

  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then(response => {
      const updated = response.data.Date;

      const formattedDate = moment(updated).format('LLLL');

      setUpdatedDate(formattedDate);
    });
  });

  useEffect(() => {
    axios
      .get<CountryResponse[]>(
        'https://coronavirus-19-api.herokuapp.com/countries',
      )
      .then(response => {
        const countriesName = response.data.map(country => country.country);

        setCountries(countriesName);
      });
  }, []);

  // Countries selected
  useEffect(() => {
    axios
      .get<CountryDataResponse>(
        `https://coronavirus-19-api.herokuapp.com/countries/${selectedCountry}`,
      )
      .then(response => {
        const countriesResponse = response.data;

        setcountriesData(countriesResponse);
      });
  }, [selectedCountry]);

  const handleSelectedCountry = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const country = event.target.value;
      setSelectedCountry(country);
    },
    [],
  );

  return (
    <Container>
      <header>
        <img
          src="https://images.vexels.com/media/users/3/193073/isolated/preview/797b0d45317985fb24e04cd5e323081c-covid-19-2019-ncov-acidente-vascular-cerebral---cone-by-vexels.png"
          alt="covid"
        />
        <h1>Coronavirus Data</h1>
      </header>
      <InputContainer>
        <select
          name="country"
          id="country"
          value={selectedCountry}
          onChange={handleSelectedCountry}
        >
          <option value="0">Select one country</option>
          {countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </InputContainer>

      <CardContainer>
        <Card>
          <h1>Cases</h1>
          <span>
            {countriesData.cases
              ? numberFormat(countriesData.cases)
              : 'Select a country'}
          </span>
        </Card>
        <Card type="recovered">
          <h1>Recovered</h1>
          <span>
            {countriesData.recovered
              ? numberFormat(countriesData.recovered)
              : 'Select a country'}
          </span>
        </Card>
        <Card type="deaths">
          <h1>Deaths</h1>
          <span>
            {countriesData.deaths
              ? numberFormat(countriesData.deaths)
              : 'Select a country'}
          </span>
        </Card>
      </CardContainer>
      <Footer>
        <h1>Last updated</h1>
        <h3>{updatedDate}</h3>
      </Footer>
      <Credits>
        <a target="blank" href="https://github.com/diegoveigass">
          Made by @diegoveigass
        </a>
      </Credits>
    </Container>
  );
};

export default Home;
