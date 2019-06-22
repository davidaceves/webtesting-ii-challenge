import React from 'react';

function Dashboard(props) {
  return (
    <>
      <h3>Dashboard</h3>
      <form>
          <button name="strike" onClick={ props.addItemHandler }>Strike</button>
          <button name="ball" onClick={ props.addItemHandler }>Ball</button>
          <button name="foul">Foul</button>
          <button name="hit">Hit</button>
      </form>
    </>
  )
}

export default Dashboard;