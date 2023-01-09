import '../styles/globals.css'
import {Provider, useSelector} from 'react-redux'
import store from '../redux/store/index'
import Message from "../components/message";
function MyApp({ Component, pageProps }) {

  return (
      <Provider store={store}>
          <Message />
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
