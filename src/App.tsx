import { Provider } from "react-redux"
import store from "./Redux/Store"
import Home from "./Pages/Home"

function App() {

  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  )
}

export default App
