// import { createSlice } from "@reduxjs/toolkit";

// export const previousPageSlice = createSlice({
//     name: 'previousPage',
//     initialState: {
//         url: null,
//     },
//     reducers: {
//         setPreviousPage: (state, action) => {
//             state.url = action.payload;
//         }
//     }
// })

// export const { setPreviousPage } = previousPageSlice.actions;

// export const selectPreviousPage = (state) => state.previousPage.url;

// export default previousPageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const previousPageSlice = createSlice({
  name: 'previousPage',
  initialState: {
    url: '',
  },
  reducers: {
    setPreviousPage: (state, action) => {
      state.url = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      // Merge server state with client state here if needed
      return {
        ...state,
        ...action.payload.previousPage, // Assuming this is where previousPage state is in the action payload
      };
    });
  },
});

export const { setPreviousPage } = previousPageSlice.actions;

export const selectPreviousPage = (state) => state.previousPage.url;

export default previousPageSlice.reducer;
