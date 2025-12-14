import { useState } from "react";
import { CardChildComponent } from "./CardChildComponent";
import { AddFruitForm } from "./AddFruitForm";

const initialFruits = [
  {
    id: 1,
    name: 'Bananas',
    color: 'Yellow',
    taste: 'sweet',
    image: 'https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg'
  },
  {
    id: 2,
    name: 'Apple',
    color: 'Green',
    taste: 'sour',
    image: 'https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-benefits.jpeg'
  },
  {
    id: 3,
    name: 'Strawberry',
    color: 'Red',
    taste: 'sweet',
    image: 'https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-05/aardbeien-3.jpg?itok=VKyyMjjg'
  }
];

export const Parent = () => {
  const [fruits, setFruits] = useState(initialFruits);
  const [editFruit, setEditFruit] = useState(true);

  const handleAddFruit = (fruitToAdd) => {
    setFruits(prev => [...prev, fruitToAdd])
  }

  const handleEditFruit = (updateFruit) => {
    setFruits(prev => prev.map(fruit => fruit.id === updateFruit.id ? updateFruit : fruit))

    setEditFruit(null)
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Fruit Cards</h1>
      <AddFruitForm onAdd={handleAddFruit} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', }}>
        {fruits.map((fruit) => (
          <CardChildComponent
            key={fruit.id}
            fruit={fruit}
            isEditing={editFruit}
            onSave={handleEditFruit}
          />
        ))}
      </div>
    </>
  );
};