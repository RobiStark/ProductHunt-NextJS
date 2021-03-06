//import '../styles/globals.css'

import firebase, {FirebaseContext} from '../firebase';
import useAutennticacion from '../hooks/useAutenticacion';

const MyApp = props => {

  const usuario = useAutennticacion();
  const{Component, pageProps} = props;

  return(
    <FirebaseContext.Provider
     value={{
        firebase,
        usuario
      }}
    >
      <Component {...pageProps}/>
    </FirebaseContext.Provider>
  )
}

/* function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
} */

export default MyApp;
