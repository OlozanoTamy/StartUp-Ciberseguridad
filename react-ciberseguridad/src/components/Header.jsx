import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather'; // Asegúrate de tener instalado react-feather

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">Startup Ciberseguridad</div>
                <div className="hidden md:flex space-x-6">
                    <ul className="flex space-x-4">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/services">Servicios</Link></li>
                        <li><Link to="/about">Nosotros</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-4">
                    <ul className="flex flex-col space-y-4">
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
                        <li><Link to="/services" onClick={() => setIsOpen(false)}>Servicios</Link></li>
                        <li><Link to="/about" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link></li>
                        <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Header;