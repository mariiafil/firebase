import { FC, useEffect, useState } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../fitebaseconfig";
import { useAuth } from "../../contexts";
import { AccountCard } from "./AccountCard/AccountCard";
import { Loader } from "../../components";
import { AccountType, OperationType } from "../../types/meData";
import { AppRoutesEnum } from "../../types";
import { accountsPageStyles } from "./AccountsPage.styles";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

export const AccountsPage: FC = () => {
	const [accounts, setAccounts] = useState<Array<AccountType>>([]);
	const me = useAuth();

	const getData = async () => {
		if (me?.user?.uid) {
			const profileRef = await getDocs(
				collection(db, "profiles/" + me?.user?.uid + "/accounts")
			);
			const accountsData: AccountType[] = [];
			profileRef.forEach((acc) =>
				accountsData.push(acc.data() as AccountType)
			);
			setAccounts(accountsData);
		}
	};

	useEffect(() => {
		getData();
	}, [me]);

	const countAmount = (items: Array<OperationType>) =>
		items.reduce((acc, cur) => cur.amount + acc, 0);

	return (
		<Box
			component="div"
			sx={accountsPageStyles.root}
		>
			<Stack
				component="div"
				sx={accountsPageStyles.header}
			>
				<Link href={AppRoutesEnum.CREATE_NOTE}>
					<SettingsIcon />
				</Link>
				<Typography>Accounts</Typography>
				<Link href={AppRoutesEnum.CREATE_ACCOUNT}>
					<AddIcon />
				</Link>
			</Stack>
			<Box sx={accountsPageStyles.accounts}>
				{accounts?.length && accounts.length > 0 ? (
					accounts?.map((account, i) => (
						<AccountCard
							key={account.title}
							title={account.title}
							amount={countAmount(account.operations)}
							isOrderIndex={i % 2 === 0}
						/>
					))
				) : (
					<Stack
						component="div"
						sx={accountsPageStyles.loader}
					>
						<Loader color="secondary" />
					</Stack>
				)}
			</Box>
		</Box>
	);
};
