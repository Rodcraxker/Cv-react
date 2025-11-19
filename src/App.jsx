import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import DatosPersonales from './components/DatosPersonales.jsx';
import Estudios from './components/Estudios.jsx';
import Experiencia from './components/Experiencia.jsx';
import ParallaxBackground from './components/ParallaxBackground.jsx';
import FormularioDatosPersonales from './components/FormularioDatosPersonales.jsx';
import FormularioEstudios from './components/FormularioEstudios.jsx';
import { initialExperiencia, initialDatos } from './data/cvData.js';
import './index.css'; 

// Clave única para guardar TODO el estado en localStorage
const LOCAL_STORAGE_KEY_GLOBAL = 'cvDataCompletaRodMunoz';

// Estructura de datos inicial completa
const initialDataStructure = {
    personal: initialDatos.personal,
    estudios: initialDatos.estudios,
    experiencias: initialExperiencia,
};

function App() {
    // 1. Inicialización del estado global desde localStorage o datos iniciales
    const [cvData, setCvData] = useState(() => {
        const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_GLOBAL);
        if (storedData) {
            return JSON.parse(storedData);
        }
        return initialDataStructure;
    });

    // 2. Persistencia: Guardar el estado global CADA VEZ que cvData cambie
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_GLOBAL, JSON.stringify(cvData));
    }, [cvData]);

    // Estados de control para los modos de edición/adición
    const [isEditingPersonal, setIsEditingPersonal] = useState(false);
    const [isAddingEstudio, setIsAddingEstudio] = useState(false);
    const [isEditingExperiencia, setIsEditingExperiencia] = useState(false);


    // --- FUNCIONES DE ACTUALIZACIÓN ---

    // A. Actualizar Datos Personales (incluyendo habilidades y contacto)
    const updatePersonalInfo = (newInfo) => {
        setCvData(prev => ({ 
            ...prev, 
            personal: { ...prev.personal, ...newInfo } 
        }));
        setIsEditingPersonal(false);
    };

    // B. CRUD para Experiencias
    const addExperiencia = (nuevaExp) => {
        setCvData(prev => ({ 
            ...prev, 
            experiencias: [...prev.experiencias, { ...nuevaExp, id: Date.now() }] 
        }));
        setIsEditingExperiencia(false);
    };

    const deleteExperiencia = (id) => {
        setCvData(prev => ({
            ...prev,
            experiencias: prev.experiencias.filter(exp => exp.id !== id)
        }));
    };

    // C. CRUD para Estudios - Adición
    const addEstudio = (nuevoEstudio) => {
        setCvData(prev => ({
            ...prev,
            estudios: [...prev.estudios, { ...nuevoEstudio, id: Date.now() }]
        }));
        setIsAddingEstudio(false);
    };

    // C. CRUD para Estudios - Eliminación (Añadido aquí)
    const deleteEstudio = (id) => {
        setCvData(prev => ({
            ...prev,
            estudios: prev.estudios.filter(est => est.id !== id)
        }));
    };


    return (
        <div className="cv-container">
            <ParallaxBackground /> 
            
            {/* Columna Izquierda */}
            <aside className="left-column">
                <Header name={cvData.personal.name} title={cvData.personal.title} dob={cvData.personal.dob} />
                
                {/* Botón de Edición Personal */}
                <button 
                    onClick={() => setIsEditingPersonal(!isEditingPersonal)}
                    style={{ 
                        margin: '10px 0', 
                        backgroundColor: isEditingPersonal ? '#e74c3c' : 'var(--color-tertiary)' 
                    }}
                >
                    {isEditingPersonal ? 'Cancelar Edición' : 'Editar Datos Personales'}
                </button>

                {/* Formulario de Edición Personal */}
                {isEditingPersonal && (
                    <FormularioDatosPersonales 
                        initialData={cvData.personal} 
                        onSave={updatePersonalInfo} 
                        onCancel={() => setIsEditingPersonal(false)}
                    />
                )}

                <DatosPersonales 
                    contacto={cvData.personal.contacto} 
                    sobreMi={cvData.personal.sobreMi} 
                    sobreMiAdicional={cvData.personal.sobreMiAdicional}
                    habilidades={cvData.personal.habilidadesBlandas}
                    habilidadesTecnicas={cvData.personal.habilidadesTecnicas}
                />
            </aside>

            {/* Columna Derecha */}
            <main className="right-column">
                
                {/* Estudios Section (CRUD completo) */}
                <Estudios 
                    data={cvData.estudios} 
                    onAdd={() => setIsAddingEstudio(true)}
                    onDelete={deleteEstudio} /* ¡Aquí se pasa la función de eliminación! */
                    isAdding={isAddingEstudio}
                />
                
                {isAddingEstudio && (
                    <FormularioEstudios 
                        onSave={addEstudio} 
                        onCancel={() => setIsAddingEstudio(false)}
                    />
                )}
                
                {/* Experiencia Section (CRUD) */}
                <Experiencia 
                    experiencias={cvData.experiencias} 
                    onDelete={deleteExperiencia} 
                    onAdd={addExperiencia}
                    isEditing={isEditingExperiencia}
                    setIsEditing={setIsEditingExperiencia}
                />
            </main>
        </div>
    );
}

export default App;