import myPhoto from"./images/Mo.jpg";
import Star from "./Star";
import WhiteStar from "./WhiteStar";
function RateCard(props) {
    
    let starsArray = []
    for (let index = 0; index < props.stars; index++) {
        starsArray.push(<Star key={index}/>) 
    }
    for (let index = 5; index > props.stars; index--) {
        starsArray.push(<WhiteStar key={index}/>) 
    }
    return ( 
        <div className="rateCard">
            <img src={myPhoto} alt="developer img because this site is a demo" className="myPhoto"/>
            <article>
                <h4>{props.name}</h4>
                <div id="Stars">
                    { starsArray }
                </div>
                <p>
                    {props.description}
                </p>
            </article>
        </div>
     );
}

export default RateCard;
