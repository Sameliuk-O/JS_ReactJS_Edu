import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { Layout } from "../../components/layout/Layout";
import { getUserToDoes } from "../utils";


export const User = () => {
    const {idUser} = useParams();
    const [userToDoes, setUserToDoes] = useState([]);

    useEffect(() => {
        getUserToDoes(idUser).then(data => setUserToDoes(data)).catch((e) => {
            console.log(e)
        })
    }, [idUser])

    return (
        <Layout>
            <div>
                {userToDoes?.map(({id, title}) =>
                    <div key={id}>
                        <NavLink to={`/users/${idUser}/todo/${id}`}>
                            {title}
                        </NavLink>
                    </div>
                )}
            </div>
        </Layout>
    )
}