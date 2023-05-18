import { useState, useContext } from 'react';  // Import useContext
import { AuthContext } from './AuthContext'; // Import AuthContext
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(AuthContext); // Get setCurrentUser from context

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    const authenticateUser = () => {
        axios.get('http://localhost:8000/api/auth/get_csrf/')
            .then(response => {
                const csrfToken = response.data.token;

                axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

                axios.post('http://localhost:8000/api/auth/login/', loginState)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.message === 'Login successful') {
                            const user = response.data.user;
                            setCurrentUser(user); // Set currentUser to the authenticated user
                            localStorage.setItem('currentUser', JSON.stringify(user)); // Store user info in localStorage
                            navigate("/");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>

            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />

        </form>

    )
}
