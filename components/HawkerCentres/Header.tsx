import { AppBar, Toolbar, Typography } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SearchBar from '@components/HawkerCentres/SearchBar';
const Header = ({ setFilter }: { setFilter: React.Dispatch<React.SetStateAction<string>> }) => (
	<AppBar>
		<Toolbar variant='dense'>
			<RestaurantMenuIcon sx={{ mr: 2 }} />
			<Typography variant='h6' color='inherit'>
				HawkerHawk
			</Typography>
			<SearchBar setFilter={setFilter} />
		</Toolbar>
	</AppBar>
);
export default Header;
