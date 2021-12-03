import Card from "../Card"


import "./ListCards.css"

const ListCards = ({pagina}) =>{

    
    console.log(pagina)

    return(
        <div className="listCards" >
            {
               pagina.results? pagina.results.map(item=>{
                    return(
                         <Card
                        key={item.id}
                        infoCard = {item}
                        ></Card>
                    )
                }): null
            }
        </div>
    )
}

export default ListCards

