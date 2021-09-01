import React from "react";

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Botão 2ª</button>
const hasCustomer = true;

const App = () => {
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem-vindo</p>
      <br />
      {hasCustomer && (
        <div>
          Clique no botão abaixo para vizualizar o histórico
          {buttonA}
        </div>
      )}
      {buttonA}
      {buttonB}

    </div>
  );
};

export default App;