// import AuthProvider from "./auth/AuthProvider";
import AuthProvider from "./controller/auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
// import Products from "./controller/Products";

function App() {
  return (
    
      <AuthProvider>
        <AppRouter />
        {/* <Products/> */}
      </AuthProvider>
   
  );
}

export default App;