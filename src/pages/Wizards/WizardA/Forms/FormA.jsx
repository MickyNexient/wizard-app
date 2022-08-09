import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from './FormA.module.css';

export const FormA = () => {
    let [params] = useSearchParams();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setErrors(params.getAll("error"));
        console.info("SEARCH", params.getAll("error"));
    }, [params]);

    useEffect(() => {
        errors?.map((error) => console.info(error));
    }, [errors]);

    return (
        <div>
            <input
                name="firstName"
                type='text'
                className={errors?.some((e) => e == 'firstName') ? styles.error : null} />
            <input name="lastName" type='text'></input>
        </div>
    )
}