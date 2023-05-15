import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"; // susikuriam kur gyvens state
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // kad veiktu devtools. Ji reik iskart uz <App /> isrenderinti

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
    },
  },
}); // susikuriam queryClient, kur gyvena visas state (kaip redux'e buvo store). Galima nusirodyti visokiu options. Dabar visi queries tures staleTime by default 3sek

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode> // 1. su provideriu apskliaudziam App komponenta (visus komponentus, kuriu viduj noresim naudot react-query) ir zemiau isimetam devtools. Daznai ka dar daro su devtools tai .env faile esam nusirode, koks yra build'as, ar production, ar development, ar pan., tai sitoj vietoj patikrinam, ar process.env.build === "development" && <ReactQueryDevtools />, jeigu ne, jie tsg neissirenderina
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
