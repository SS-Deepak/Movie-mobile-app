import { createContext } from "react";

interface AuthContextType {
  user: Record<string, any>;
  login: (user: Record<string, any>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: {},
  login: (user) => { },
  logout: () => { },
});

export default AuthContext;