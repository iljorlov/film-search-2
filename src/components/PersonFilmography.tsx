import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootStore } from "../Store";
import { FilmographyToShow } from "./FilmographyToShow";

export const PersonFilmography = () => {
  const filmsData = useSelector(
    (state: RootStore) => state.individualPerson.personMovies.data
  );
  const TVData = useSelector(
    (state: RootStore) => state.individualPerson.personTVs.data
  );

  const [selectedRole, setSelectedRole] = useState("cast");
  const [selectedArea, setSelectedArea] = useState("films");

  return (
    <PersonFilmographyContainer>
      <SelectionContainer>
        <FilmTVSelection>
          <FilmSelect
            id="films"
            onClick={() => setSelectedArea("films")}
            transition={{ type: "tween", duration: 0.2 }}
            initial={{
              width: "60%",
            }}
            style={{
              backgroundColor: `${
                selectedArea === "films" ? "#b4b2b2" : "white"
              }`,
              fontWeight: `${selectedArea === "films" ? "normal" : "lighter"}`,
            }}
            animate={{
              width: `${selectedArea === "films" ? "60%" : "40%"}`,
              borderTopRightRadius: `${
                selectedArea === "films" ? "0.75rem" : "0%"
              }`,
            }}
          >
            Films
          </FilmSelect>
          <TVSelect
            id="tvs"
            onClick={() => setSelectedArea("tvs")}
            transition={{ type: "tween", duration: 0.2 }}
            initial={{
              width: "40%",
            }}
            style={{
              backgroundColor: `${
                selectedArea === "tvs" ? "#b4b2b2" : "white"
              }`,
              fontWeight: `${selectedArea === "tvs" ? "normal" : "lighter"}`,
            }}
            animate={{
              width: `${selectedArea === "tvs" ? "60%" : "40%"}`,
              borderTopLeftRadius: `${
                selectedArea === "tvs" ? "0.75rem" : "0%"
              }`,
            }}
          >
            TV Series
          </TVSelect>
        </FilmTVSelection>
        <RoleSelection>
          <ActorSelect
            id="cast"
            onClick={() => setSelectedRole("cast")}
            transition={{ type: "tween", duration: 0.2 }}
            initial={{
              width: "60%",
            }}
            style={{
              backgroundColor: `${
                selectedRole === "cast" ? "#c4c4c4" : "white"
              }`,
              fontWeight: `${selectedRole === "cast" ? "normal" : "lighter"}`,
            }}
            animate={{
              width: `${selectedRole === "cast" ? "60%" : "40%"}`,
              borderBottomRightRadius: `${
                selectedRole === "cast" ? "0.75rem" : "0%"
              }`,
            }}
          >
            Actor
          </ActorSelect>
          <CrewSelect
            id="crew"
            onClick={() => setSelectedRole("crew")}
            transition={{ type: "tween", duration: 0.2 }}
            initial={{
              width: "40%",
            }}
            style={{
              backgroundColor: `${
                selectedRole === "crew" ? "#c4c4c4" : "white"
              }`,
              fontWeight: `${selectedRole === "crew" ? "normal" : "lighter"}`,
            }}
            animate={{
              width: `${selectedRole === "crew" ? "60%" : "40%"}`,
              borderBottomLeftRadius: `${
                selectedRole === "crew" ? "0.75rem" : "0%"
              }`,
            }}
          >
            Crew
          </CrewSelect>
        </RoleSelection>
      </SelectionContainer>
      <FilmographyToShow roleType={selectedRole} mediaType={selectedArea} />
    </PersonFilmographyContainer>
  );
};

const TVSelect = styled(motion.div)`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`;
const FilmSelect = styled(motion.div)`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`;
const CrewSelect = styled(motion.div)`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`;
const ActorSelect = styled(motion.div)`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
`;

const RoleSelection = styled(motion.div)`
  display: flex;
  width: 100%;
`;
const FilmTVSelection = styled(motion.div)`
  display: flex;
  width: 100%;
`;

const SelectionContainer = styled(motion.div)`
  margin: 0.5rem;
  box-shadow: 2px 2px 10px #7676767f;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PersonFilmographyContainer = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
