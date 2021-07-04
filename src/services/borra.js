// /* eslint-disable default-case */
// const AuthReducer = (stateCurrent, action) => {
//     switch (action.type) {
//         case "START_SESSION":
//             return {
//                 ...stateCurrent,
//                 usuEmail: action.data.email,
//                 usuId: action.data.uid,
//                 token: action.data.token,
//                 role: action.data.roles.admin,
//                 autenticate: true,
//                 loading: false
//             }  }  }

// const AuthState = (props) => {
//     const [state, dispatch] = 
//     const startSession = (token) => {
//         console.log('imprimir token');
        
       
//         // Inicicalizar LocalStorage 
//         localStorage.setItem("gdsldfgkl", token)

//         dispatch({
//             type: "START_SESSION",
//             data: {
//                 ...payloadJSON,
//                 token: token
//             }
//         })
//     }

//     const endSession = () => {

//     }

//     return (
//         <AuthContex.Provider value={{
//             startSession,
//             endSession,
//             usuEmail: state.usuEmail,
//             usuId: state.usuId,
//             role: state.role,
//             loading: state.loading
//         }} >
//             {props.children}
//         </AuthContex.Provider>
//     )
// }


// const isAuthenticated = () => {
//     const token = localStorage.getItem('token')
//     let isValid = true
//     try {
//         isValid = decode(token);
//     } catch (e) {
//         return false;
//     }
//     return isValid;
// };

// const MyRoute = (props) => (
//     isAuthenticated()
//         ? <Route {...props} />
//         : <Redirect to="/login" />
// )

// const Logout = () => {
//     localStorage.removeItem('token');
//     return <Redirect to="/login" />
// }