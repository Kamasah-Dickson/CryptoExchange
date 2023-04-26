import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
	id: "FirstName" | "LastName" | "Country" | "Amount";
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: "FirstName", label: "FirstName", minWidth: 170 },
	{ id: "LastName", label: "LastName", minWidth: 170 },
	{ id: "Country", label: "Country", minWidth: 170 },
	{
		id: "Amount",
		label: "Amount",
		minWidth: 170,
		align: "right",
		format: (value: number) => value.toLocaleString("en-US"),
	},
];

interface Data {
	FirstName: string;
	LastName: string;
	Country: string;
	Amount: number;
}

function createData(
	FirstName: string,
	LastName: string,
	Country: string,
	Amount: number
): Data {
	return { FirstName, LastName, Country, Amount };
}

const rows = [
	createData("Perry", "Daniels", "Australia", 131354),
	createData("Tyler", "Chalie", "United States", 140365),
	createData("Chalie ", "Bruno", "United States", 6973),
	createData("Perry", "Daniels", "Australia", 131354),
	createData("Tyler", "Chalie", "South Africa", 140365),
	createData("Perry", "Daniels", "United States", 131354),
	createData("Chalie ", "Bruno", "United States", 6973),
	createData("Puth", "Pedri", "Australia", 32734),
	createData("Perry", "Daniels", "South Africa", 131354),
];

export default function StickyHeadTable() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(7);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper
			sx={{ width: "100%", overflow: "hidden" }}
			className="!bg-[#1c1e28] !text-white"
		>
			<TableContainer sx={{ maxHeight: 400 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
									className="!bg-[#131520] !text-white"
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>

					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow
										className="hover:!bg-[#0f1014]"
										role="checkbox"
										tabIndex={-1}
										key={row.FirstName}
									>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell
													className=" !text-white"
													key={column.id}
													align={column.align}
												>
													{column.format && typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				className="!text-white "
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
