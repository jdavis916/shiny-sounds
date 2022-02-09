import React, { Component, useState ,useReducer } from 'react';
class Genres extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {genre: 'Rock', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/rock.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Rap', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/rap.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Hip-Hop', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/hiphop.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Country', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/country.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'EDM', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/edm.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Deep House', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/house.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Rebel Rock', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/rebelRock.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'R&B', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/rnb.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Classic Rock', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/classicRock.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Metal', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/metal.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Pop', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/pop.png')`, backgroundSize: 'cover', color: 'white'}},
                {genre: 'Oldies', img: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('img/oldies.png')`, backgroundSize: 'cover', color: 'white'}}
            ]
        }
    }
    setBackground(img){

    }
    render(){
        return (
            <section className='genres'>
                {this.state.items.map(i=>
                    <div className='genreItem' key={i.genre} style={i.img}>
                        <p className='genreTitle'>{i.genre}</p>
                    </div>
                )}
            </section>
            
        );
    }

}
export default Genres;