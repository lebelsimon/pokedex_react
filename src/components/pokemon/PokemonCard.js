import React, { Component } from 'react'
import styled from 'styled-components' 

const Sprite = styled.img`
width: 5em;
height: 5em;
`


export default class PokemonCard extends Component {
    
    state = {
        name:'',
        imageUrl: '',
        pokemonIndex: '',
    };
    
    componentDidMount(){
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[6];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
    
        this.setState({
            name,
            imageUrl,
            pokemonIndex
        })
    }


    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <h5 className="card-header">{this.state.pokemonIndex}</h5>
                    <Sprite className="card-img-top rounded mx-auto mt-2"
                    src={this.state.imageUrl}
                    >
                    </Sprite>
                    <div className="card-body mx-auto">
                        <h6 className="card-title">
                            {this.state.name} 
                            {/* //TODO   I18N Majuscule première lettre */}
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}
