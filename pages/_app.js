import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux/store/index'
import Message from "../components/message";
import 'react-phone-number-input/style.css'

function MyApp({ Component, pageProps }) {

  return (
      <Provider store={store}>
          <Message />
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp