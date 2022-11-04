import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-w.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'ilber'.split('')
  const jobArray = 'Desarrollador Web'.split('')
  const interestArray = 'FullStack'.split('')
  const enthusiastArray = 'Academlo'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}></span>
            <span className={`${letterClass} _12`}>S</span>
            <span className={`${letterClass} _13`}>o</span>
            <span className={`${letterClass} _14`}>y</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={enthusiastArray}
              idx={22}
            />
          </h1>
          <h2>
            Desarrollador Web / Full Stack / Academlo
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACTAME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
