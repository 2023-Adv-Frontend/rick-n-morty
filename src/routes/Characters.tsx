import React from "react";
import Hero from "../components/Hero";
import Grid from "../Layouts/Grid";
import useVanillaGraphql from "../data-fetching/useVanillaGraphql";
import Card from "../components/Card";

const Characters = () => {
  const [characters, setCharacters] = useVanillaGraphql();

  return (
    <>
      <Hero />
      <Grid>
        {characters.map((character) => {
          return (
            <div>
              <Card
                title={character.name}
                subTitle={character.species}
                img={character.image}
              />
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Characters;
