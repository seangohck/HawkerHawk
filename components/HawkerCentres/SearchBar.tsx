import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setFilter }: { setFilter: React.Dispatch<React.SetStateAction<string>> }) => (
	<div style={{ marginLeft: '8rem' }}>
		<TextField
			autoFocus
			onChange={(e) => setFilter(e.target.value)}
			id='outlined-basic'
			label='Search for a hawker centre'
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				),
			}}
			variant='standard'
		/>
	</div>
);

export default SearchBar;
