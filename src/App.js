import { useRoutes,useNavigate } from "react-router-dom";
import Routers from './router';

function App() {
  let navigate=useNavigate();  
  const Redirectpath=(path)=>{
    navigate(path, { replace: false });
  }
  let element = useRoutes(Routers(Redirectpath));

  return (
    <div style={{height:'100vh',overflow: 'auto',}}>
      {element}
    </div>
  );
}

export default App;
