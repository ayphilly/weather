import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "02de402be1971c38967021dbb3376d04";

class App extends Component {

  getWeather = async (e) =>{
      e.preventDefault();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.field.city},${this.state.field.country}&appid=${API_KEY}&units=metric`
      const api_call = await fetch(url)
      const data = await api_call.json();
      if (this.state.field.city && this.state.field.country){
          console.log(data);
          this.setState({
              condition: {
                  id: data.id,
                  temperature: data.main.temp,
                  city : data.name,
                  country : data.sys.country,
                  humidity : data.main.humidity,
                  description: data.weather[0].description,
                  error : ""
              }

          });
      }
      else {
          this.setState({
              field : {
                  city : '',
                  country : ''
              },
              condition: {
                  id: undefined,
                  temperature: undefined,
                  city : undefined,
                  country : undefined,
                  humidity : undefined,
                  description: undefined,
                  error : "Please Enter A Location"
              }

          });

      }

      const mysa = this.state;
      console.log(mysa);

  }
  state = {
      field : {
          city : '',
          country : ''
      },
      condition : {
          id: undefined,
          temperature : undefined,
          city : undefined,
          country : undefined,
          humidity : undefined,
          description : undefined,
          error : undefined
      }
  }

  render() {
      const onSub = (fi)=>{
          const field = this.state.field;
          field[fi.name] = fi.value ;
          this.setState ({field})

      }
    return (
        <div className={'wrapper'}>
            <div className={'main'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-xs-5 title-container'}>
                            <Titles/>

                        </div>
                        <div className={'col-xs-7 form-container'}>
                            <Form
                                mydata = {this.getWeather}
                                onSub = {onSub}
                            />
                            <Weather
                                weather = {this.state.condition}
                                isopen = {true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
  }
}

export default App;
