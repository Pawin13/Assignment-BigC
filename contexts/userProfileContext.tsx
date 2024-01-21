import React, { createContext, useContext } from "react";

export type IUserProfile = {
  username: string;
  setUsername: (c: string) => void;
};
export const usernameContext = createContext<IUserProfile>({
  username: "Yaya N.",
  setUsername: () => {},
});
export const useUsernameContext = () => useContext(usernameContext);
