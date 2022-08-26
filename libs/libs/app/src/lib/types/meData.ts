export type OperationType = {
	amount: number;
	date: Date
};

export type AccountType = {
	title: string,
	operations: Array<OperationType>
};

export type Me = {
	accounts: Array<AccountType>
};
