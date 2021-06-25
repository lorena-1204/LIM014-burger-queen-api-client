
import AuthProvider from "./controller/auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
// import Products from "./controller/Products";


function App() {
  return (

      <AuthProvider>
        <AppRouter />
<<<<<<< HEAD
      </AuthProvider>
=======
        {/* <Products/> */}
      </AuthProvider>

>>>>>>> a5df20180e9321630c678042f77984c8e44ba055
   
  );
}

export default App;