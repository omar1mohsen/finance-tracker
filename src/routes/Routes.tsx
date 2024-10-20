import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";

/* -------------------- import pages start -------------------------- */
const Home = lazy(() => import("pages/Transaction"));
const Summary = lazy(() => import("pages/Summary"));


/* ----------------------import pages end --------------------------------- */

const Router = () => {
  const router = createBrowserRouter([
    /* --------------------------------  pages start ---------------------------- */
    {
        path: "/",
        element: <Home />,
    },
    {
      path: "/summary",
      element: <Summary />,
    }
    /* --------------------------------  pages end ----------------------------- */
  ]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Spin size="large" />
        </div>
      }>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
