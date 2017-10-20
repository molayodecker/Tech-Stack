import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
<<<<<<< HEAD
import reducers from './reducers';

const App = () =>{
	return(
		    <Provider store={createStore(reducers )} >
=======

const App = () =>{
	return(
>>>>>>> b4d5b83811d5840f1e91537c239080a1c53f585c
      		<View />;	
   );
};

export default App;