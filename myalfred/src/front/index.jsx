import { GridListas } from "./styles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ChatlingBot from "./chatling";
import imagemLogo from "../assets/iconemyalfred.png"
import ChatlingWidget from "./chatlingwidget";
import { useEffect } from "react";
import "./styles.css";
const Pagina = () => {

    const [listas, setListas] = useState([]); 
    const [inputValue, setInputValue] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); 
        };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    const adicionaLista = (nome) => {
        if (nome.trim() === "") return;
        setListas((prevListas) => [...prevListas, { nome, etapas: [], inputTopico: "" }]); 
        setInputValue("");
    };

    
    const adicionaEtapa = (index) => {

        setListas((prevListas) => {
            const novasListas = prevListas.map((lista, i) =>
                i === index
                    ? { ...lista, etapas: [...lista.etapas, { nome: lista.inputTopico }], inputTopico: "" } 
                    : lista
            );
            
            return novasListas;
        });
    };

    const atualizaInputTopico = (value, index) => {
        setListas((prevListas) =>
            prevListas.map((lista, i) =>
                i === index ? { ...lista, inputTopico: value } : lista
            )
        );
    };

    
    return (
        <div>
            <div className="row flex-row gx-0">
                <div className="col-md-9 col-sm-12 p-4 pb-0">
                    <div  style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <img className="d-none  d-md-block" style={{width: "10%"}} src={imagemLogo} alt="" />
                        <div className="">
                            <input
                                placeholder="Digite a matéria"
                                style={{ height: "50%", marginRight: "1rem" }}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                type="text"
                            />
                            <button
                                className="btn btn-dark"
                                style={{ width: "auto", height: "3rem" }}
                                onClick={(e) => adicionaLista(inputValue)}
                            >
                                Adicionar Matéria
                            </button>
                        </div>
                    </div>
                    <hr style={{ marginTop: "1rem" }} />
                    <div className="row gx-0">
                        <GridListas>
                            {listas.length === 0 ? (
                                <h3 className="text-center d-block font-weight-bold w-100 mensagem-centraliza ">Nenhuma matéria criada</h3>
                            ) : (
                                listas.map((lista, listaIndex) => (
                                    <div key={listaIndex} className="card text-white bg-dark mb-3 mensagem-vazia" style={{ maxWidth: "450px", width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <div className="card-header p-0 pb-3 w-100 text-center "  >
                                            <h2 className="pt-2 pb-2">{lista.nome}</h2>
                                            <div style={{display: "flex", flexDirection: "row" ,gap: "1rem",alignItems: "center", paddingLeft: "0.5rem", paddingRight: "0.5rem"}}>
                                            <input  type="text" style={{width: "90%", alignSelf: "flex-start"}} placeholder="Digite o tópico á adicionar"  value={lista.inputTopico} onChange={(e)=> atualizaInputTopico(e.target.value, listaIndex) } />
                                            <FontAwesomeIcon style={{cursor: "pointer", fontSize: "1.5rem", transition: "transform 0.2s ease"}} icon={faPlus} onMouseEnter={(e)=> e.target.style.transform = "scale(1.2)" } 
                                            onMouseLeave={(e)=> e.target.style.transform = "scale(1)"} onClick={!lista.inputTopico? "" : () => adicionaEtapa(listaIndex)} />
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="card-body">
                                            <div style={{display: "flex"}}> 
                                                <h5 className="card-title">Plano de estudo:</h5>
                                            
                                            </div>
                                            {lista.etapas.length === 0 ? (
                                                <p>Adicione etapas para estudar essa matéria com a ajuda do Alfred!</p>
                                            ) : (
                                                lista.etapas.map((etapa) => (
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            alignItems: "baseline",
                                                            gap: "20px",
                                                            justifyContent: "start",
                                                            
                                                        }}
                                                    >
                                                        <input type="checkbox" />
                                                        <p style={{ margin: 0, fontSize: "1.5rem" }}>{etapa.nome}</p>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </GridListas>
                    </div>
                </div>
                <div  style={{position: "sticky",top: "0",height: "auto",overflowY: "auto"}} className="d-none d-md-block bg-dark col-md-3 p-0 text-center">
                <ChatlingWidget mode="inline" displayId="chatling-inline-bot" />
                </div>
                
            </div>
            {isMobile && <ChatlingWidget mode="default" />}
            
        </div>
    );
};

export default Pagina;
