import React , { Component } from 'react';

class Titles extends Component {

    render () {
        return (
            <div >
                <h1 className={'title-container__title'}>Weather Finder</h1>
                <p className={'title-container__subtitle'}>Find Out Temperature, Conditions And More ...</p>
            </div>
        )
    }
}

export default Titles;