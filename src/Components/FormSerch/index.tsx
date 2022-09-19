interface Props{
    handleSearch?: ()=>void;
}

export default function FormSerch({handleSearch?}:Props) {
    return(
        <form>
            <input type="text" placeholder="Search.." name="search" />
        </form>

    );
}

