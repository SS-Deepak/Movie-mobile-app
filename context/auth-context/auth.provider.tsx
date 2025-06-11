import { FC, PropsWithChildren, useMemo, useState } from "react";
import AuthContext from "./auth.context";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<Record<string, any> | null>(null);

  const login = (user: Record<string, any>) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(() => {
    return {
      user,
      login,
      logout
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={value}
    >{children}</AuthContext.Provider>
  )
}

export default AuthProvider;