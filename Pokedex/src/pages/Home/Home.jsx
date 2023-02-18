import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { getPokemonColors } from "../../constants/colors";
import { getPokemonType } from "../../constants/types";
import { GlobalContext } from "../../context/GlobalContext";
import { CardType } from "../../components/CardPokemon/styled";
import { MainContainer } from "../../components/Main/styled";
import { Titulo, AllPokemons } from "./styled";
import { BasicUsageAdd } from "../../constants/modal";

function Home() {
  const context = useContext(GlobalContext);
  const { pokemons, pokedex, addToPokedex, isOpen } = context;

  const filteredPokelist = () =>
  pokemons.filter(
    (pokemonInList) =>
      !pokedex.find(
        (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
      )
  );

  return (
    <div>
      <Header />
      <MainContainer>
        <Titulo>Todos os Pokémons</Titulo>
        <AllPokemons>
          {isOpen && <BasicUsageAdd />}
          {filteredPokelist().map((pokemon) => {
            const type = pokemon.types
              ? pokemon.types.map((type, index) => {
                  return (
                    <CardType
                      src={getPokemonType(type.type.name)}
                      key={index}
                    />
                  );
                })
              : null;

            return (
              <CardPokemon
                key={pokemon.name}
                color={getPokemonColors(
                  pokemon.types && pokemon.types[0]?.type?.name
                )}
                id={pokemon.id}
                nome={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                type={type}
                imagem={
                  pokemon.sprites?.other?.["official-artwork"]?.[
                    "front_default"
                  ]
                }
                addToPokedex={addToPokedex}
                pokemon={pokemon}
              />
            );
          })}
        </AllPokemons>
      </MainContainer>
    </div>
  );
}

export default Home;
