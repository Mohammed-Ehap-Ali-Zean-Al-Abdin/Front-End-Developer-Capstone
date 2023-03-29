import Header from './Header';
import HeroSection from './HeroSection';
import FoodDishes from './FoodDishes';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
function Home(){
    return(
        <>
            <Header/>
            <main>
                <HeroSection/>
                <FoodDishes/>
                <Testimonials/>
                <About/>
            </main>
            <Footer/>
        </>
    );
};
export default Home;