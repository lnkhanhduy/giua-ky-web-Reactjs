import { Container, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./Api";
import Country from "./Components/Country";
import Summary from "./Components/Summary"
import moment from "moment";
import 'moment/locale/vi';

moment.locale('vi');

function Charts() {
  const [countries, setCountries] = useState([]);
  const [selectCountryId, setSelectCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then(res => {setCountries(res.data);

    setSelectCountryId('vn');
  });
  }, []);

  const handleOnChange = (e) => {
    setSelectCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectCountryId) {
      const { Slug } = countries.find((country) => country.ISO2.toLowerCase() === selectCountryId);

      //call api
      getReportByCountry(Slug).then((res) => {
        setReport(res.data)
    });}
  }, [countries, selectCountryId]);


  return (
    <Container style={{ marginTop: 10}}>
      <Typography variant="h3" component="h3" align="center">
        Biểu đồ COVID-19
      </Typography>
      <Typography variant="h6" component="h6" align="center">{moment().format('LLL')}</Typography >
      <Country countries = { countries } handleOnChange={ handleOnChange } value={ selectCountryId }/>
      <Summary report={ report }/>
    </Container>
  );
}

export default Charts;
