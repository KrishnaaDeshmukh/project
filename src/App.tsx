import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Admin from './Admin';
import './App.css';

interface Program {
  name: string;
  description: string;
  image?: string;
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

  const handleDeleteProgram = (index: number) => {
    setPrograms(prev => prev.filter((_, i) => i !== index));
  };

  const handleDuplicateProgram = (index: number) => {
    setPrograms(prev => {
      const copy = { ...prev[index], name: prev[index].name + ' (Copy)' };
      return [...prev, copy];
    });
  };

  const handleEditProgram = (index: number) => {
    const newName = prompt('Edit program name:', programs[index].name);
    const newDesc = prompt('Edit program description:', programs[index].description);
    if (newName && newDesc) {
      setPrograms(prev => prev.map((p, i) => i === index ? { ...p, name: newName, description: newDesc } : p));
    }
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
              <div className="programs-grid">
                {programs.map((p, i) => (
                  <div className="program-card animated" key={i}>
                    <div className="program-card-image">
                      <img src={p.image || 'https://via.placeholder.com/120x80?text=Program'} alt={p.name} />
                    </div>
                    <div className="program-card-content">
                      <span className="program-card-title">{p.name}</span>
                      <span className="program-card-desc">{p.description}</span>
                    </div>
                    <div className="program-card-actions">
                      <button className="program-card-action delete" title="Delete" onClick={() => handleDeleteProgram(i)}>
                        <span className="action-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M6 18L18 6" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/></svg>
                        </span>
                        <span className="action-label">Delete</span>
                      </button>
                      <button className="program-card-action duplicate" title="Duplicate" onClick={() => handleDuplicateProgram(i)}>
                        <span className="action-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="2" stroke="#3498db" strokeWidth="2"/><rect x="3" y="3" width="10" height="10" rx="2" stroke="#3498db" strokeWidth="2" opacity="0.5"/></svg>
                        </span>
                        <span className="action-label">Duplicate</span>
                      </button>
                      <button className="program-card-action edit" title="Edit" onClick={() => handleEditProgram(i)}>
                        <span className="action-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20h4l10-10a2 2 0 0 0-2.828-2.828L5.172 17.172A2 2 0 0 0 4 20z" stroke="#f1c40f" strokeWidth="2"/></svg>
                        </span>
                        <span className="action-label">Edit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App
