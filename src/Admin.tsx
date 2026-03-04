import React, { useState } from 'react';
import './Admin.css';

interface Program {
  name: string;
  description: string;
  image?: string;
}

const Admin: React.FC<{ onAddProgram: (program: Program) => void }> = ({ onAddProgram }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      onAddProgram({ name, description, image });
      setName('');
      setDescription('');
      setImage('');
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
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && (
          <div className="admin-image-preview">
            <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '120px', marginTop: '1rem', borderRadius: '8px' }} />
          </div>
        )}
        <button type="submit">Add Program</button>
      </form>
    </div>
  );
};

export default Admin;
