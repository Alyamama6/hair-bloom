import { useState } from "react"

export default function Login_test() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        alert("Login Successful")
    }

    return(
        <>
            <h2>Login Form</h2>

            <form onSubmit={handleLogin}>

                <input
                    data-testid="login-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    data-testid="login-password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button data-testid="login-btn">
                    Login
                </button>

            </form>
        </>
    )
}