import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setFilter, searchTerm }: { setFilter: React.Dispatch<React.SetStateAction<string>>; searchTerm: string }) => (
	<TextField
		sx={{ marginX: '2rem' }}
		autoFocus
		onChange={(e) => setFilter(e.target.value)}
		id='outlined-basic'
		label={`Search for ${searchTerm}`}
		InputProps={{
			startAdornment: (
				<InputAdornment position='start'>
					<SearchIcon />
				</InputAdornment>
			),
		}}
		variant='standard'
	/>
);

export default SearchBar;
