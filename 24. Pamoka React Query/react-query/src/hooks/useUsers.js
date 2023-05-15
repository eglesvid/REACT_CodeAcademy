import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const USER_ENDPOINT = "https://randomuser.me/api/?results=15";

const useUsers = () =>
  useQuery({
    queryKey: ["users"], // queryKey: vardas, neprivalo buti stringas masyve. Gali but array, uzpildytas informacija
    queryFn: () => {
      // return Promise.reject('Ivyko erroras'); // ilgai matem loading, nes react query automatiskai bando 3x padaryti requesta. Pries kiekviena retry jis siek tiek palaukia, del to uztrunka. Su GET requestais nieko nesugadinsim, tai gerai, kad by default tryina
      return axios.get(USER_ENDPOINT).then((results) => results.data.results);
    },
    staleTime: 2000,
    // refetchInterval: 3000,
  }); // queryFn: f-ija, kuri realiai daro requesta i backenda. Turi visada returnint kaip Promise. Realiai turi grazinti tai, ka mes norim ideti i state, todel prie axios parasom return. Realiai uztenka parasyti useQuery ir jis jau pafetchina. Mum dabar tik reik kazka padaryti su sita info

export default useUsers;
