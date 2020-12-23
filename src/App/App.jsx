/**
 * @file App.jsx
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from 'react';
import { ParticlesBackground, Title, Footer } from '../Components';
import './App.css';

function App() {
    return (
        <div>
            <ParticlesBackground />
            <Title />
            <Footer />
        </div>
    )
}

export default App;
