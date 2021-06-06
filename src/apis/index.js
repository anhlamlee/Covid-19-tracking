import axios from "axios";

export const GetCountries = () =>
  axios.get("https://api.covid19api.com/countries");

export const GetReportByCountry = (country) =>
  axios.get(`https://api.covid19api.com/dayone/country/${country}`);

export const GetMapDataByCountryId = (countryId) =>
  import(
    `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
  );
