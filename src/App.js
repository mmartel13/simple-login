import { useState, createContext } from 'react';
import FormTest from './FormTest';
import Header from './components/Header';
import Login from './scenes/Login';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <FormTest />
      <br />
      {!user && <Login />}
  </UserContext.Provider>
  );
}

export default App;
