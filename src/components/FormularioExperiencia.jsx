// src/components/FormularioExperiencia.jsx

import React, { useState } from 'react';

const FormularioExperiencia = ({ onSave }) => {
    const [data, setData] = useState({
        cargo: '',
        empresa: '',
        duracion: '',
        descripcion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Convierte la descripción (texto con saltos de línea) en un array de tareas
        const tareasArray = data.descripcion.split('\n')
                                            .map(t => t.trim())
                                            .filter(t => t); 
                                            
        onSave({
            ...data,
            tareas: tareasArray
        }); 
        setData({ cargo: '', empresa: '', duracion: '', descripcion: '' }); // Limpiar
    };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            {/* Campos del formulario */}
            <input type="text" name="cargo" placeholder="Cargo/Título" value={data.cargo} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc' }} />
            <input type="text" name="empresa" placeholder="Empresa" value={data.empresa} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc' }} />
            <input type="text" name="duracion" placeholder="Duración (Ej: Ago 2025 - Presente)" value={data.duracion} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc' }} />
            <textarea name="descripcion" placeholder="Descripción de tareas (una por línea)" value={data.descripcion} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginBottom: '10px', minHeight: '100px', border: '1px solid #ccc' }} />
            
            <button type="submit" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px' }}>Guardar Experiencia</button>
        </form>
    );
};

export default FormularioExperiencia;