
// import AuthProvider from "./controller/auth/AuthProvider";
import AppRouter from "./routers/AppRouter";


function App() {
  return (

      <AuthProvider>
        <AppRouter />
      </AuthProvider>
   
  );
}

export default App;