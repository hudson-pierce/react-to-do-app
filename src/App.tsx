import './App.css';
import { ListContainer } from './components/ListContainer/ListContainer';
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <div className='app'>
      <Header title='My To-Do List:' />
      <ListContainer>
          <div>
            This is a test
          </div>
      </ListContainer>
    </div>
  );
}

export default App;
