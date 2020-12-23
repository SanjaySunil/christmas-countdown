/**
 * @file Particles.jsx
 * @author Sanjay Sunil
 * @license GPL-3.0
 */

import React from 'react';
import Particles from 'react-particles-js';
import './Particles.css';

const ParticlesBackground = () => {
    return (
        <Particles id="particles-js"
            params={{
                "particles": {
                    "number": {
                        "value": 300, 
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true
                    },
                    "move": {
                        "direction": "bottom",
                        "out_mode": "out"
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "remove"
                        }
                    },
                    "modes": {
                        "remove": {
                            "particles_nb": 10
                        }
                    }
                }

            }} />
    )
}

export default ParticlesBackground;