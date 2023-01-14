
import './App.css';


function App() {
  const base_url = process.env.REACT_APP_BASE_URL

  const orderData = {
    title: "bizcochito",
    quantity: "1",
    price: "100"
  };



  const httpPostRequest = async ()=>{
   const response = await fetch(`${base_url}/create_preference`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
    const responseJSON = await response.json();
    return responseJSON
  }
  
  const redirect = (url)=>{
    window.location.href = url

  }

  const handleClick = async ()=>{
    const res = await httpPostRequest();
    redirect(res.response.body.init_point)
  }





  return (
    <div className="App">
      <button onClick={handleClick}>comprame un bizcochito</button>
     
    </div>
  );
}

export default App;
