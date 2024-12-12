function Jokes (props) {

    return(
        <article>
                {props.setup && <h3 className="joke">Setup: {props.setup}</h3>}
                <h3>Punch Line: {props.punchline}</h3>
                <hr />
        </article>
    )
}

export default Jokes