import { useState } from "react";

const ItemDetailPage = ({item, urlApi}) => {

  const markAsCompleted = () => {
    fetch( `${urlApi}/markascompleted/${item._id}`, {
        method: 'PUT'
    })
    Window.location.reload()
  }

  const deleteTask = () => {
    fetch( `${urlApi}/id/${item._id}`, {
        method: 'DELETE'
    })
    location.replace('https://tasks-front.netlify.app/')
  }

  return (
    <>
      <h3>{item.title}</h3>
      <p>Compled: {`${item.completed}`}</p>
      <button onClick={markAsCompleted}>Mark as completed</button>
      {item.completed && 
        <button onClick={deleteTask}>Delete Task</button>
      }
    </>
 
  );
};

export default ItemDetailPage;
