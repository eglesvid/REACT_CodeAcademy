//f-ija, kuri padarys req i backend'a
import axios from "axios";

const HOST = "http://localhost:4000/api/auth";

export async function signUpRequest(body) {
  try {
    const res = await axios.post(HOST + "/signup", body);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false; //kad jeigu grizta error'as, kad grazintu false. Jeigu teisingai, nenueina i catch'o dali
  }
} //del axios nereik i json konvertuotis. Is karto grazina norm. response, kuriame yra ir statusas, ir headeriai, ir data objektas

//f-ija, kurios pagalba prisijungsim. su axios pagalba darysim req i backenda
export async function signInRequest(body) {
  try {
    const { email, password } = body;

    const res = await axios.post(HOST + "/signin", { email, password });
    return res.data._id;
  } catch (error) {
    return false;
  }
}
