// src/components/Estudios.jsx

import React from 'react';

const Estudios = ({ data, onAdd, onDelete, isAdding }) => {
    
    // Estilo para el botón de eliminar (rojo y alineado a la derecha)
    const deleteButtonStyle = {
        backgroundColor: '#dc3545', // Rojo fuerte para la acción de eliminar
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '0.8rem',
        cursor: 'pointer',
        marginLeft: 'auto', // Empuja el botón a la derecha
        flexShrink: 0,
        alignSelf: 'flex-start'
    };

    // Estilo base para el contenedor de información del estudio
    const studyInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '5px',
    };

    return (
        <section className="main-section">
            <h2>Datos académicos</h2>
            
            {/* Botón para activar/desactivar la adición */}
            <button 
                onClick={onAdd}
                style={{ 
                    marginBottom: '1rem', 
                    padding: '0.5rem 1rem', 
                    backgroundColor: isAdding ? '#e74c3c' : 'var(--color-secondary)',
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px' 
                }}
            >
                {isAdding ? 'Cancelar Adición' : 'Agregar Estudio (CRUD)'}
            </button>
            
            {data.map((estudio, index) => {
                // Estilo condicional para añadir una línea divisoria a todos, excepto al último
                const itemContainerStyle = {
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                    paddingBottom: '15px', // Espacio para el borde inferior
                    marginBottom: '15px', // Espacio después del borde
                    // Se cambia 'dashed #ccc' por 'solid #e0e0e0' (línea continua y más elegante)
                    borderBottom: index < data.length - 1 ? '1px solid #e0e0e0' : 'none', 
                };

                return (
                    // El contenedor principal del item-block se queda para el padding y el borde izquierdo
                    <div key={estudio.id || index} className="item-block study-block" style={{ borderLeft: '5px solid var(--color-tertiary)'}}>
                        {/* Contenedor Flex para la información y el botón + la línea divisoria */}
                        <div style={itemContainerStyle}>
                             <div style={studyInfoStyle}>
                                <h3>{estudio.institucion}</h3>
                                <p>{estudio.titulo}</p>
                                <p className="duration">{estudio.duracion}</p>
                            </div>
                            {/* Botón de Eliminar */}
                            <button 
                                onClick={() => onDelete(estudio.id)} 
                                style={deleteButtonStyle}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Estudios;