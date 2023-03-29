import FoodCard from "./FoodCard";
function FoodCards(){
    return(
        <div className="foodCards">
            <FoodCard id="first"  title={"Greek salad"} prise={"$12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}/>
            <FoodCard id="second"  title={"Bruschetta"} prise={"$5.99"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}/>
            <FoodCard id="third" title={"Lemon dessert"} prise={"$5.00"} description={"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}/>
        </div>
    );
};
export default FoodCards;