import React from 'react'
import ai from '../img/ai.svg'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import SmsIcon from '@material-ui/icons/Sms'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations'
import ScrollAnim from 'rc-scroll-anim'

const ScrollOverPack = ScrollAnim.OverPack

// Slide Left Animation
const slideInLeftDiv = keyframes`${slideInLeft}`

const SlideLeftDiv = styled.div`
  animation: 1.5s ${slideInLeftDiv};
`

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      backgroundColor: '#f7fdff',
      border: '1px solid #dfeff5',
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    color: '#384248',
    '&$expanded': {
      margin: '16px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    marginLeft: '38px',
    color: '#707e8a',
  },
}))(MuiAccordionDetails)

const SecTwo = () => {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <section className="container">
      <div className="section-default">
        <div className="section-default-heading">
          <h1>
            Reap the <span>benefits of fast, contextual and AI-enabled</span>{' '}
            insights interface
          </h1>
        </div>
        <ScrollOverPack playScale="20vh">
          <SlideLeftDiv>
            <div className="select-menu-container">
              <div className="select-menu-dropdown mr-30">
                <div>
                  <Accordion
                    square
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <GpsFixedIcon
                        className="mr-16"
                        style={{ color: '#73cbf2' }}
                      />
                      <Typography>
                        Totally optimized search-to-resolution journeys to speed
                        up your operations
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Users can go from search to resolution within 2 clicks!
                        Optimize the way people search for information by giving
                        them contextually-correct resolutions, within seconds,
                        in the first try itself.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <SmsIcon className="mr-16" style={{ color: '#73cbf2' }} />
                      <Typography>
                        Auto-curated relevant FAQs that improve over time as the
                        system learns
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Automatically create pertinent FAQs which are actively
                        mined from your data across the company, no matter where
                        it is. The system learns from user journeys and queries
                        to actively improve the FAQs.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <AccountTreeIcon
                        className="mr-16"
                        style={{ color: '#73cbf2' }}
                      />
                      <Typography>
                        Centralize all unstructured data, even if they exist in
                        distant data silos
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Leave data silos behind to enter the information
                        superhighway. The Insights Interface helps users search
                        and reach any information from across departments, all
                        in one place, in less than a minute.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                  >
                    <AccordionSummary
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <PlayCircleFilledIcon
                        className="mr-16"
                        style={{ color: '#73cbf2' }}
                      />
                      <Typography>
                        Deploy in just a few clicks with all the pre-trained
                        models you need
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        It’s no-code, quick and simple deployment. You can
                        go-live fast in just a few steps and clicks without any
                        developer-dependency. Also, hit the ground running with
                        our pre-trained search query models.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className="select-menu-img">
                <img src={ai} alt="ai" />
              </div>
            </div>
          </SlideLeftDiv>
        </ScrollOverPack>
      </div>
    </section>
  )
}

export default SecTwo
