import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import CardComponent from './components/CardComponent';

import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import TablesPage from './pages/TablesPage';
import PeoplePage from './pages/PeoplePage';
import DescriptionPage from './pages/DescriptionPage';
import FormsPage from './pages/FormsPage';
import MapsPage from './pages/MapsPage';
import UsersPage from './pages/UsersPage';
import TypeScriptPage from './pages/TypeScriptPage';
import CalculatePage from './pages/CalculatePage';
import SliderPage from './pages/SliderPage';

function App() {
  return (
    <Router>
    <div className="App d-flex flex-column min-vh-100">
      <header className="text-white py-3" style={{backgroundColor: 'rgba(146, 79, 109, 1)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
               <img src={logo} className="App-logo" alt="logo" style={{height: '40px'}}/>
              <span>Мое приложение</span>
            </div>
            <div className="col-md-9 text-end">
              <Link to="/" className="text-white text-decoration-none me-3">Главная страница</Link>
              <Link to="/cards" className="text-white text-decoration-none me-3">Лягушеньки</Link> 
              <Link to="/tables" className="text-white text-decoration-none me-3">Таблички</Link> 
              <Link to="/human" className="text-white text-decoration-none me-3">Человеки</Link> 
              <Link to="/description" className="text-white text-decoration-none me-3">Описание</Link> 
              <Link to="/forms" className="text-white text-decoration-none me-3">Формы</Link> 
              <Link to="/maps" className="text-white text-decoration-none me-3">Карты</Link> 
              <Link to="/users" className="text-white text-decoration-none me-3">Пользователи</Link> 
              <Link to="/typescript" className="text-white text-decoration-none me-3">TS</Link> 
              <Link to="/calc" className="text-white text-decoration-none me-3">Калькулятор</Link> 
              <Link to="/slider" className="text-white text-decoration-none me-3">Slider</Link> 
            </div>
          </div>
        </div>
      </header>
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cards" element={<CardsPage/>}/>
          <Route path="/tables" element={<TablesPage/>}/>
          <Route path="/human" element={<PeoplePage/>}/>
          <Route path="/description" element={<DescriptionPage/>}/>
          <Route path="/forms" element={<FormsPage/>}/>
          <Route path="/maps" element={<MapsPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/typescript" element={<TypeScriptPage/>}/>
          <Route path="/calc" element={<CalculatePage/>}/>
          <Route path="/slider" element={<SliderPage/>}/>
        </Routes>
      </main>
      <footer className="bg-secondary py-3 mt-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <span>2025, курсы по Frontend</span>
            </div>
          </div>
        </div>
      </footer> 
    </div>
    </Router>
  );
}

export default App;
