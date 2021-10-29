import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/login';
import AddTool from './Pages/addtool';
import Home from './Pages/home';
import Profile from './Pages/profile';
import Resume from './Pages/resume';
import Signup from './Pages/signup';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="page-contanier">
         <div className="page-wrap">
    <Router>
      <Navbar />
      <Switch>
        <Route exact  path='/'>
          <Home/>
          </Route>
        <Route exact path='/login'>
        <Login/>
        </Route>
        <Route exact path="/me">
        <Profile />
        </Route>
        <Route exact path='/signup'>
        <Signup/>
        </Route>
        <Route exact path="/profile/:userId">
              <Profile />
            </Route>
        
        <Route path='/resume'exact component={Resume} />
      </Switch>
    </Router>
     </div>
    <Footer/>
   </div>
   </ApolloProvider>
  );
}

export default App;
