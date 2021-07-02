import React, {useEffect, useState} from 'react';

function Home (){

  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
    
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
      .then((resultado)=>resultado.json())
      .then((json)=>{
        setNutri(json);
      })
    };

    loadApi();

  }, []);

      return(
        <div className='container-main'>
          <header className='container-header'>
            <h1>React nutri</h1>
          </header>

          {nutri.map((item)=>{
            return(
              <article key={item.id} className='post'>
                <strong className='titulo'>{item.titulo}</strong>

                <img src={item.capa} alt={item.titulo} className='capa'/>

                <p className='subtitle'>{item.subtitulo}</p>

                <a className='button'>Acessar</a>
              </article>
            )
          })}
        </div>
      )
    };


export default Home;
