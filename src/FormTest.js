import React, { useContext } from 'react';
import { UserContext } from './App';

function FormTest() {
  const {user, setUser} = useContext(UserContext);
  const handleFirstName = (event) => {
    setUser(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Form submitted. Thanks " + user)
  }
  return (
  <>
    <h1>Hello {user}</h1>
    <form onSubmit={handleSubmit}>
      <label>First Name: &nbsp;
        <input type="text" 
        value={user} 
        onChange={handleFirstName}
        />
      </label>
    </form>
  </>
  );
}

export default FormTest;
