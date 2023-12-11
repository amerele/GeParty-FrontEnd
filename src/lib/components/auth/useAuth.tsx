import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

const UseAuth = ({
  children,
  redirectTo = '/login',
}: PrivateRouteProps) => {
    //TODO - Lógica de Autenticação
  const isAuthenticated = true;

  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default UseAuth;