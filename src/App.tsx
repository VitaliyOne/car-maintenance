import './App.css'
import InformationCar from './components/InformationCar'
import CarMaintenanceMenu from './components/CarMaintenanceMenu'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
      <InformationCar></InformationCar>
      <CarMaintenanceMenu></CarMaintenanceMenu>
      <Footer></Footer>
    </Provider>
  )
}

export default App
