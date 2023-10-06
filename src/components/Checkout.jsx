import React, { useState } from 'react';

const Checkout = () => {
const [formuData, setFormuData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    email: '',
    confirmarEmail: '',
});

const [error, setError] = useState({});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormuData({
    ...formuData,
    [name]: value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (!formuData.nombre) {
    newError.nombre = 'El nombre es obligatorio';
    }

    if (!formuData.apellido) {
    newError.apellido = 'El apellido es obligatorio';
    }

    if (!formuData.fechaNacimiento) {
    newError.fechaNacimiento = 'La fecha de nacimiento es obligatoria';
    }

    if (!formuData.email) {
    newError.email = 'El correo electrónico es obligatorio';
    }

    if (formuData.email !== formuData.confirmarEmail) {
    newError.confirmarEmail = 'Los correos electrónicos no coinciden';
    }

    if (Object.keys(newError).length === 0) {
      // Envía los datos del formulario si no hay errores
    console.log('Formulario enviado:', formuData);
    }

    setError(newError);
};

return (
    <div>
    <h2>Finalizar compra</h2>
    <form onSubmit={handleSubmit}>
        <div>
        <label>Nombre:</label>
        <input
            type="text"
            name="nombre"
            value={formuData.nombre}
            onChange={handleChange}
        />
        {error.nombre && <span>{error.nombre}</span>}
        </div>
        <div>
        <label>Apellido:</label>
        <input
            type="text"
            name="apellido"
            value={formuData.apellido}
            onChange={handleChange}
        />
        {error.apellido && <span>{error.apellido}</span>}
        </div>
        <div>
        <label>Fecha de Nacimiento:</label>
        <input
            type="date"
            name="fechaNacimiento"
            value={formuData.fechaNacimiento}
            onChange={handleChange}
        />
        {error.fechaNacimiento && <span>{error.fechaNacimiento}</span>}
        </div>
        <div>
        <label>Correo Electrónico:</label>
        <input
            type="email"
            name="email"
            value={formuData.email}
            onChange={handleChange}
        />
        {error.email && <span>{error.email}</span>}
        </div>
        <div>
        <label>Confirmar Correo Electrónico:</label>
        <input
            type="email"
            name="confirmarEmail"
            value={formuData.confirmarEmail}
            onChange={handleChange}
/>
        {error.confirmarEmail && <span>{error.confirmarEmail}</span>}
        </div>
        <button type="submit">Enviar</button>
    </form>
    </div>
);
};

export default Checkout;
