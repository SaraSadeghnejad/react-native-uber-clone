import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}
 export const navSlice = createSlice = ({
  name : 'nav',
  initialState,
  reducer:{
      setOrigin: (state, action) =>{
          state.origin = action.payload
      },
      setDestination: (state, action) =>{
        state.origin = action.payload
    },
    setTravelTimeInformation: (state, action) =>{
        state.origin = action.payload
    },
  },
 });
 export const {setOrigin, setDestination,setTravelTimeInformation}= navSlice.actions;

 //selectors
export const selectOrigin = (state) =>state.nav.origin;
export const selectDestinan = (state) =>state.nav.origin;
export const selectOrigin = (state) =>state.nav.origin;