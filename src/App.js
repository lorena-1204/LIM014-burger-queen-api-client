import AuthProvider from "./controller/AuthProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
  );
}

export default App;

// import React from 'react';

// import AppRouter from './routers/AppRouter';

// function App() {
//   return (
//     <div>
//       <AppRouter />
//     </div>
//   );
// }

// export default App;