// src/data/cvData.js

// Datos estáticos
export const initialDatos = {
    personal: {
        name: "Rod Muñoz",
        title: "Desarrollador Web",
        dob: "28/01/2003",
        contacto: [
            { tipo: "Teléfono", valor: "+593 995069928" },
            { tipo: "Correo", valor: "rodmunoz28@gmail.com", esLink: true },
            { tipo: "Ubicación", valor: "Quito, Ecuador" }
        ],
        sobreMi: "Me gusta la informatica, me apasiona la tecnología y el manejo de redes sociales. Actualmente estoy cursando mi carrera de Desarrollo de Software en tercer semestre.",
        sobreMiAdicional: "Por ahora trabajo como community manager y hago mis practicas en Corsinf.",
        habilidadesBlandas: [
            "Buena Comunicación.",
            "Trabajo en equipo.",
            "Agilidad con los resultados",
            "Resolución de problemas.",
            "Disponibilidad total.",
            "Ética Laboral."
        ],
        habilidadesTecnicas: [
            "Python",
            "JavaScript",
            "HTML5 / CSS3",
            "Visual Studio Code",
            "SQL / Bases de Datos",
            "PostgreSQL",
            "Nginx"
        ]
    },
    estudios: [
        {
            institucion: "Pontificia Universidad Católica del Ecuador",
            titulo: "3er Semestre Desarrollo de Software",
            duracion: "Octubre 2024 – Presente | Quito, Ecuador"
        },
        {
            institucion: "Academia Militar Borja 3 Cavanis",
            titulo: "Bachiller en Ciencias.",
            duracion: "2019 – 2022 | Quito, Ecuador"
        }
    ]
};

// Datos dinámicos (para el CRUD inicial)
export const initialExperiencia = [
    {
        id: 1,
        cargo: "Servicio Comunitario",
        empresa: "Casa Somos Chiriyacu | Sur de Quito",
        duracion: "Noviembre 2024 – Enero 2025 | Quito, Ecuador",
        tareas: [
            "Ayuda de Adultos Mayores y Comerciantes.",
            "Creación de Correos Electrónicos.",
            "Digitalización de Documentos.",
            "Apoyo de la formalización de comerciantes mediante el trámite PUCA del Distrito Metropolitano de Quito."
        ]
    },
    {
        id: 2,
        cargo: "Gestor de redes sociales",
        empresa: "Pastoral Borja 3 Cavanis, Freelance",
        duracion: "Agosto 2025 – Presente | Quito, Ecuador",
        tareas: [
            "Gestión de redes sociales.",
            "Creación de contenido.",
            "Análisis de datos.",
            "Producción multimedia (Mobile First )."
        ]
    }
];