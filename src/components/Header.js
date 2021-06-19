import styled from 'styled-components'
import dataImg from '../img/data.jpg'
import playImg from '../img/play.png'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 40px;
`

export const Header = () => {
  return (
    <header className="section-mask">
      <div className="container">
        <HeaderContainer>
          <div className="header-text">
            <h1>
              Convert unstructured data to{' '}
              <span>contextual and searchable insights</span>
            </h1>
            <p>
              Turn 100’s of documents worth of unstructured data into a
              fine-tuned structured and searchable set in a fast, easy and
              comprehensive way – with our AI and ML-powered Insights Interface!
            </p>
            <button>Get a demo</button>
          </div>

          <div className="header-play">
            <img src={dataImg} alt="Statistics" />

            <div className="play-button">
              <img src={playImg} alt="Play Button" />
            </div>
          </div>
        </HeaderContainer>
      </div>
    </header>
  )
}
