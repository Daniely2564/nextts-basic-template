import { createContext, useReducer, Dispatch, useContext } from "react";
import { GlobalAction, GlobalState } from "@custom-types/hooks/context";

const initialContext: GlobalState = {
  theme: "white",
  user: null,
};

export const GlobalContext = createContext<
  [GlobalState, Dispatch<GlobalAction>]
>({} as any);

const globalReducer = (prevState: GlobalState, action: GlobalAction) => {
  switch (action.type) {
    case "THEME_BLACK":
      return {
        ...prevState,
        theme: action.payload,
      };
    case "THEME_BLACK":
      return {
        ...prevState,
        theme: action.payload,
      };
    default:
      throw new Error("Invalid Type Provided");
  }
};

export const GlobalPropsProvider = ({ children, user }: any): any => {
  const reducer = useReducer(globalReducer, {
    ...initialContext,
    user,
  });

  return (
    <GlobalContext.Provider value={reducer}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalProps = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("This hook only allowed within GlobalContext");

  return context;
};
