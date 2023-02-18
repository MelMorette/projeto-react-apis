import React, { useContext } from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import { CardType } from "../../components/CardPokemon/styled";
import { MainContainer } from "../../components/Main/styled";
import Header from "../../components/Header/Header";
import { getPokemonColors } from "../../constants/colors";
import { BasicUsageAdd } from "../../constants/modal";
import { getPokemonType } from "../../constants/types";
import { GlobalContext } from "../../context/GlobalContext";
import { Container, Titulo, TituloPokedex } from "./styled";

function Pokedex() {
  const context = useContext(GlobalContext);

  const { pokedex, removeFromPokedex, isOpen } = context;

  return (
    <div>
      <Header />
      <MainContainer>
        <>
          <Titulo>Meus Pokémons</Titulo>
          {!pokedex[0] ? (
            <TituloPokedex>
              Não há pokémons adicionados à sua Pokedex!
            </TituloPokedex>
          ) : (
            ""
          )}
          <Container>
            {isOpen && <BasicUsageAdd />}
            {pokedex.map((pokemon) => {
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
                  removeFromPokedex={removeFromPokedex}
                  pokemon={pokemon}
                />
              );
            })}
          </Container>
        </>
      </MainContainer>
    </div>
  );
}

export default Pokedex;
