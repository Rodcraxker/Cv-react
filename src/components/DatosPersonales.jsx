// src/components/DatosPersonales.jsx

import React, { useState } from 'react';

const DatosPersonales = ({ contacto, sobreMi, sobreMiAdicional, habilidades, habilidadesTecnicas }) => {
    // Estado interactivo: Mostrar/ocultar información adicional (similar a tu JS original)
    const [mostrarAdicional, setMostrarAdicional] = useState(false);

    return (
        <>
            {/* Sección de Contacto */}
            <section className="aside-section">
                <h2>Contacto</h2>
                {contacto.map((item, index) => (
                    <p key={index}>
                        <strong>{item.tipo}:</strong> <br />
                        {item.esLink ? <a href={`mailto:${item.valor}`}>{item.valor}</a> : item.valor}
                    </p>
                ))}
            </section>

            {/* Sección Sobre Mí (Con Estado Interactivo) */}
            <section className="aside-section">
                <h2>Sobre mí</h2>
                <p>{sobreMi}</p>
                
                <button 
                    onClick={() => setMostrarAdicional(!mostrarAdicional)} 
                    id="toggleButton" 
                    style={{ backgroundColor: '#085ddc' }}
                >
                    {mostrarAdicional ? 'Ocultar dato adicional' : 'Mostrar más sobre mí'}
                </button>
                
                {mostrarAdicional && (
                    <div id="additionalData" style={{ marginTop: '10px' }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-secondary)' }}>
                            {sobreMiAdicional}
                        </p>
                    </div>
                )}
            </section>

            {/* Habilidades Blandas */}
            <section className="aside-section">
                <h2>Habilidades</h2>
                <ul style={{ listStyle: 'square', marginLeft: '20px' }}>
                    {habilidades.map((habilidad, index) => (
                        <li key={index}><strong>{habilidad}</strong></li>
                    ))}
                </ul>
            </section>

            {/* Habilidades Técnicas (Usadas en la columna derecha en el original, pero las agrupamos aquí para reutilizar la lista) */}
            <section className="aside-section" style={{ borderTop: 'none', paddingTop: '0' }}>
                <h2>Habilidades Técnicas</h2>
                <ul className="skills-list" style={{ gap: '5px', paddingLeft: '0', backgroundColor: 'transparent' }}>
                    {habilidadesTecnicas.map((skill, index) => (
                        <li key={index} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default DatosPersonales;