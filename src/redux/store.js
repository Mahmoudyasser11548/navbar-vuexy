// ** Redux Imports
import { configureStore } from "@reduxjs/toolkit"
import layout from "./layout"

const store = configureStore({
  reducer: {layout},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export { store }
