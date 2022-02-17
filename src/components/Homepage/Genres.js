import React, { Component, useState ,useReducer } from 'react';
class Genres extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                'Rock',
                'Rap',
                'Hip-Hop',
                'Country',
                'EDM',
                'Deep House',
                'Rebel Rock',
                'R&B',
                'Classic Rock',
                'Metal',
                'Pop',
                'Oldies'
            ]
        }
    }
    
    render(){
        return (
            <section className='genres'>
                {this.state.items.map(i=>
                    <div className='genreItem'>
                        <p className='genreTitle'>{i}</p>
                    </div>
                )}
            </section>
            
        );
    }
}
export default Genres;