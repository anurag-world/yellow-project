import React from 'react'
import search from '../img/search.svg'
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
import { slideInRight } from 'react-animations'
import ScrollAnim from 'rc-scroll-anim'

const ScrollOverPack = ScrollAnim.OverPack

// Slide Right Animation
const slideInRightDiv = keyframes`${slideInRight}`

const SlideRightDiv = styled.div`
  animation: 1.5s ${slideInRightDiv};
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
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      border: '1px solid #dfeff5',
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#f7fdff',
    minHeight: 56,
    '&$expanded': {
      backgroundColor: '#ffffff',
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

export const SecThree = () => {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <section className="section-bg-blue">
      <div className="container">
        <div className="section-default">
          <div className="section-default-heading">
            <h1>
              <span>Top features</span> to boost the quality and speed of
              contextual searches
            </h1>
          </div>

          <ScrollOverPack playScale="20vh">
            <SlideRightDiv>
              <div className="select-menu-container">
                <div className="select-menu-img mr-30">
                  <img src={search} alt="search" />
                </div>
                <div className="select-menu-dropdown">
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
                          FAQ machine, context-based searching, fine-tuned
                          search results
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Successfully process queries in their natural
                          language. The system also matches the query to the
                          closest FAQs to give additional info. You can further
                          fine-tune results by adding your custom tags.
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
                        <SmsIcon
                          className="mr-16"
                          style={{ color: '#73cbf2' }}
                        />
                        <Typography>
                          Auto-synced indexing of all connected databases for
                          up-to-date responses
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          The interface automatically syncs with the connected
                          databases to ensure all information is up-to-date. So,
                          simply disseminate info in one swoop - make it live
                          for every office, anywhere in the world.
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
                          Self-learning system, plus, all analytics to help
                          create better content
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          The system self-learns with live user-journey feedback
                          to continually improve its accuracy. Also, you can
                          view all search insights in one place, like top
                          queries, to help create relevant content.
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
                          Pre-trained industrial-specific models for faster
                          go-to-market speeds
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Insights Interface has pre-trained multi-industry and
                          multilingual models with the AI to contextualize
                          industry-specific keywords, abbreviations and slang.
                          You can also easily ‘plug-in’ custom models.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </SlideRightDiv>
          </ScrollOverPack>
        </div>
      </div>
    </section>
  )
}
