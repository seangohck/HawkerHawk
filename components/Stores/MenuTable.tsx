import { StoreMenus } from '@interfaces/supabase';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const MenuTable = ({ menu }: { menu: StoreMenus[] }) => (
	<TableContainer>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Item</TableCell>
					<TableCell>Price</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{menu.map((item) => (
					<TableRow key={item.item_id}>
						<TableCell>{item.item_name}</TableCell>
						<TableCell>{item.item_price}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>
);

export default MenuTable;
