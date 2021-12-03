

const Paginacion = ({setPagina,pagina}) =>{
   
    
    const buscarData = async (url)=>{
        const res = await fetch(url)
        const data = await res.json();
        setPagina(data)
    }

    const nextPagina = () =>{
        buscarData(pagina.info.next)
    }
    const prevPagina = () =>{
        buscarData(pagina.info.prev)
    }

    return(
        <div className="paginacion">
            <button
            className="prevBtn"
            onClick={prevPagina}>Anterior pagina</button>


            <button
                className="nextBtn"
                onClick={nextPagina}
                >Siguiente pagina</button>
        </div>
    )
}

export default Paginacion