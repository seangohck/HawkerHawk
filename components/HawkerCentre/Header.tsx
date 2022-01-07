import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Header = () => (
	<AppBar>
		<Toolbar>
			<RestaurantMenuIcon sx={{ mr: 2 }} />
			<Typography variant='h6' color='inherit' noWrap>
				<Link href='/'>
					<a
						style={{
							textDecoration: 'none',
							color: 'inherit',
						}}
					>
						HawkerHawk
					</a>
				</Link>
			</Typography>
		</Toolbar>
	</AppBar>
);
export default Header;
