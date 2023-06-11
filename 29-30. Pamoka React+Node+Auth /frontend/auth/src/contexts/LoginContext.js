import { createContext } from "react"; // 1. STEP createContext - pasidalinti state su daugeliu komponentu

export const LoginContext = createContext({}); // 1. STEP. cia kaip pagr. reiksme, kurioje mes saugom duomenis. Tada App.js susiimportuojam LoginContext
