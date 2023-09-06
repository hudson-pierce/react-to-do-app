import './App.css';
import { ListContainer } from './components/ListContainer/ListContainer';
import { Header } from './components/Header/Header';
import { AddButton } from './components/Button/AddButton';

const App = () => {
  return (
    <div className='app'>
      <Header title="My Tasks"/>
      <ListContainer/>
    </div>
  );
}

export default App;
