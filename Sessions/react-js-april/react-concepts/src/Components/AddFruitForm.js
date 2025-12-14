import { useState } from "react";

export const AddFruitForm = ({ onAdd }) => {

    const [newFruit, setNewFruit] = useState({
        name: '',
        color: '',
        taste: '',
        image: ''

    })

    //form submition
    const handleSubmit = () => {
        //new object
        const fruitToAdd = {
            id: Date.now(),
            ...newFruit
        }
        //method to create new object
        //frutiToAdd is new object to be passed as a parameter to onAdd method
        onAdd(fruitToAdd)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
            <input
                placeholder="Full Name"
                value={newFruit.name}
                name={"name"}
                type="text"
                onChange={(event) => setNewFruit({ ...newFruit, name: event.target.value })} />
            <input
                placeholder="Color"
                value={newFruit.color}
                name={"color"}
                type="text"
                onChange={(event) => setNewFruit({ ...newFruit, color: event.target.value })} />
            <input
                placeholder="Taste"
                value={newFruit.taste}
                name={'taste'}
                type="text"
                onChange={(event) => setNewFruit({ ...newFruit, taste: event.target.value })} />
            <input
                placeholder="Image"
                value={newFruit.image}
                name={'image'}
                type="text"
                onChange={(event) => setNewFruit({ ...newFruit, image: event.target.value })} />
            <button onClick={handleSubmit}>Add Fruit</button>
        </div>
    )
};