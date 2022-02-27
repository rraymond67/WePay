import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/users";

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      const user = { username, password }
      const resp = await loginUser(user)

      navigate('/')
    }}>
      <input type='text' value={username} onChange={ (e)=> setUsername(e.target.value)}/>
      <input type='password' value={password} onChange={(e) => setUsername(e.target.value)} />
      <button>Login</button>
    </form>
  )
}