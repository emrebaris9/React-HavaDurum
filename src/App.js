import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "2ef954e167688e721e09acde086adf5f"; // Fetch etmek için gereken api kodu

class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        main: undefined,
        error: undefined
    }
    getWeather = async (e) => {                      // async/await ile kodun senkronize olmasını sağlayalım
        e.preventDefault();
        const city = e.target.elements.city.value; // formdaki city değerini aldık
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},TR&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();     // gelen veriyi hson formatına dönüştürelim
        console.log(data);
        if (city) {
            this.setState({
                temperature: data.main.temp,                  // ısı verisinin adresi
                city: data.name,                             // şehrin adresi
                humidity: data.main.humidity,               // nemin adresi
                main: data.weather[0].main,               // burda obje dönüyor o yüzden 0. dzindeki main seçtik
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,                  // boş bırakıldıysa hatası
                city: undefined,
                humidity: undefined,
                main: undefined,
                error: "Lütfen bir değer giriniz."
            });
        }
    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="title-container">
                                    <Titles />
                                    <div className="col-xs-6 form-container">
                                        <Form getWeather={this.getWeather} />
                                        <Weather
                                            temperature={this.state.temperature}
                                            humidity={this.state.humidity}
                                            city={this.state.city}
                                            country={this.state.country}
                                            main={this.state.main}
                                            error={this.state.error}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
