import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PokemonApi } from '../PokemonApi'
import App from './App'
import store from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= { store }>
    {/* <App /> */}
    <PokemonApi />
    </Provider>
  </React.StrictMode>
)
