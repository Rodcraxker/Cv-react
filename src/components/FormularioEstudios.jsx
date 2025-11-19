// src/components/FormularioEstudios.jsx
import React, { useState } from 'react';

const FormularioEstudios = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        institucion: '',
        titulo: '',
        duracion: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        // onSave llama a addEstudio en App.jsx, que luego cierra el formulario.
    };

    const inputStyle = { width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px dashed #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Agregar Nuevo Estudio</h4>
            
            <input type="text" name="institucion" placeholder="Institución" value={formData.institucion} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="titulo" placeholder="Título Obtenido" value={formData.titulo} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="duracion" placeholder="Duración/Periodo (Ej: 2019 – 2022)" value={formData.duracion} onChange={handleChange} required style={inputStyle} />

            <button type="submit" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', marginRight: '10px' }}>Guardar Estudio</button>
            <button type="button" onClick={onCancel} style={{ backgroundColor: '#777', padding: '10px', border: 'none', borderRadius: '5px' }}>Cancelar</button>
        </form>
    );
};

export default FormularioEstudios;