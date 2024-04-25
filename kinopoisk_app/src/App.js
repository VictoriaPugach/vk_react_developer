import MainPage from "./pages/MainPage";
// import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom"

// import logo from './logo.svg';
import './scss/App.css';

function App() {
  return (
		<Routes>
			<Route path="/" element={<MainPage/>} />
			{/* <Route path="/main" element={<MainPage/>}/> */}
		</Routes>
  );
}

export default App;
