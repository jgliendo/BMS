import React  from 'react';
import { Link } from 'react-router-dom';

import avatar from "../assets/img/user4.jpg";

const Nav = ({ isOpen, onClose })=>(
    <>
       <nav className={`MenuContent ${isOpen ? "open" : ""}`} id="menu-content">
        <section className="UserContent">
                <div className="AvatarUserContent">
                    <img className='AvatarUser' src={avatar} alt="Avatar User" />
                </div>
        
            </section>
            <section className='MainMenu'>
                <Link className='MenuGroup' to="/">DashBoard</Link>
                {/* <a href="#" id='btn_maintenance'>Mantenimiento</a> */}
                <Link id='btn_maintenance'>DashBoard</Link>
               
                    <section className='SubMenu Maintenance' id='btn_link_maintenance'>
                        <Link className='BtnLink' to="/group">Grupos</Link>
                        <Link className='BtnLink' to="/budget">Partidas Presupuestarias</Link>
                        <Link className='BtnLink' to="/provider">proveedores</Link>
                    </section>
                {/* <a className='MenuGroup' href="#" id='btn_budget_items'>Partidas</a> */}
                <Link className='MenuGroup' id='btn_budget_items'>Partidas</Link>
                <section className='SubMenu Maintenance' id='btn_budget_items'>
                    <Link className='BtnLink' to="/create_budget">Crear Presupuesto</Link>
                    <Link className='BtnLink' to="/view_budget">Consulta por Partida</Link>
                </section>
                {/* <a className='MenuGroup' href="#" id='btn_operations'>Operaciones</a> */}
                <Link className='MenuGroup' id='btn_operations'>Operaciones</Link>
                    <section className='SubMenu Maintenance' id='btn_operations'>
                        <Link className='BtnLink' to="/reserve_budget">Comprometer Fondos</Link>
                        <Link className='BtnLink' to="/tranfer_budget">Traslado de Partidas</Link>
                        <Link className='BtnLink' to="/buy">Registro de Gastos</Link>
                        <Link className='BtnLink' to="/closing_budget">Cierre Presupuestario</Link>
                    </section>
                {/* <a className='MenuGroup' href="#" id='btn_reporting'>Reportes</a>clear */}
                <Link className='MenuGroup' id='btn_reporting'>Reportes</Link>
                    <section className='SubMenu Maintenance' id='btn_reporting'>
                        <Link className='BtnLink' to="/reporting_budget">Presupuesto General</Link>
                        <Link className='BtnLink' to="/reporting_execute_budget">Presupuesto Ejecutado</Link>
                        <Link className='BtnLink' to="/reporting_slope_budget">Presupuesto por Ejecutar</Link>
                        <Link className='BtnLink' to="/reporting_committed_budget">Comprometido</Link>
                        <Link className='BtnLink' to="/reporting_open_budget">Reporte de Apertura</Link>
                        <Link className='BtnLink' to="/reporting_close_budget">Reporte de Cierre</Link>
                    </section>
            </section>
            
        </nav>

        
    
    </>



);


export default Nav;
