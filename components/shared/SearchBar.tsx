//type
import SearchBarProps from '@interfaces/shared/SearchBar';
//mui
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

/**
 * Renders the search bar component
 *
 * @param {SearchBarProps} - The setFilter function and the searchTerm
 * @returns {JSX.Element} - The search bar component
 */
const SearchBar = ({ setFilter, searchTerm }: SearchBarProps): JSX.Element => (
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
