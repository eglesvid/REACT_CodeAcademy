// cia gyvens globalus state. Store priima tik reducerius

import { configureStore } from "@reduxjs/toolkit"; // galim susikurt ir eksportuot store su juo
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
}); // butent "users" pavadinimas. Ka mes cia parasom, toks ir buna pavadinimas. Jei parasysiu asdf, browsery ir matysiu asdf. Butent taip ir vadinsis musu reducer. Reduceriu gali buti ir daugiau, nebutinai vienas

export default store;
