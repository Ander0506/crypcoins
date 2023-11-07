import { combineReducers } from "@reduxjs/toolkit"
import {  cryptocoinsApi } from "../api/cryptocoinsApi"

// Combinación de todos los reducer utilizados en la alicación
export default combineReducers({
    [cryptocoinsApi.reducerPath]: cryptocoinsApi.reducer
})