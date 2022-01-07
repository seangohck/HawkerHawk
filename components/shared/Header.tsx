import { AppBar, Toolbar, Typography } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SearchBar from '@components/shared/SearchBar';
import Link from 'next/link';
const Header = ({ setFilter, searchTerm }: { setFilter: React.Dispatch<React.SetStateAction<string>>; searchTerm: string }) => (
	<AppBar>
		<Toolbar variant='dense'>
			<RestaurantMenuIcon sx={{ mr: 2 }} />
			<Link href='/'>
				<a
					style={{
						textDecoration: 'none',
						color: 'inherit',
					}}
				>
					<Typography variant='h6' color='inherit'>
						HawkerHawk
					</Typography>
				</a>
			</Link>

			<SearchBar setFilter={setFilter} searchTerm={searchTerm} />
		</Toolbar>
	</AppBar>
);
export default Header;
