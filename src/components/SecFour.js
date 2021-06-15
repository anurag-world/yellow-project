import googleDrive from '../img/company/google-drive.png'
import confluence from '../img/company/confluence.png'
import aws from '../img/company/aws.png'
import sharepoint from '../img/company/microsoft-sharepoint.png'
import serviceNow from '../img/company/service-now.png'
import styled, { keyframes } from 'styled-components'
import { zoomIn } from 'react-animations'
import ScrollAnim from 'rc-scroll-anim'

const ScrollOverPack = ScrollAnim.OverPack

// ZoomIn Animation
const zoomInDiv = keyframes`${zoomIn}`

const ZoomDiv = styled.div`
  animation: 1.5s ${zoomInDiv};
`

const SecFour = () => {
  return (
    <section className="container">
      <div className="section-default">
        <div className="section-default-heading">
          <h1>
            Connect and prosper-
            <br />
            <span>native connectors for faster deployment</span>
          </h1>
        </div>
        <div className="deploy-container">
          <ScrollOverPack playScale="20vh">
            <ZoomDiv>
              <div className="deploy-logo">
                <img src={googleDrive} alt="Google Drive" />
                <p>Google Drive</p>
              </div>
            </ZoomDiv>
          </ScrollOverPack>
          <ScrollOverPack playScale="20vh">
            <ZoomDiv>
              <div className="deploy-logo">
                <img src={confluence} alt="Confluence" />
                <p>Confluence</p>
              </div>
            </ZoomDiv>
          </ScrollOverPack>
          <ScrollOverPack playScale="20vh">
            <ZoomDiv>
              <div className="deploy-logo">
                <img src={aws} alt="AWS" />
                <p>Amazon Cloud Services</p>
              </div>
            </ZoomDiv>
          </ScrollOverPack>
          <ScrollOverPack playScale="20vh">
            <ZoomDiv>
              <div className="deploy-logo">
                <img src={sharepoint} alt="Microsoft Sharepoint" />
                <p>Microsoft Sharepoint</p>
              </div>
            </ZoomDiv>
          </ScrollOverPack>
          <ScrollOverPack playScale="10vh">
            <ZoomDiv>
              <div className="deploy-logo">
                <img src={serviceNow} alt="Service Now" />
                <p>Service Now</p>
              </div>
            </ZoomDiv>
          </ScrollOverPack>
        </div>
      </div>
    </section>
  )
}

export default SecFour
