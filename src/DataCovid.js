import { Container, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./Api";
import Country from "./Components/Country";
import Hightlight from "./Components/Highlight";
import moment from "moment";
import 'moment/locale/vi';

moment.locale('vi');

function DataCovid() {
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
    <Container style={{ marginTop: 20}}>
      <Typography variant="h2" component="h2" align="center">
        Số liệu COVID-19
      </Typography>
      <Typography variant="h6" component="h6" align="center">{moment().format('LLL')}</Typography >
      <Country countries = { countries } handleOnChange={ handleOnChange } value={ selectCountryId }/>
      <Hightlight report={ report }/>
    </Container>
  );
}

export default DataCovid;
