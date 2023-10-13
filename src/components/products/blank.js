
import React, { Component , useContext,useState} from 'react';
import ProductRow from './productRow';
import Layout  from '../layout';
import MyContext from './myContext';


const  TeamSelect = () => {
  const [formData, setFormData] = useState({
    task: '',
  });
  const [team, setTeam] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('eeeeeeeeeeeeeee',name);
    setFormData({ ...formData, [name]: value });
  };
  const handleTeam = (val) => {
    const { team, value } = val.target;
    console.log('val>>>>>>>>>>>>>>', val.target.value);
    setTeam(val.target.value);
  }
  const teams = [
    {
      name: 'Software Team',
      id: 'swt'
    },
    {
      name: 'QA Team',
      id: 'qat'
    },
    {
      name: 'Hardware Team',
      id: 'hwt'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or submit it to a server
    console.log(formData);
    console.log('team>>>>>>>>>', team);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={formData.task}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <select value={team} onChange={(e) => handleTeam(e)}>
      {teams.map((data) => {
      return (
        <option value={data.team}>{data.name}</option>
      )
    })}
        
</select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TeamSelect;