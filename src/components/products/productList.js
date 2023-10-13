
import React, { Component , useContext,useState} from 'react';
import ProductRow from './productRow';
import Layout  from '../layout';
import MyContext from './myContext';

// const ProductList = () => {
//   const sharedData = 'dddddddddddddddd';
//   return (
//     <div className="container main-content">
//        <MyContext.Provider value={sharedData}>
//       <Layout/>
//       <ProductRow />
//       </MyContext.Provider>
//     </div>
//   );
// }

const  ProductList = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('eeeeeeeeeeeeeee',name);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or submit it to a server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductList;