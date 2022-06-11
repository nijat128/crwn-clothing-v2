import Categories from "./components/categories/categories.component";
import Home from "./components/routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";

function Shop(){

  return (<div>Shop here</div>)
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Home/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='sign-in' element={<SignIn/>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
