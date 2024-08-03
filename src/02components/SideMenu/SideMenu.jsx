import React from 'react'
import './SideMenu.css'

const SideMenu = () => {
  return (
    <div className="menu-container" >
      <ul className="list">
        <li className="list-item"><a href="/usuarios">Usuarios</a></li>
        <li className="list-item"><a href="/ot">Consultar OT</a></li>
        {/* <li className="list-item"><a href="/nuevo">Crear Cliente</a></li> */}
        <li className="list-item"><a href="/listar-cliente">Clientes</a></li>
      </ul>
    </div>
  )
}

export default SideMenu
