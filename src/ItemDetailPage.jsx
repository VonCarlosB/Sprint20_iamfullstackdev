import { useState } from "react";

const ItemDetailPage = ({item, urlApi}) => {

  const [completed, setCompleted] = useState(item.completed)

  const markAsCompleted = async () => {
    try {
      const res = await fetch( `${urlApi}/id/${item._id}`, {
          method: 'DELETE'
      })
      if(!res.ok) throw new Error('Could not delete task '+item.title)
    } catch (error) {
      console.log(error)
    }
    fetch( `${urlApi}/markascompleted/${item._id}`, {
        method: 'PUT'
    })
    setCompleted(true)
  }

  const deleteTask = async () => {
    try {
      const res = await fetch( `${urlApi}/id/${item._id}`, {
          method: 'DELETE'
      })
      if(!res.ok) throw new Error('Could not delete task '+item.title)
    } catch (error) {
      console.log(error)
    }
    
    location.replace('https://tasks-front.netlify.app/')
  }

  return (
    <>
      <h3>{item.title}</h3>
      <p>Compled: {`${completed}`}</p>
      <button onClick={markAsCompleted}>Mark as completed</button>
      {completed && 
        <button onClick={deleteTask}>Delete Task</button>
      }
    </>
 
  );
};

export default ItemDetailPage;
