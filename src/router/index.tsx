import DashboardPage from "@/pages/DashboardPage";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
	{
		path: "",
		element: <DashboardPage />,
	},
	{
		path: "*",
		element: <p>Not found</p>,
	},
]);
