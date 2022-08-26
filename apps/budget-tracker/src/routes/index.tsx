import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { useAuth } from "@app/lib";
import { LayoutEnum } from "../../../../libs/libs/app/src/lib/types";
import {
	AuthLayout,
	DefaultLayout,
	Loader,PrivateRoute, PublicRoute
} from "../../../../libs/libs/app/src/lib/components";
import { privateRoutes } from "./privateRoutes";
import { commonRoutes } from "./commonRoutes";


export const AppRoutes: FC = () => {
  const me = useAuth();
	const token = localStorage.getItem('token');

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
								<PrivateRoute isAuthed={!!token || !!me.user}>
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
								<PublicRoute isAuthed={!!token || !!me.user}>
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
