import NavBar from "../../Components/NavBar";

export default function Init() {
    const {user} = useContext(AuthContext);

    return (
        <NavBar/>
    );
}