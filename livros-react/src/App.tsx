import React from 'react';
import LivroLista from './LivroLista';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Sistema de Livros</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Lista de Livros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dados">Cadastro de Livros</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="container mt-3">
                    <Routes>
                        <Route path="/" element={<LivroLista />} />
                        <Route path="/dados" element={<LivroDados />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
