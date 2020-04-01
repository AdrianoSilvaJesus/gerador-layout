import React,{ useReducer } from 'react';

import './Slide.css';

const reducer = (state,action) => {
  switch (action.type){
    case "imagemPosterior":
      if(state.id > 2){
        return { id: 0};
      }else{
        return {id: state.id++}
      }
    case "imagemAnterior":
      if(state.id < 0){
        return { id: 2 }
      }else{
        return { id: state.id--}
      }
  }
};
const imagens = [
  {
    imagem:"https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370.jpg",
    titulo:"Igreja Ouro Preto",
    id:0
  },
  {
    imagem:"https://img.r7.com/images/e-analisando-a-paisagem-que-interagimos-com-o-mundo-em-que-vivemos-08022019070912428",
    titulo:"Imagem Bonita 2",
    id:1
  },
  {
    imagem:"https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-natural-jalapao-970437844.jpg",
    titulo:"Imagem Bonita 3",
    id:2
  }
]

const Slide = () => {

  const [imagemAtual,setImagemAtual] = useReducer(reducer,{id:2})

  return(
    <div className="slide">
      <div className="slide-imagem">
        <img width="100%" height="100%" alt={imagens[imagemAtual.id].titulo} src={imagens[imagemAtual.id].imagem}/>
        <div className="slide-botoes">
          <button className="slide-botao esquerdo" onClick={() => setImagemAtual({type:"imagemAnterior"})}>{"<"}</button>
          <button className="slide-botao direito" onClick={() => setImagemAtual({type:"imagemPosterior"})}>{">"}</button>
        </div>
      </div>
      <div className="slide-informacao">
        <h1>{imagens[imagemAtual.id].titulo}</h1>
        <p>Catedral ou Sé é o templo cristão em que se encontra a sede de um bispo e uma diocese, com seu cabido. Deriva do latim cathedra, de maneira que o nome catedral faz referência ao trono do bispo. O termo é empregado para alguns templos católicos, ortodoxos, anglicanos, protestantes e pentecostais. e</p>
      </div>
    </div>
  );
};

export default Slide;
