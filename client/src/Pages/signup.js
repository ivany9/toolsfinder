import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import  Background from '../images/m.png';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    postcode:'',
    phone:'',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };



  const Styles={
   
    backlogin:{
     width: "100%",
     height: "800px",

     backgroundImage: `url(${Background})`
     
   },
   
    cardstyle:{

      backgroundColor:"#0a090ad6",
     },

     But:{

       Background:"#b7313175",
       }
 
 
    }


  


  return (
    <main className="d-flex align-items-center justify-conetnt justify-content-center mb-4" style={Styles.backlogin}>
      <div className="col-8 col-lg-7">
        <div className="card">
          <h4 className="card-header  text-danger text-center p-2" style={Styles.cardstyle}>Sign Up</h4>
          <div className="card-body" style={Styles.cardstyle}>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                 <input
                  className="form-input"
                  placeholder="Postcode"
                  name="postcode"
                  type="text"
                  value={formState.postcode}
                  onChange={handleChange}
                />
                 <input
                  className="form-input"
                  placeholder="xxx xxxx xxx"
                  name="phone"
                  type="text"
                  value={formState.phone}
                  onChange={handleChange}
                />
                <br/>
                <br/>
                <button
                  className="btn btn-outline-danger btn-lg btn-block mr-1 "
                  style={{ cursor: 'pointer' }}
                  type="submit" 
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
