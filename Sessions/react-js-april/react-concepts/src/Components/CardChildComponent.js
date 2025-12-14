import { useState } from "react";

export const CardChildComponent = ({ fruit, isEditing, onSave }) => {
  const [editFruits, setEditFruit] = useState(fruit)

  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '16px',
      borderRadius: '12px',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {isEditing ?
        <>
          <input
            name='name'
            defaultValue={fruit.name}
            onChange={(event) => setEditFruit(prev => ({ ...prev, name: event.target.value }))}
          />
          <input
            name='color'
            defaultValue={fruit.color}
            onChange={(event) => setEditFruit(prev => ({ ...prev, color: event.target.value }))}
          />
          <input
            name='taste'
            defaultValue={fruit.taste}
            onChange={(event) => setEditFruit(prev => ({ ...prev, taste: event.target.value }))}
          />
          <input
            name='image'
            defaultValue={fruit.image}
            onChange={(event) => setEditFruit(prev => ({ ...prev, image: event.target.value }))}
          />
          <button onClick={() => onSave(editFruits)}>Edit</button>
        </>
        :
        <>   <img
          src={fruit.image}
          alt={fruit.name}
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'contain',
            borderRadius: '8px',
            marginBottom: '12px'
          }}
        />
          <h3 style={{ color: '#222' }}>{fruit.name}</h3>
          <p style={{ color: '#222' }}><strong>Color:</strong> {fruit.color}</p>
          <p style={{ color: '#222' }}><strong>Taste:</strong> {fruit.taste}</p></>}
    </div>
  );
};
