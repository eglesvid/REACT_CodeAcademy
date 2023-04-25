// reducer - vieta, kur nusirodom initialState ir vykdom kazkokius actions, pagal tai koks action mums buvo paduotas. Actions tikrinam pagal action.type. Actions yra apibrezimai, ka mes norim padaryti.

import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../constants/usersConstants";

const initialState = {
  users: [],
  error: "",
  loading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true }; // ...state = tas state, kuris buvo pries tai ir noresiu pakeist tik viena dalyka loading: true
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: "" }; // ir noresim imest users. Users pasiimam is paduoto action, is payloado. O del erroro tai jeigu pries tai gaunam kazkoki errora, tai dabar norim, kad to erroro nerodytu, kadangi dabar sekmingai pavyko pafetchint
    case FETCH_USERS_ERROR:
      return { ...state, loading: false, users: [], error: action.payload }; // jeigu ismete errora, reiskia irgi, kad nebe loadinam, tada useriu mes jokiu negavom ir jeigu gaunam errora mes realiai noretume paresetint sita dali, kad nerodytu tu useriu, kurie buvo pries errora, tai idedam tuscia array. Ir tada errora gaunam is action payloado
    default:
      return state;
  }
}; //sita f-ija visada priima 2 dalykus: state ir action. State yra globalus state'as, o action yra koki mum action padave (fetch_users_error/request/success). Taip pat norim tureti defaultini state, kad kai musu aplikacija uzsikrauna, kad turetume bent kazka, todel susikuriam initialState objekta. Jeigu state butu nepaduota, tai mes galim butent tokiu budu defaultine reiksme paduoti state = initialState

export default usersReducer;
