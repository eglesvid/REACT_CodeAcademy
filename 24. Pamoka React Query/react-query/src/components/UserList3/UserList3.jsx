// vietoj duomenu bazes turesim cia array

import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"; // useQueryClient: paduoda ta clienta, kuri turim susikure index.js

const USERS = [
  { username: "user1", email: "user1@example.com", password: "password1" },
  { username: "user2", email: "user2@example.com", password: "password2" },
  { username: "user3", email: "user3@example.com", password: "password3" },
  { username: "user4", email: "user4@example.com", password: "password4" },
  { username: "user5", email: "user5@example.com", password: "password5" },
];

export default function UserList3() {
  // function wait() {
  //   return new Promise.resolve(setTimeout(() => {}, 1000));
  // }

  const queryClient = useQueryClient(); // savo viduj turi pagalbiniu metodu

  const userQuery = useQuery({
    queryKey: ["users", "hardcoded"], // visokiu reiksmiu galima idet
    queryFn: () => {
      return USERS; // kaip mes fetchinam savo infor. Tai, ka returnina, isideda i musu state
    },
    enabled: true, // enabled: sako, ar sitas query yra ijungtas, ar ne. Ar fetchint info, ar ne. Jei false, kad nefetchintu. enabled kartais prireikia
  });

  const userMutation = useMutation({
    mutationFn: () => {
      USERS.push({ username: "user6", email: "user5@example.com", password: "asdfasdf" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users", "hardcoded"]); // skliausteliuose nusirodom, kuri query norim invalidateint. Tai padarom, paduodami queryKey, nes gali buti daugiau negu sitas vienas query. invalidateQueries pasako, kad sito query cache jau yra pasenes ir taip pamatom ekrane
    },
  }); //mutationFn: f-ija, kuri mutuos musu data, dazniausiai tai butu koks axios POST ar DELETE requestas i db. Dabar dar info neturetume matyti, nes jos realiai nepafetchina pas mus, nes ta data yra uzcacheuota (uzcacheuota reiskia duomenu bazes response ikistas kazkur i atminty), todel reikia padaryti dar viena zingsni - "tas cache yra pasenes, dw paimk nauja". Principe padaryk nauja request ir issaugok new data cache. Todel pridedam onSuccess. Joje noresim pasakyti, kad musu store yra nebegaliojantis, reikia invalidatinti cache. Tam reikia dar susiimportuoti useQueryClient

  if (userQuery.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <button onClick={() => userMutation.mutate()}>Add</button>
      {userQuery.data.map((user) => {
        return (
          <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
