import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type { RootState, AppDispatch} from './store'

// Hook para el uso de acciones en la aplicación
export const useAppDispatch: () => AppDispatch = useDispatch
// Hook para el uso de estados en la aplicación
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector