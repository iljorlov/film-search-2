import { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'


interface FilmProps {
  title: string,
  vote_average: number,
  poster_path: string,
  release_date: string
}

export const Film: FC<FilmProps> = ({title, vote_average, poster_path, release_date}) => {

  const [isHovered, setIsHovered] = useState(false)
  const cardAnimation = {}

  return (
    <StyledFilm
      transition={{duration: 0.05}}
      whileHover={{ scale: 1.025 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="poster"/>
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
          animate={{
            color: isHovered ? 'white' : '#333'
          }}
          transition={{duration: 0.1}}
        >
          {title}
        </motion.h5>
        <motion.p
          animate={{
            color: isHovered ? 'white' : 'initial'
          }}
          transition={{duration: 0.1}}
        >
          {vote_average}/10
        </motion.p>
      </Description>
    </StyledFilm>
  )
}

const CardBg = styled(motion.div)`
  width: calc(100% - 2px);
  background-color: #333;
  position: absolute;
  border-radius: 0.5rem;
`


const StyledFilm = styled(motion.div)`
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