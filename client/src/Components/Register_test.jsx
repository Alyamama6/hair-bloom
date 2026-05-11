import { useState } from "react"

export default function Register_test() {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            alert("Passwords do not match")
            return
        }

        alert("Registration Successful")
    }

    return(
        <>
            <h2>Register Form</h2>

            <form onSubmit={handleRegister}>

                <input
                    data-testid="fullname"
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <br /><br />

                <input
                    data-testid="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    data-testid="phone"
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <br /><br />

                <input
                    data-testid="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <input
                    data-testid="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <br /><br />

                <button data-testid="register-btn">
                    Register
                </button>

            </form>
        </>
    )
}