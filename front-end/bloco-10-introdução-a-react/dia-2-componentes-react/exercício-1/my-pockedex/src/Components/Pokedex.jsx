import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        const pokemonlist = this.props.pokemons;
        return (
            <section>
                <h1>The Best Pokemons</h1>
                { pokemonlist.map((pokemon) => {
                    return <Pokemon key={pokemon.id} pokemon={pokemon} />
                })}
            </section >
        )
    }
}

export default Pokedex;