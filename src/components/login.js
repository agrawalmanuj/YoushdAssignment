import React from 'react';
import "./app.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({ email: "", password: "", rememberMe: false });
    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => {
            if (formData.rememberMe)
                localStorage.setItem("rememberMe", `${Date.now()}`);
            localStorage.setItem("access-token", `${Date.now()}`);
            navigate("/")
        }, 1000)

    }
    return (
        <div className='varicalPane loginVerticalPaneDiv'>
            <div className='loginMainDiv'>
                <div className='loginCenteredDiv'>
                    <h2>Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="email" className='loginInput' placeholder='Email'
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <input type="password" className='loginInput' placeholder='Password'
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                className='loginSubmitBtn'
                                type="submit" value="Log In"
                            ></input>
                        </div>
                        <div>
                            <input type="checkbox" className='loginInputCheckbox'
                                value={formData.rememberMe}
                                onChange={() => setFormData({ ...formData, rememberMe: !formData.rememberMe })}
                            />
                            <span className='rememberMe'
                            >Remember Me</span>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login