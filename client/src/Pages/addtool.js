import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_TOOL} from '../utils/mutations';

import Auth from '../utils/auth';

const AddTool = ({userId}) => {
    console.log(userId);
  const [formState, setFormState] = useState({
    name: '',
    category: '',
    description: '',
    dayprice:'',
    hourpirce
    :'',
  });
  const [addTool, { error, data }] = useMutation(ADD_TOOL);

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
      const { data } = await addTool({
        variables: {userId,...formState },
      });

      Auth.login(data.addTool.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">ADD TOOL</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Tool's name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Category"
                  name="category"
                  type="text"
                  value={formState.category}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="description"
                  name="description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                />
                 <input
                  className="form-input"
                  placeholder="dayprice"
                  name="dayprice"
                  type="Number"
                  value={formState.dayprice}
                  onChange={handleChange}
                />
                 <input
                  className="form-input"
                  placeholder="hourprice"
                  name="hourprice"
                  type="Number"
                  value={formState.hourprice}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
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

export default AddTool;
