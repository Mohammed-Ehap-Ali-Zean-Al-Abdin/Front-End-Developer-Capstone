import FoodCards from "./FoodCards";
import "./styles/FoodDishes.css";
function FoodDishes(){
    return(
        <>
            <section id="foodDishes">
                <div className="flexRow" id="specials">
                    <h2>This weeks specials!</h2>
                    <button id="menuBtn">Online Menu</button>
                </div>
                <FoodCards/>
            </section>
        </>
    );
}
export default FoodDishes;