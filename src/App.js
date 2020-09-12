import React, {useEffect, useState} from 'react';
import {MenuItem, FormControl, Select} from "@material-ui/core"
import './App.css';

function App() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country, // NIGERIA
                        value: country.countryInfo.iso2 // NG
                    }))

                    setCountries(countries)
                })
        }

        getCountriesData()
    }, [])

  return (
    <div className="app">
        <div className="app__header">
            <h1>Building a Covid 19 tracker</h1>

            <FormControl className="app__dropdown">
                <Select variant="outlined" value="abc">
                    {countries.map((country) =>(
                        <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))}

                    {/*<MenuItem value="worldwide">WorldWide</MenuItem>*/}
                    {/*<MenuItem value="local">Local</MenuItem>*/}
                </Select>
            </FormControl>
        </div>
    </div>
  );
}

export default App;
