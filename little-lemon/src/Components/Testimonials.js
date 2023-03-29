import RateCard from "./RateCard";
import "./styles/Testimonials.css";
function Testimonials(){
    return(
        <>
            <section id="Testimonials">
                <h2>Testimonials</h2>
                <div id="peopleRateCards">
                    <RateCard name={"Mohammed Ehap"} stars={5} description={"Excellent"}/>
                    <RateCard name={"ELPOP"} stars={3} description={"Good"}/>
                    <RateCard name={"Hamada"} stars={4} description={"Great"}/>
                    <RateCard name={"MEAZA"} stars={5} description={"Excellent"}/>
                </div>
            </section>
        </>
    );
};
export default Testimonials;