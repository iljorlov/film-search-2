import { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import noPerson from '../../svg/noPerson.svg'
import { FilmType } from '../../actions/TopRatedFilms/TopRatedFilmsActionTypes'


interface PersonProps {
  name: string,
  profile_path: string,
  known_for?: FilmType[],
  id: number
}

export const Person: FC<PersonProps> = ({name, profile_path, id}) => {

  const [isHovered, setIsHovered] = useState(false)
  const history = useHistory()

  return (
    <StyledPerson
      transition={{duration: 0.05}}
      whileHover={{ scale: 1.025 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => history.push(`/person/${id}`)}
    >
      <img src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : noPerson} alt="poster"/>
      <CardBg 
        initial={
          { height: 0 }
        }
        animate={
          { height : isHovered ? '50%' : '0%',
            bottom: isHovered ? '0rem' : '10rem',
          }
        }
        transition={{duration: 0.2}}
      />
      <Description 
        className="description"
        >
        <motion.h5
          style={{
            color: `${isHovered ? 'white' : '#333'}`
          }}
        >
          {name}
        </motion.h5>
      </Description>
    </StyledPerson>
  )
}

const CardBg = styled(motion.div)`
  width: calc(100% - 2px);
  background-color: #333;
  position: absolute;
  border-radius: 0.5rem;
`


const StyledPerson = styled(motion.div)`
  border-radius: 1rem;
  z-index: 5;
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  transition: all 0.1s ease-in;
  &:hover{
      transform: scale(1.25);
    }
  img{
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    z-index: 10;
    /* max-height: 19rem; */
  }
  p{
    font-size: smaller;
    text-align: center;
  }
`

const Description = styled(motion.div)`
  display: flex;
  padding: 0px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  max-height: 5rem;
  text-align: center;
`