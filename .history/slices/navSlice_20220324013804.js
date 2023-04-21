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
      setOr
  }
 })