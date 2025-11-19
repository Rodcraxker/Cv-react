// src/components/ListaExperiencias.jsx

import React from 'react';

const ListaExperiencias = ({ experiencias, onDelete }) => (
    <>
        {experiencias.map(exp => (
            <div key={exp.id} className="item-block" style={{ position: 'relative' }}>
                <h3>{exp.cargo}</h3>
                <p>{exp.empresa}</p>
                <p className="duration">{exp.duracion}</p>
                <ul>
                    {exp.tareas.map((tarea, index) => <li key={index}>{tarea}</li>)}
                </ul>
                <button 
                    onClick={() => onDelete(exp.id)} 
                    style={{ position: 'absolute', top: '10px', right: '10px', padding: '5px 10px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', fontSize: '0.8rem' }}
                >
                    Eliminar (CRUD)
                </button>
                <hr style={{ margin: '15px 0' }} />
            </div>
        ))}
    </>
);

export default ListaExperiencias;