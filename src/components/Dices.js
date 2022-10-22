import Dice from "./Dice.js"
import "../styles/Dices.css"

function Dices (props) {
    return (
        <div className="dices">
            {props.dices.map((dice, i) => <Dice  setDices={props.setDices} 
                                                dice={dice} 
                                                key={i}   
                                          />
            )}
        </div>
    )
}

export default Dices