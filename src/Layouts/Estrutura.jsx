import React, { useState, useEffect } from 'react';

import './Estrutura.css';

import { useNavigate, useLocation } from 'react-router-dom';

function Estrutura({ children, backgroundColor, routes = [] }) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = routes.findIndex((route) => route.path === location.pathname);

  const [paginaValida, setPaginaValida] = useState(false);
  const [pageInput, setPageInput] = useState(currentIndex + 1);

  const userNavigate = (path, state = {}) => {
    window.scrollTo(0, 0);
    navigate(path, { state });
  };

  const handleValidarPagina = (isValid) => {
    setPaginaValida(isValid);
  };

  useEffect(() => {
    setPageInput(currentIndex + 1);
  }, [currentIndex]);

  const handlePageChangeKeyPress = (e) => {
    if (e.key === 'Enter') {
      const selectedPage = parseInt(pageInput, 10) - 1;
  
      if (selectedPage === 36) {
        userNavigate(routes[35]?.path);
        return;
      }
  
      if (selectedPage === 37) {
        const respostasUsuario = localStorage.getItem('respostasPagina36')
          ? JSON.parse(localStorage.getItem('respostasPagina36'))
          : [];
        const resultado = localStorage.getItem('resultadoPagina36')
          ? JSON.parse(localStorage.getItem('resultadoPagina36'))
          : [];
  
        userNavigate(routes[36]?.path, { respostasUsuario, resultado });
        return;
      }
  
      if (selectedPage >= 0 && selectedPage < routes.length) {
        userNavigate(routes[selectedPage]?.path);
      } else {
        alert('Número de página inválido!');
      }
    }
  };
  
  const handleAvancar = () => {
    if (location.pathname === '/pagina36' && !paginaValida) {
      alert('Por favor, valide as respostas antes de avançar.');
      return;
    }
  
    if (pageInput && parseInt(pageInput, 10) - 1 !== currentIndex) {
      handlePageChangeKeyPress({ key: 'Enter' }); 
    } else if (currentIndex >= 0 && currentIndex < routes.length - 1) {
      userNavigate(routes[currentIndex + 1]?.path);
    }
  };
  

  const handleVoltar = () => {
    if (pageInput && parseInt(pageInput, 10) - 1 !== currentIndex) {
      handlePageChangeKeyPress({ key: 'Enter' }); 
    } else if (currentIndex > 0) {
      const previousPage = routes[currentIndex - 1]?.path;
      if (previousPage === '/pagina37') {
        const respostasUsuario = localStorage.getItem('respostasPagina36')
          ? JSON.parse(localStorage.getItem('respostasPagina36'))
          : [];
        const resultado = localStorage.getItem('resultadoPagina36')
          ? JSON.parse(localStorage.getItem('resultadoPagina36'))
          : [];
  
        userNavigate(previousPage, { respostasUsuario, resultado });
      } else {
        userNavigate(previousPage);
      }
    }
  };
  

  const contentClass = location.pathname === '/pagina42' ? 'pagina42' : location.pathname === '/' ? 'pagina1' : '';

  return (
    <div>
      <main
        className="mainEstrutura"
        style={{ backgroundColor: backgroundColor || 'white' }}
       >
        <div className="side">
          <p className="wordside">Words and Worlds</p>
          <p className="englishside">ENGLISH COURSE</p>
        </div>
        <div className={`Content ${contentClass}Content`}>
          <div>
            {React.cloneElement(children, { onValidar: handleValidarPagina })}
          </div>


          <div className={`navButtons  ${contentClass}navButtons`}>
            <div className="pageSelector">
              <label htmlFor="pageInput">Página</label>
              <input
                id="pageInput"
                type="text"
                value={pageInput}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPageInput(value ? Math.min(Math.max(Number(value), 1), routes.length) : '');
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handlePageChangeKeyPress(e);
                }}
                style={{
                  width: '7rem',
                  textAlign: 'center',
                  padding: '5px',
                }}
              />
              <span> / {routes.length}</span>
            </div>
            <button
              className="navButton"
              onClick={handleVoltar}
              disabled={currentIndex <= 0}
            >
              Voltar
            </button>

            <button
              className="navButton"
              onClick={handleAvancar}
              disabled={currentIndex >= routes.length - 1}
            >
              Avançar
            </button>

            <div className="marcador-pagina">
              <strong>{currentIndex + 1}</strong>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Estrutura;
