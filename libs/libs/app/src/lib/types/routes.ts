import { ReactNode } from "react";

export enum AppRoutesEnum {
	MAIN = "/",
	REGISTRATION = "/registration",
	LOGIN = "/login",
	CREATE_NOTE = "/create_note",
	CREATE_ACCOUNT = "/create_account",
	ACCOUNT = "/account/:accountId"
}

export enum LayoutEnum {
	DEFAULT = "default",
	AUTH = "auth"
}

export type RouteType = {
	element: ReactNode;
	path: AppRoutesEnum;
	isAuth: boolean;
	layout: LayoutEnum;
	pageTitle?: string;
};
