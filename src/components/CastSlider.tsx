import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { CreditsType, CrewType } from '../actions/IndividualFilm/CreditsActionTypes'
import noPerson from '../svg/noPerson.svg'


interface CastSliderI {
  credits: CreditsType
  toggle: string
}


export const CastSlider: FC<CastSliderI> = ({credits, toggle}) => {

  const crewIds: number[] = []



  const renderCast = () => {
    return(
      credits.cast.map(person => (
        <SliderPhoto>
          <img src={person.profile_path ? `https://image.tmdb.org/t/p/w300${person.profile_path}` : noPerson} height='50px' alt="" />
          <div className='person-name'>{person.name}</div>
        </SliderPhoto>
      ))
    )
  }

  const renderCrew = () => {
    return(
      credits.crew.map(person => {
        if(!crewIds.includes(person.id)){
          crewIds.push(person.id)
          return(
          <SliderPhoto>
            <img src={person.profile_path ? `https://image.tmdb.org/t/p/w300${person.profile_path}` : noPerson} height='50px' alt="" />
            <div className='person-name'>{person.name}</div>
          </SliderPhoto>
          )
        }        
      })
    )
  }

  return (
    <Slider>
      {toggle === 'cast' ? renderCast() : renderCrew()}
    </Slider>
  )
}

const SliderPhoto = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .person-name{
    text-align: center;
    margin-top: 0.5rem;
    opacity: 0.7;
  }
  img{
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
  
`

const Slider = styled.div`
  margin: 1rem 0rem;
  padding: 0.5rem;
  width: 100%;
  box-shadow: 2px 2px 10px #7676767f;
  border-radius: 0.5rem;
  display: flex;
  justify-content: flex-start;
  overflow: scroll;
`