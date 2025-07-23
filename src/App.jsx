import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNav from './MyNav'
import Footer from './MyFooter'
import Welcome from './Welcome'
import CardsContainer from './AllTheBooks'
import SingleBook from './SingleBook'

import horrorBooks from './assets/data/horror.json';

function App() {

  return (
    <>
  <CustomNav/>
  <Welcome />
  {/* <CardsContainer /> */}
  {/* <SingleBook book={horrorBooks[8]}/> */}
  <Footer/>
    </>
  )
}

export default App
