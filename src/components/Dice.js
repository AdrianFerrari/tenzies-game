import "../styles/Dices.css"

function Dice(props) {
        
    function freezeDice() {
        const currentDice = { ...props.dice, frozen: !props.dice.frozen }
        props.setDices(oldDices => oldDices.map(e => {
            return (
                e.id === currentDice.id
                ? currentDice
                : e
            )
        }))
    }

    return (
        <div className={props.dice.frozen ? "dice frozen" : "dice"} onClick={freezeDice}>
            {props.dice.number}
        </div>
    )
}

export default Dice