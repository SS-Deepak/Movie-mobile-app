import { createContext } from "react";

interface AuthContextType {
  user: Record<string, any> | null;
  login: (user: Record<string, any>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (user) => { },
  logout: () => { },
});

export default AuthContext;