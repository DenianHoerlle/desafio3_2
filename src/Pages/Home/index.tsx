import {useContext} from "react";
import {AuthContext} from "../../context";

export default function Init() {
    const {user} = useContext(AuthContext);

    return (
        <section>
            <h3>{user}</h3>
            <div></div>
        </section>
    );
}