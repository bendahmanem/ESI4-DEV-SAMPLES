import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import React, { useReducer } from 'react';

function App() {
  const initialState = {
    lastname: 'kjdhfskqjshfd',
    name: 'toto',
    age: 42,
    isMarried: false,
    hobbies: ['coding', 'cooking', 'reading'],  
    status: {
      isOnline: true,
      lastLogin: '2020-01-01'
    }
  }

  const myReducer = (state, action) => {
      switch (action.type) {
        case 'UPDATE_AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
          break;
      }
  }

  const [state, dispatch ]  = useReducer(myReducer, initialState)

  dispatch({type: 'UPDATE_AGE', payload: 42})
  return (
    <div className="App">

      <Child />

    </div>
  );
}

export default App;
