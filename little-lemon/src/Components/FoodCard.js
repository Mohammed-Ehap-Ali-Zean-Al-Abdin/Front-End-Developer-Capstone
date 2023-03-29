import scooter from"./images/scooter.png";
function FoodCard(props){
    return(
        <div className="foodCard" id={props.id}>
            <div className="img"/>
            <article>
                <div className="flexRow"><h4>{props.title}</h4> <span>{props.prise}</span></div>
                <p>{props.description}</p>
                <div className="flexRow" id="delivery"><h4>Order a delivery </h4><img src={scooter} alt="scooter" id="scooter"/></div>
            </article>                    
        </div>
    );
};
export default FoodCard;