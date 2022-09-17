import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

const useNewUser = (baseURL, user) => {
    const [response, setResponse] = useState(null)
    useEffect(() => {
        const email = user?.user?.email
        // if (email) {
        //     fetch(baseURL, {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ email: user?.user?.email })
        //     })
        //         .then(res => console.log(res))
        // }

        // with AXIOS
        if (email) {
            axios.post(baseURL, { email })
                .then(res => console.log(res))
        }
    }, [baseURL, user])
    // console.log(user?.user);
    // console.log(user?.user?.email);

    return { response }
}

export default useNewUser