import React from 'react';
import AuthProvider from './auth/authProvider';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div>
       <AppRouter/> 
         
         <AuthProvider>

       </AuthProvider>
    </div>
  );
}

export default App;
