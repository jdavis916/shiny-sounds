import React, { Component, useState ,useReducer } from 'react';
class Populartracks extends React.Component{
    /*constructor(props) {
        super(props);
    }*/
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    name: 'Bougie Bomb', 
                    genre: 'EDM', 
                    img: {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/boujie.png')`, 
                        backgroundSize: 'cover', color: 'white'
                    }
                },
                {
                    name: 'West Coast Wave', 
                    genre: 'Hip-Hop', 
                    img: {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/westCoast.png')`, 
                        backgroundSize: 'cover', color: 'white'
                    }
                },
                {
                    name: 'God and Country', 
                    genre: 'Country', 
                    img: {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/godnCountry.png')`, 
                        backgroundSize: 'cover', color: 'white'
                    }
                },
                {
                    name: 'Sapphire', 
                    genre: 'Deep House', 
                    img: {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/sapphire.png')`, 
                        backgroundSize: 'cover', color: 'white'
                    }
                },
                {
                    name: 'Get On', 
                    genre: 'Rock', 
                    img: {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/getOn.png')`, 
                        backgroundSize: 'cover', color: 'white'
                    }
                },
                {
                    name: 'B\'rrrrat', 
                    genre: 'Rap', 
                    img: {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/brrat.png')`, 
                        backgroundSize: 'cover', color: 'white'
                    }
                },
                {
                    name: 'Wednesday Night Lofi', 
                    genre: 'EDM', 
                    img: {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/lofi.png')`, 
                        backgroundSize: 'cover', color: 'white'
                    }
                },
                {
                    name: 'Honey', 
                    genre: 'R&B', 
                    img: {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/honey.png')`, 
                        backgroundSize: 'cover', color: 'white'
                    }
                }
            ]
        }
    }
    render(){
        return (
            <section className='popularSect'>
                {this.state.items.map(i=>{
                    return (
                        <div className='popTrack' style={i.img}>
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