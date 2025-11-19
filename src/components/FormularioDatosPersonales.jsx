// src/components/FormularioDatosPersonales.jsx
import React, { useState } from 'react';

const FormularioDatosPersonales = ({ initialData, onSave, onCancel }) => {
    // Convierte las listas de contacto/habilidades a texto para facilitar la edición
    const initialContactText = initialData.contacto.map(c => `${c.tipo}: ${c.valor}`).join('\n');
    const initialHabilidadesBlandasText = initialData.habilidadesBlandas.join('\n');
    const initialHabilidadesTecnicasText = initialData.habilidadesTecnicas.join('\n');

    const [formData, setFormData] = useState({
        name: initialData.name,
        title: initialData.title,
        dob: initialData.dob,
        sobreMi: initialData.sobreMi,
        sobreMiAdicional: initialData.sobreMiAdicional,
        contactText: initialContactText,
        habilidadesBlandasText: initialHabilidadesBlandasText,
        habilidadesTecnicasText: initialHabilidadesTecnicasText,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Procesa el texto de contacto de nuevo a formato de array de objetos
        const contactoArray = formData.contactText.split('\n')
            .map(line => {
                const [tipo, ...valorArr] = line.split(':');
                const valor = valorArr.join(':').trim();
                // Determina si es un link (ej: Correo, LinkedIn, URL)
                const isLink = ['Correo', 'LinkedIn', 'Web', 'GitHub'].includes(tipo.trim());
                return tipo && valor ? { tipo: tipo.trim(), valor: valor, esLink: isLink } : null;
            })
            .filter(c => c);

        // Procesa las habilidades de nuevo a arrays
        // Elimina líneas vacías y espacios extra.
        const habilidadesBlandasArray = formData.habilidadesBlandasText.split('\n').map(h => h.trim()).filter(h => h);
        const habilidadesTecnicasArray = formData.habilidadesTecnicasText.split('\n').map(h => h.trim()).filter(h => h);

        onSave({
            name: formData.name,
            title: formData.title,
            dob: formData.dob,
            sobreMi: formData.sobreMi,
            sobreMiAdicional: formData.sobreMiAdicional,
            contacto: contactoArray,
            habilidadesBlandas: habilidadesBlandasArray,
            habilidadesTecnicas: habilidadesTecnicasArray
        });
    };

    const inputStyle = { width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' };
    const textareaStyle = { ...inputStyle, minHeight: '80px' };
    // Nuevo estilo para campos de habilidades más altos
    const skillTextareaStyle = { ...inputStyle, minHeight: '120px' }; 

    return (
        <form onSubmit={handleSubmit} style={{ padding: '15px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '8px', marginBottom: '20px', color: 'black' }}>
            <h4 style={{ color: 'white', marginBottom: '10px' }}>Editar Perfil</h4>
            
            <input type="text" name="name" placeholder="Nombre Completo" value={formData.name} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="title" placeholder="Título/Puesto" value={formData.title} onChange={handleChange} required style={inputStyle} />
            <input type="text" name="dob" placeholder="Fecha de Nacimiento" value={formData.dob} onChange={handleChange} required style={inputStyle} />
            
            <textarea name="sobreMi" placeholder="Sobre Mí (Resumen)" value={formData.sobreMi} onChange={handleChange} required style={textareaStyle} />
            <textarea name="sobreMiAdicional" placeholder="Dato Adicional" value={formData.sobreMiAdicional} onChange={handleChange} style={textareaStyle} />

            <label style={{ color: 'white', display: 'block', margin: '10px 0 5px 0', fontSize: '0.9rem' }}>Contacto (Tipo: Valor, uno por línea)</label>
            <textarea name="contactText" value={formData.contactText} onChange={handleChange} style={textareaStyle} />

            <label style={{ color: 'white', display: 'block', margin: '10px 0 5px 0', fontSize: '0.9rem' }}>Habilidades Blandas (una por línea)</label>
            <textarea name="habilidadesBlandasText" value={formData.habilidadesBlandasText} onChange={handleChange} style={skillTextareaStyle} />

            <label style={{ color: 'white', display: 'block', margin: '10px 0 5px 0', fontSize: '0.9rem' }}>Habilidades Técnicas (una por línea)</label>
            <textarea name="habilidadesTecnicasText" value={formData.habilidadesTecnicasText} onChange={handleChange} style={skillTextareaStyle} />

            <button type="submit" style={{ backgroundColor: 'var(--color-tertiary)', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', marginRight: '10px' }}>Guardar Cambios</button>
            <button type="button" onClick={onCancel} style={{ backgroundColor: '#777', padding: '10px', border: 'none', borderRadius: '5px' }}>Cancelar</button>
        </form>
    );
};

export default FormularioDatosPersonales;