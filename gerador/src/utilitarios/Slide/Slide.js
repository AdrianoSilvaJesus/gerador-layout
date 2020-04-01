import React from 'react';

import './Slide.css';

const Slide = () => {
  return(
    <div className="slide">
      <div className="slide-imagem">
        <img width="100%" height="100%" alt="slideimage1" src="https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370.jpg"/>
      </div>
      <div className="slide-informacao">
        <h1>Titulo do slide</h1>
        <p>Catedral ou Sé é o templo cristão em que se encontra a sede de um bispo e uma diocese, com seu cabido. Deriva do latim cathedra, de maneira que o nome catedral faz referência ao trono do bispo. O termo é empregado para alguns templos católicos, ortodoxos, anglicanos, protestantes e pentecostais. e</p>
      </div>
    </div>
  );
};

export default Slide;
