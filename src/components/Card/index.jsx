
const Card = ({infoCard}) =>{
    return(
        <div className="card">
            <h2> {infoCard.name} </h2>
            <img src={infoCard.image} alt={infoCard.name} />
            <p>Especie:<span>{infoCard.species}</span></p>
            <p>Estado:{infoCard.status}</p>
        </div>
    )
}

export default Card