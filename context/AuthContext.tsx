import { createContext, SetStateAction, useState } from "react";

type UserType = {
  id: string;
  name: string;
  address: string;
};

type AuthContextTypes = {
  user: UserType | null;
  setUser: React.Dispatch<SetStateAction<UserType | null>>;
};

export const AuthContext = createContext<AuthContextTypes>({
  user: null,
  setUser: () => {},
});

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>({
    id: "479d7dcf-9cbe-401b-857f-607724742423",
    name: "Aaron",
    address: "Mayombo Dagupan City",
  });

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
