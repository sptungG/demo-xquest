import { memo } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SidebarLayout from "../ui-layout/SidebarLayout";
import QuestPage from "../../modules/quests/pages/QuestsPage";
import ReviewSubmissionPage from "../../modules/submissions/pages/ReviewSubmissionPage";

const Routes = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <SidebarLayout />,
          children: [
            {
              path: "/",
              index: true,
              element: <Navigate to="/quests?status=active" />,
            },
            {
              path: "/quests",
              element: <QuestPage />,
            },
            {
              path: "/review-submissions",
              element: <ReviewSubmissionPage />,
            },
            {
              path: "/leaderboard",
              element: <div></div>,
            },
            {
              path: "/statistics",
              element: <div></div>,
            },
            {
              path: "/settings",
              element: <div></div>,
            },
          ],
        },
      ])}
    />
  );
};

export default memo(Routes);
