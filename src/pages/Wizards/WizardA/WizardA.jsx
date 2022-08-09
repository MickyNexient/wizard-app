import {
    Routes,
    Route,
    Outlet,
    useNavigate,
    Link,
} from "react-router-dom";

import { FormA, FormB } from "./Forms";

export const WizardA = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>WizardA</div>
            <Link to='page1'>Page 1</Link>
            <Link to='page2'>Page 2</Link>
            <Routes>
                <Route path='/page1' element={<FormA />} />
                <Route path='/page2' element={<FormB />} />
                <Route
                    path="*"
                    element={
                        <div>
                            <p>Page not found</p>
                        </div>
                    }
                />
            </Routes>
            <Outlet />
        </>
    )
}