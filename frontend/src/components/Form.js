import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState([])
 
  const handleSubmit = e => {
    e.preventDefault()

    const student = {
      name: name,
    }
 
    fetch('http://localhost:5000/students', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <h2>Add students</h2>
      <form onSubmit={handleSubmit}>
        <label class="form-label">Student name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Form;