import React, { useState } from 'react';
import './Admin.css';

interface Program {
  name: string;
  description: string;
}

const Admin: React.FC<{ onAddProgram: (program: Program) => void }> = ({ onAddProgram }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      onAddProgram({ name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <div className="admin-panel">
      <h2>Create Program</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Program Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Program Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Program</button>
      </form>
    </div>
  );
};

export default Admin;
