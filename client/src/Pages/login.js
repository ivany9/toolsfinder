import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import  Background from '../images/m.png';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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

      titlebackgroud:{
   
        backgroundColor:"#4670da1f"

      },

      But:{

        Background:"#b7313175",
        }
  
  
     }


   

   


  return (

    <div className="Ppal d-flex align-items-center justify-content-center "style={Styles.backlogin} >
    <main className="d-flex justify-content-center p-2">
      <div className="col-15 col-lg-15">
        <div className="card "  >
          <h4 className="card-header bg-secundary link text-danger text-center p-2" style={Styles.cardstyle}>Log in</h4>
          <div className="card-body d-flex justify-center " style={Styles.cardstyle} >
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input d-flex justify-center"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <br/>
                <br/>
                <button
                  className="btn btn-outline-danger btn-lg btn-block mr-3 text-center"  
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg text-white"  >
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Login;
