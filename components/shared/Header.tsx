//type
import HeaderProps from '@interfaces/shared/Header';
//lib
import Link from 'next/link';
//mui
import { AppBar, Toolbar, Typography } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
//components
import SearchBar from '@components/shared/SearchBar';

/**
 * Renders the Header for the pages
 *
 * @param {HeaderProps} - The setFilter function and the searchTerm
 * @returns {JSX.Element} - The header component
 */
const Header = ({ setFilter, searchTerm }: HeaderProps): JSX.Element => (
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
