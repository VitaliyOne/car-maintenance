import './App.css'

import CarMaintenanceMenu from './components/CarMaintenanceMenu'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from './components/Header'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <CarMaintenanceMenu />
      <Footer />
    </Provider>
  )
}

export default App
