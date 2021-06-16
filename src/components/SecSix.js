import img01 from '../img/slide/01.png'
import img02 from '../img/slide/02.png'
import img03 from '../img/slide/03.png'
import img04 from '../img/slide/04.png'
import img05 from '../img/slide/05.png'
import img06 from '../img/slide/06.png'
import img07 from '../img/slide/07.png'
import img08 from '../img/slide/08.png'

const carousel = {
  width: '1110px',
  margin: '0 auto',
}

const SecSix = () => {
  return (
    <section className="container">
      <div className="section-default">
        <div className="section-default-heading">
          <h1>
            <span>Curious to know more?</span>
            <br />
            See what we can do for your industry
          </h1>
        </div>
        <div style={carousel}>
          <div className="carousel" data-flickity='{ "wrapAround": true }'>
            <div className="section-slide carousel-cell">
              <div className="slide-container">
                <img src={img01} alt="Img 01" />
                <p className="nu-sb-24">Advertising</p>
              </div>
              <div className="slide-container">
                <img src={img02} alt="Img 02" />
                <p className="nu-sb-24">Education</p>
              </div>
              <div className="slide-container">
                <img src={img03} alt="Img 03" />
                <p className="nu-sb-24">E-commerce</p>
              </div>
              <div className="slide-container">
                <img src={img04} alt="Img 04" />
                <p className="nu-sb-24">Telecom</p>
              </div>
            </div>

            {/* Slide 2 */}

            <div className="section-slide carousel-cell">
              <div className="slide-container">
                <img src={img05} alt="Img 05" />
                <p className="nu-sb-24">Financial Services</p>
              </div>
              <div className="slide-container">
                <img src={img06} alt="Img 06" />
                <p className="nu-sb-24">Travel & Hospitality</p>
              </div>
              <div className="slide-container">
                <img src={img07} alt="Img 07" />
                <p className="nu-sb-24">Automotive</p>
              </div>
              <div className="slide-container">
                <img src={img08} alt="Img 08" />
                <p className="nu-sb-24">Healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecSix
