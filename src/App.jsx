import React from "react";

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Cliente</button>
const hasCustomer = true;

const App = () => {

  const renderShowHistory = (
    <div>
      Clique no botão abaixo para vizualizar o histórico
      <br />
      {buttonA}
    </div>                
  )

  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar os clientes
      <br />
      {buttonB}
    </div>
  )

    const showCustomer = () => {
      if (!hasCustomer) return null
      return (
        <div><h2>Nome do Cliente: Alice Lobo</h2></div>
      )
    }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem-vindo</p>
      <br />
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
};

export default App;