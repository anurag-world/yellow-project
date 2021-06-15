import img01 from '../img/slide/01.png'
import img02 from '../img/slide/02.png'
import img03 from '../img/slide/03.png'
import img04 from '../img/slide/04.png'

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

        <div className="section-slide">
          <div className="slide-container">
            <img src={img01} alt="Img 01" />
            <p className="nu-sb-24">Advertising</p>
          </div>
          <div className="slide-container">
            <img src={img02} alt="Img 01" />
            <p className="nu-sb-24">Education</p>
          </div>
          <div className="slide-container">
            <img src={img03} alt="Img 01" />
            <p className="nu-sb-24">E-commerce</p>
          </div>
          <div className="slide-container">
            <img src={img04} alt="Img 01" />
            <p className="nu-sb-24">Telecom</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecSix
