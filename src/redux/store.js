// ** Redux Imports
import { configureStore } from "@reduxjs/toolkit"
import layout from "./layout.js"

const store = configureStore({
  reducer: {layout},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export { store }
