import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";  // ✅ Correct import

export const store = configureStore({
    reducer: {  // ✅ Correct usage
        counter: counterReducer  // ✅ Must be a function, not the whole slice
    }
});
