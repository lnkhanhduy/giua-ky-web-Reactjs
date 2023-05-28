import React from 'react';
import {FormControl, FormHelperText, InputLabel, NativeSelect, Container} from '@material-ui/core'

function Country({value, handleOnChange, countries}) {
    return (
        <Container style={{ padding: 20}}>
            <FormControl>
                <InputLabel htmlFor="" shrink >Quốc gia</InputLabel>
                <NativeSelect
                    value = { value }
                    onChange = { handleOnChange }
                    inputProps={{
                        name: 'country',
                        id: 'country-select'
                    }}>
                        {
                            countries.map((country) => {
                                return <option value={country.ISO2.toLowerCase()}>{ country.Country }</option>
                            })
                        }            
                </NativeSelect>
                <FormHelperText>Lựa chọn quốc gia</FormHelperText>
            </FormControl>
        </Container>
    );
  }
  
  export default Country;
  