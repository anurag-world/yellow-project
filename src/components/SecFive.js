import { Card } from 'react-bootstrap'
import img01 from '../img/card/img01.png'
import img02 from '../img/card/img02.png'
import img03 from '../img/card/img03.png'
import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations'
import { slideInUp } from 'react-animations'
import { slideInRight } from 'react-animations'
import ScrollAnim from 'rc-scroll-anim'

const ScrollOverPack = ScrollAnim.OverPack

// Slide Left Animation
const slideInLeftDiv = keyframes`${slideInLeft}`

const SlideLeftDiv = styled.div`
  animation: 1.5s ${slideInLeftDiv};
`

// Slide Up Animation
const slideInUpDiv = keyframes`${slideInUp}`

const SlideUpDiv = styled.div`
  animation: 1.5s ${slideInUpDiv};
`

// Slide Right Animation
const slideInRightDiv = keyframes`${slideInRight}`

const SlideRightDiv = styled.div`
  animation: 1.5s ${slideInRightDiv};
`

const SecFive = () => {
  return (
    <section className="section-bg-blue">
      <div className="container">
        <div className="section-default">
          {/* Section Heading */}
          <div className="section-default-heading">
            <h1>
              Under the hood - <span>engine highlights</span>
            </h1>
          </div>

          {/* Section Body */}
          <div className="card-container">
            {/* Card 01 */}
            <ScrollOverPack playScale="20vh">
              <SlideLeftDiv>
                <Card className="card">
                  <div className="card-img">
                    <Card.Img variant="top" src={img01} />
                  </div>

                  <Card.Body className="card-body">
                    <Card.Title className="card-title nu-sb-18">
                      Natural Language Processing (NLP)
                    </Card.Title>
                    <Card.Text className="card-text nu-rg-16">
                      Our proprietary and powerful natural language engine helps
                      create intelligent contextual search analysis, which
                      understands the intent and sentiment of the user to give
                      the most-apt response
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SlideLeftDiv>
            </ScrollOverPack>

            {/* Card 02 */}
            <ScrollOverPack playScale="20vh">
              <SlideUpDiv>
                <Card className="card">
                  <div className="card-img">
                    <Card.Img variant="top" src={img02} />
                  </div>

                  <Card.Body className="card-body">
                    <Card.Title className="card-title nu-sb-18">
                      Mean Reciprocal Rank (MRR)
                    </Card.Title>
                    <Card.Text className="card-text nu-rg-16">
                      The system improves upon itself as it learns from the
                      relevancy of previous search-response matches. The
                      Interface associates a Mean Reciprocal Rank (MRR) to each
                      resolution to offer better results.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SlideUpDiv>
            </ScrollOverPack>

            {/* Card 03 */}
            <ScrollOverPack playScale="20vh">
              <SlideRightDiv>
                <Card className="card">
                  <div className="card-img">
                    <Card.Img variant="top" src={img03} />
                  </div>

                  <Card.Body className="card-body">
                    <Card.Title className="card-title nu-sb-18">
                      Optical Character Recognition (OCR)
                    </Card.Title>
                    <Card.Text className="card-text nu-rg-16">
                      The engine doesn’t just index unstructured textual data,
                      but also images with our proprietary optical character
                      recognition (OCR). Get all relevant results, from multiple
                      formats within seconds.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SlideRightDiv>
            </ScrollOverPack>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecFive
