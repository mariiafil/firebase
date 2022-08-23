import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { LayoutEnum, PrivateRoute, PublicRoute, useAuth } from "@app/lib";
import {
	AuthLayout,
	DefaultLayout,
	Loader
} from "../../../../libs/libs/app/src/lib/components";
import { privateRoutes } from "./privateRoutes";
import { commonRoutes } from "./commonRoutes";

export const AppRoutes: FC = () => {
	const me = useAuth();

	return (
		<Suspense
			fallback={
				<Box
					component="div"
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100vh"
				>
					<Loader />
				</Box>
			}
		>
			<CssBaseline />
			<Routes>
				{[...privateRoutes, ...commonRoutes].map((route, index) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={
							route.isAuth ? (
								<PrivateRoute isAuthed={!!me.user}>
									{route.layout === LayoutEnum.AUTH && (
										<AuthLayout title={route?.pageTitle}>
											{route.element}
										</AuthLayout>
									)}
									{route.layout === LayoutEnum.DEFAULT && (
										<DefaultLayout>
											{route.element}
										</DefaultLayout>
									)}
								</PrivateRoute>
							) : (
								<PublicRoute isAuthed={!!me.user}>
									{route.layout === LayoutEnum.AUTH && (
										<AuthLayout title={route?.pageTitle}>
											{route.element}
										</AuthLayout>
									)}
									{route.layout === LayoutEnum.DEFAULT && (
										<DefaultLayout>
											{route.element}
										</DefaultLayout>
									)}
								</PublicRoute>
							)
						}
					/>
				))}
			</Routes>
		</Suspense>
	);
};
