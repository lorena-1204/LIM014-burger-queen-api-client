import AppRouter from "./routers/AppRouter";
import AuthProvider from "./controller/auth/AuthProvider";

function App() {
  return (

    <AuthProvider>
      <AppRouter />
    </AuthProvider>

  );
}

export default App;