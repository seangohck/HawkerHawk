export default interface SearchBarProps {
	setFilter: React.Dispatch<React.SetStateAction<string>>;
	searchTerm: string;
}
