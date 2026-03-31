import { Routes, Route } from "react-router-dom";
import routes from "./routesList";
import Estrutura from "/src/Layouts/Estrutura";

function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, Component }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Estrutura routes={routes}>
              <Component />
            </Estrutura>
          }
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
