import './Card.css'

const Style = {
    
    border: '2px solid black ',
    backgroundColor: 'red',
    margin:'25px',
    padding:'30px',
    borderRadius: '50px',
}

const Card = (props) =>{
    return(
        <div style={Style}>

            <h1>Title Name: { props.name } </h1>
            <p> Age: {props.age }</p>
            <span>Profe: {props.proffesion }</span>

        </div>
    )
}

export default Card