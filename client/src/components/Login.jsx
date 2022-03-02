import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/users";
import { toast } from "react-toastify";

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const user = { username, password }
    const resp = await loginUser(user)
    props.setCurrentUser(resp)
    toast("Succesfully Log In")
    navigate('/')
  }

  return (
    <div class="px-14 bg-slate-200 grid justify-items-center py-24">
      <form onSubmit={handleLogin} class="w-full max-w-lg">
        <div class="w-full px-3 mb-6">
          <input type='text' placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div class="w-full px-3 mb-6">
          <input type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">Login</button>
    </form>
    </div>
  )
}