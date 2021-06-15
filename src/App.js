import { Component } from 'react'
import TopHeader from './components/TopHeader'
import Nav from './components/Nav'
import Header from './components/Header'
import SecOne from './components/SecOne'
import SecTwo from './components/SecTwo'
import SecThree from './components/SecThree'
import SecFour from './components/SecFour'
import SecFive from './components/SecFive'
import SecSix from './components/SecSix'
import SecSeven from './components/SecSeven'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <TopHeader />
        <Nav />
        <Header />
        <SecOne />

        <SecTwo />

        <SecThree />
        <SecFour />
        <SecFive />
        <SecSix />
        <SecSeven />
        <Footer />
      </>
    )
  }
}

export default App
