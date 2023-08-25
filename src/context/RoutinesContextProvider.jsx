import { createContext, useState } from "react";
//import { useAuthContext } from "../hooks/useAuthContext";
import r from "@mocks/routines.json";
import m from "@mocks/mesociclos.json";
import micro from "@mocks/microciclos.json";

export const RoutinesContext = createContext({});

export function RoutinesContextProvider({ children }) {
  const [routines, setRoutines] = useState(r);
  // const { user } = useAuthContext();

  const getRoutines = () => {
    setRoutines("");
  };

  const getMesociclos = (routineId) => {
    const mesociclos = m.filter(
      (mesociclo) => mesociclo.rutinaId === parseInt(routineId)
    );
    return { mesociclos };
  };

  const getMicrociclos = (mesocicloId) => {
    const microciclos = micro.filter(
      (microciclo) => microciclo.mesocicloId === parseInt(mesocicloId)
    );
    return { microciclos };
  };

  return (
    <RoutinesContext.Provider
      value={{
        routines,
        getRoutines,
        getMesociclos,
        getMicrociclos,
      }}
    >
      {children}
    </RoutinesContext.Provider>
  );
}