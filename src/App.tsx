import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Admin from './Admin';
import './App.css';

interface Program {
  name: string;
  description: string;
}

function App() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleAddProgram = (program: Program) => {
    setPrograms(prev => [...prev, program]);
    window.location.hash = '#home';
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        {route === '#admin' ? (
          <Admin onAddProgram={handleAddProgram} />
        ) : (
          <>
            <h1>Programs</h1>
            {programs.length === 0 ? (
              <p>No programs yet. Click Admin to add one.</p>
            ) : (
              <ul>
                {programs.map((p, i) => (
                  <li key={i}>
                    <strong>{p.name}</strong>: {p.description}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App
