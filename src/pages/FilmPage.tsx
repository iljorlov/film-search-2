import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { GetPosters } from '../actions/IndividualFilm/ImagesActions'
import { GetIndividualFilm } from '../actions/IndividualFilm/IndividualFilmActions'
import { RootStore } from '../Store'
import _ from 'lodash'
import { PosterSlider } from '../components/PosterSlider'
import noPoster from '../svg/noPoster.svg' 
import star from '../svg/star.svg'
import { GetCredits } from '../actions/IndividualFilm/CreditsActions'
import { CastSlider } from '../components/CastSlider'
import { RecommendedFilms } from '../components/RecommendedFilms'


export const FilmPage = () => {

  const location = useLocation()
  const pathFilmId = parseInt(location.pathname.split('/')[2])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetIndividualFilm(pathFilmId))
    dispatch(GetPosters(pathFilmId))
    dispatch(GetCredits(pathFilmId))
  }, [dispatch, pathFilmId])

  const getHours = (mins: number) => {
    let hours = Math.floor(mins / 60)
    let minutes = mins - (60 * hours)
    return `${hours}h ${minutes}min`
  }
  
  const data = useSelector((state: RootStore) => state.individualFilms.data!)
  const posters = useSelector((state: RootStore) => state.posters.data)
  const credits = useSelector((state: RootStore) => state.credits.data)
  


  return (
    <>{ data && data![pathFilmId] && posters && posters![pathFilmId] && credits && credits![pathFilmId] &&
      <MainSection>
        <FilmIntroCentered>
          <FilmName>{data[pathFilmId].title}</FilmName>
          <SubnameInfo>{data[pathFilmId].release_date.split('-')[0]}</SubnameInfo>
          <Tagline>
              {data![pathFilmId].tagline}
          </Tagline>
        </FilmIntroCentered>
        <FilmDiv>
          <LeftInfo>
            <FilmIntro>
              <FilmName>{data[pathFilmId].title}</FilmName>
              <SubnameInfo>{data[pathFilmId].release_date.split('-')[0]}</SubnameInfo>
              <Tagline>
                  {data![pathFilmId].tagline}
              </Tagline>
            </FilmIntro>
            
            <Media>
              {!_.isEmpty(data![pathFilmId].poster_path) 
              ? <PosterSlider pathFilmId={pathFilmId} altPosterPath={data![pathFilmId].poster_path}/>
              : <img src={noPoster} alt='poster'/>}
              
              {/* <VideoWrapper>
                <iframe width="560" height="349" src={`https://www.youtube.com/embed/PLl99DlL6b4?modestbranding=1&showinfo=0&rel=0&`} frameBorder='0' allowFullScreen></iframe>
              </VideoWrapper> */}
            </Media>
              <RatingDuration>
                <RatingContainer>
                  <div className='rating'>
                    <img src={star} alt="star" />
                    <div><b>{data![pathFilmId].vote_average}</b>/10</div>
                  </div>
                  <div className='votes'>
                    ({data![pathFilmId].vote_count} total votes)
                  </div>
                </RatingContainer>
                <SubnameInfo>{getHours(data[pathFilmId].runtime)}</SubnameInfo>
              </RatingDuration>
            <GenresContainer>
                {data![pathFilmId].genres.map(genre => (
                  <Genre>
                    {genre.name}
                  </Genre>
                ))}
              </GenresContainer>
              
          </LeftInfo>
          
          <RightInfo>
              <div>
                <HeaderDiv>
                  Overview:
                </HeaderDiv>
                <FilmDescription>
                  {data![pathFilmId].overview}
                </FilmDescription>
              </div>
              <HeaderDiv>
                Cast:
              </HeaderDiv>
              <CastSlider credits={credits[pathFilmId]} toggle={'cast'}/>
              <HeaderDiv>
                Crew:
              </HeaderDiv>
              <CastSlider credits={credits[pathFilmId]} toggle={'crew'}/>
          </RightInfo>
        </FilmDiv>
      </MainSection>}
      <RecommendedFilms />
    </>
  )
}


// const VideoWrapper = styled(motion.div)`
//   position: relative;
//   padding-bottom: 56.25%; /* 16:9 */
//   height: 0;
//   --aspect-ratio: 3 / 4;
//   padding-bottom: calc(var(--aspect-ratio, .5625) * 100%); 
//   iframe{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `

const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
      width: 50%;
      margin: 0rem 4rem;
      margin-right: 1rem;
    }
`
const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
      width: 50%;
      margin: 0.5rem 3rem 0 0;
    }
`

const HeaderDiv = styled.div`
  font-size: 1.5rem;
  padding: 1.5rem 0rem 0rem 1rem;
  width: 100%;
  @media (min-width: 768px) {
      padding: 0.5rem 0rem 0rem 1rem;
    }
`

const FilmDescription = styled.div`
  display: flex;
  text-align: justify;
  line-height: 1.5rem;
  margin-top: 1rem;
  opacity: 0.8;
  border-left: 2px solid #333;
  padding: 0rem 1rem;
`

const RatingDuration = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0rem 1rem;
  @media (min-width: 768px) {
      max-width: 20rem;
    }
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  .rating{
    display: flex;
    flex-direction: row;
    margin-right: 0.5rem;
  }
  .votes{
    display: flex;
    opacity: 0.5;
    margin-top: 0.2rem;
  }
  img{
    height: 1rem;
    padding-right: 0.5rem;
  }

`

const Tagline = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding: 0.3rem 0rem;
`

const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0.5rem 0rem 1rem 0rem;
  @media (min-width: 768px) {
      width: 100%auto;
    }
`

const Genre = styled.div`
  color: #e0dede;
  background-color: #333;
  padding: 0.5rem;
  border: 1px solid transparent;
  margin: 0.25rem 0.5rem;
  border-radius: 1rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px #7676767f;
  &:hover{
    background-color: #e0dede;
    border: 1px solid #333;
    color: #333;
    transform: translateY(-5%);
    cursor: pointer;
  }
`

const FilmName = styled(motion.div)`
  font-size: 2rem;
  font-weight: 500;
`



const Media = styled(motion.div)`
  margin: 1rem 0rem;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 1rem;
  }
`

const SubnameInfo = styled(motion.div)`
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.7;
`


const FilmIntro = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 768px) {
      display: none;
    }

`
const FilmIntroCentered = styled.div`
  display: none;
  @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
`

export const MainSection = styled(motion.div)`
  padding: 4rem 1rem;
  min-height: 100vh;
`

export const FilmDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around ;
    }
`