// action - f-ija, grazinanti objekta, kuriame yra type ir payload (payload yra kaip duomenys/info, kuria norim paduoti)
// actions yra apibrezimai, ka mes norim padaryti
// type stengiames apsirasyti konstantose, nes ne vienoj vietoj juos naudojam

import axios from "axios";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "../constants/usersConstants";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
}); // sitas action ivyks, jei gausim koki error fetchindami, tai mes paduosim payloadui ne userius, o error, kuri irgi per f-ijos argumentus gausim

export const fetchUsers = (count) => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data.slice(0, count);
    dispatch(fetchUsersSuccess(users)); // issikvieciam cia action
  } catch (error) {
    dispatch(fetchUsersError(error.message));
  }
}; // 1-a f-ija priims viena argumenta, t. y. kiek useriu norim gauti. Sita f-ija returnina kita f-ija, kuri priima dispatcha. Darysim requesta, del to async f-ija. fetchUsers apjungia visus 3 musu action. Zodziu, issikvieciam f-ija, kuri is karto grazina kita f-ija, kuri jau nukeliauja dispatchui. Kodel count yra pasiekiamas butent sitoj f-ijoje, kuria grazina? Kadangi async f-ija yra count f-ijos scope'e, reiskias vidine f-ija gali pasiekti viska, ka turi isorine, iskaitant jos argumentus. DISPATCHO FUNKCIONALUMAS IVYKSTA REDUCER'Y, KUR ESAM CASE APSIRASE
