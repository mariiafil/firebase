import { lazy } from "react";
import { AccountPage, AppRoutesEnum, LayoutEnum, RouteType } from "@app/lib";
const Main = lazy(() => import("../pages/Main"));
const CreateNote = lazy(() => import("../pages/CreateNote"));
const CreateAccount = lazy(() => import("../pages/CreateAccount"));

export const privateRoutes: Array<RouteType> = [
	{
		element: <Main />,
		path: AppRoutesEnum.MAIN,
		isAuth: true,
		layout: LayoutEnum.DEFAULT
	},
	{
		element: <CreateNote />,
		path: AppRoutesEnum.CREATE_NOTE,
		isAuth: true,
		layout: LayoutEnum.DEFAULT
	},
	{
		element: <CreateAccount />,
		path: AppRoutesEnum.CREATE_ACCOUNT,
		isAuth: true,
		layout: LayoutEnum.DEFAULT
	},
	{
		element: <AccountPage />,
		path: AppRoutesEnum.ACCOUNT,
		isAuth: true,
		layout: LayoutEnum.DEFAULT
	}
];
