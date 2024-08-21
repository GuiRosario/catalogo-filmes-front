import React, { useEffect, useState } from "react";

const Home = () => {
    const [filmes, setFilmes] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const filmesRequest = async () => {
            try{
                const response = await fetch(`http://localhost:8080/catalogo`,{
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok){
                    const allfilmes = await response.json();
                    setFilmes(allfilmes);
                    setLoading(false);
                }else{
                    console.log("deu ruim");
                } 
            }catch(error){
                console.error("Erro ao buscar os itens:", error);
                setLoading(false)
            }
        }
        filmesRequest();
    },[]);
    
    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div>
            <h1>Lista de Filmes:</h1>
            <ul>
                {filmes.map(item => (
                    <li key={item.id}>{item.titulo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;