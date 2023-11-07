// Configuración inicial del Store de redux
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './features/rootReducer'
import { cryptocoinsApi } from './api/cryptocoinsApi'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        [
            cryptocoinsApi.middleware
        ]
    )
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
