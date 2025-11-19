// src/components/Experiencia.jsx

import React from 'react';
import ListaExperiencias from './ListaExperiencias';
import FormularioExperiencia from './FormularioExperiencia';

const Experiencia = ({ experiencias, onDelete, onAdd, isEditing, setIsEditing }) => {
    return (
        <section className="main-section">
            <h2>Experiencia Laboral</h2>

            <button onClick={() => setIsEditing(!isEditing)} style={{ marginBottom: '1rem', padding: '0.5rem 1rem', backgroundColor: isEditing ? '#e74c3c' : 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '5px' }}>
                {isEditing ? 'Cancelar Adición' : 'Agregar Experiencia (CRUD)'}
            </button>

            {/* Formulario que se muestra/oculta (Estado interactivo) */}
            {isEditing && <FormularioExperiencia onSave={onAdd} />}

            <ListaExperiencias experiencias={experiencias} onDelete={onDelete} />
        </section>
    );
};

export default Experiencia;