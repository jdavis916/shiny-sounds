import React, { Component, useState ,useReducer } from 'react';
class Populartracks extends React.Component{
    /*constructor(props) {
        super(props);
    }*/
    constructor(props){
        super(props);
        this.state = {
            items: [
                {name: 'Bougie Bomb', genre: 'EDM'},
                {name: 'West Coast Wave', genre: 'Hip-Hop'},
                {name: 'God and Country', genre: 'Country'},
                {name: 'Sapphire', genre: 'Deep House'},
                {name: 'Get On', genre: 'Rock'},
                {name: 'B\'rrrrat', genre: 'Rap'},
                {name: 'Wednesday Night Lofi', genre: 'EDM'},
                {name: 'Honey', genre: 'R&B'}
            ]
        }
    }
    render(){
        return (
            <section className='popularSect'>
                {this.state.items.map(i=>{
                    return (
                        <div className='popTrack'>
                            <h3>{i.name}</h3>
                            <p>{i.genre}</p>
                        </div>
                    )
                })}
            </section>
        )
    }

}
export default Populartracks;