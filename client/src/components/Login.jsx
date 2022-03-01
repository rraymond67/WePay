import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/users";

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    const user = { username, password }
    const resp = await loginUser(user)
    props.setCurrentUser(resp)

    navigate('/')
  }

  return (
    <form onSubmit={handleLogin}>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  )
}