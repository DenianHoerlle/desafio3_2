interface Props {
    searchInput: string;
    setSearchInput: (searchInput: string) => void;
}

export default function FormSerch({ searchInput, setSearchInput }: Props) {
    return (
        <input type="text" placeholder="Search.." name="search" value={searchInput} onChange={({ target }) => setSearchInput(target.value)} />
    );
}

