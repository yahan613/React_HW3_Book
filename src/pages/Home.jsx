import Header from '../components/Header'
import Footer from '../components/Footer'
import Productlist from '../components/Productlist'

function Home() {

  return (
    <div className="container mx-auto main-layout">
      <Header 
        title="Welcome to the Book Store"
        slogan="The best place to buy your favorite books"
      />
      <Productlist/>
      <Footer/> 
    </div>
  )
}

export default Home