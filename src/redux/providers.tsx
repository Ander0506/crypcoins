'use client'

// Componente Provider para el correcto funcionamiento del Store de redux
// Se utiliza como emboltorio de la aplicación
import { Provider } from 'react-redux'
import { store } from './store'

interface PoviderProps {
    children: React.ReactNode
}

export default function Providers({children}: PoviderProps) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}