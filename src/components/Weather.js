import React , { Component } from 'react';

class Weather extends Component {

    render () {
        return (
             <div className={'weather__info'}>
                 <h3>Weather </h3>
                 { this.props.weather.city &&  <span className={'weather__key'}> City is <strong className={'weather__value'}> { this.props.weather.city } </strong> </span>}<br/>
                 { this.props.weather.country && <span className={'weather__key'}> Country is <strong className={'weather__value'}> {this.props.weather.country} </strong> </span>}<br/>
                 { this.props.weather.temperature && <span className={'weather__key'}> Temperature is {this.props.weather.temperature}</span>}<br/>
                 { this.props.weather.humidity && <span className={'weather__key'}>Humidity is {this.props.weather.humidity}</span>}<br/>
                 { this.props.weather.description && <span className={'weather__key'}>Description is <strong className={'weather__value'}> {this.props.weather.description}</strong></span>}<br/>
                 { this.props.weather.error && <span className={'weather__error'}>Description is <strong className={'weather__value'}> {this.props.weather.error}</strong></span>}
              </div>
        )


    }
}

export default Weather;