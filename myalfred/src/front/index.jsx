import { ListaTarefas, GridListas} from "./styles";
import { useEffect, useState } from "react";
import ChatlingBot from "./chatling";


const Pagina = () => {

    
    const [listas, setListas] = useState([0]); 
    const [inputValue, setInputValue] = useState("");
    const [n, setN] = useState(0);
    const adicionaLista = (nome) => {
        console.log(n);
        listas[n] = {
            nome: nome
        }
        setN(n+1)
        setInputValue("");
    }



    return (
        <body className="">
            <div className="row flex-row gx-0">
                    <div className="col-md-10 p-4">
                    <div style={{display:'flex', justifyContent:'space-between', alignSelf: "center", textAlign: "center", }}>
                            <h1>
                                My Alfred
                            </h1>
                            <div>
                            <input style={{height: "50%", alignSelf: "center", marginRight: "1rem"}} value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
                            <button className="btn btn-info " style={{width: "auto", height: "50px", alignSelf: "center"}} onClick={()=> adicionaLista(inputValue)} >Adicionar Lista</button>
                            </div>
                            
                        </div>
                        <hr style={{marginTop:'1rem'}}></hr>
                        <div className="row gx-0">
                            <GridListas>
                                {listas.map((lista) => (
                                    <div>
                                        <h1>{lista.nome}</h1>
                                    </div>
                                ))}
                            </GridListas>
                            
                        </div>
                    </div>
                    <div style={{position: "sticky", top: "0", height: "100vh", overflowY: "auto", }} className=" bg-dark  col-md-2  p-0 text-center">
                    
                    </div>
        </div>
        </body>
        
    );
};

export default Pagina;