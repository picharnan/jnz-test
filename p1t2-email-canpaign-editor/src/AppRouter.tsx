import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { EmailCampaignList } from "@/pages/email-campaign/EmailCampaignList";
import { EmailCampaignForm } from "@/pages/email-campaign/EmailCampaignForm";

function Loading() {
  return <h2>Loading...</h2>;
}

type RouteMapping = {
  path: string;
  element: React.ReactNode;
};

const AppRouters = () => {
  const userRoutes: Array<RouteMapping> = [
    {
      path: "/",
      // element: <>Home</>,
      element: <Navigate to="/email-campaign" />,
    },
    {
      path: "/email-campaign",
      element: <EmailCampaignList />,
    },
    {
      path: "/email-campaign/new",
      element: <EmailCampaignForm mode="create" />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  const routeMapping = [...userRoutes];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            {routeMapping.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default AppRouters;
