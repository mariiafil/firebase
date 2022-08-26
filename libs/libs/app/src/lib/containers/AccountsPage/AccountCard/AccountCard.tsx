import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { AccountCardProps } from "./AccountCard.types";
import { accountCardStyles } from "./AccountCard.styles";

export const AccountCard: FC<AccountCardProps> = ({
	title,
	amount,
	isOrderIndex
}) => {
	const convertAmount = () => {
		if (amount >= 0) {
			return `$${amount}`;
		} else {
			return `-$${amount}`;
		}
	};

	return (
		<Stack
			component="span"
			sx={accountCardStyles.root}
		>
			<Typography sx={accountCardStyles.title}>{title}</Typography>
			<Typography
				sx={[
					accountCardStyles.amount,
					isOrderIndex && accountCardStyles.primary,
					!isOrderIndex && accountCardStyles.secondary
				]}
			>
				{convertAmount()}
			</Typography>
		</Stack>
	);
};
