import React, { Component, useState ,useReducer } from 'react';
class Hero extends React.Component{
    /*constructor(props) {
        super(props);
    }*/
    render(){
        return (
            <section className='hero'>
                <div className='heroTxt'>
                    <h1>Shiny Sounds</h1>
                    <p>The Illest Beatstop on the Web</p>
                </div>
            </section>
        )
    }

}
export default Hero;

