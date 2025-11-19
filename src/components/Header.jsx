// src/components/Header.jsx

import React from 'react';

const Header = ({ name, title, dob }) => (
    <header className="personal-info">
        <img src="/foto.jpg" alt={`Foto de perfil de ${name}`} className="profile-picture" width="200" height="200" />
        <h1>{name}</h1>
        <p>{title}</p>
        <p>Nacimiento: {dob}</p>
    </header>
);

export default Header;