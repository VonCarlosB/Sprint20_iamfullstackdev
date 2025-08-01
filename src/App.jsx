import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home.jsx'
import ItemDetailPage from "./ItemDetailPage.jsx";
import InputCreate from "./InputCreate.jsx";

const App = () => {
  const [data, setData] = useState(null)
  const [updated, setUpdated] = useState(false)
  //const urlApi = 'http://localhost:3000'
  const urlApi = import.meta.env.VITE_APP_API_URL

const fetchData = async () => {
  try {
    const response = await fetch(urlApi)
    const resData = await response.json()
    setData(resData)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  fetchData()
}, [updated])

  return (
    <Router>
      <div>
        <nav>
          <Link to="/" onClick={fetchData}>Inicio</Link>
          <Link to='/create'>Crear tarea</Link>
        </nav>
        {data === null 
        ? (<div>cargando...</div>) 
        : 
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/create" element={<InputCreate url={urlApi} setUpdated={setUpdated}/>} />
            {data.map(item => (
              <Route key={item._id} path={`/${item._id}`} element={
                <ItemDetailPage item={item} urlApi={urlApi}/>
                } />
            ))
            }
          </Routes>
        }
        
      </div>
    </Router>
  )
};

export default App;
