import { useState } from 'react'
import { registerUser } from '../services/users'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    const user = { username, email, password }
    const resp = await registerUser(user)
    props.setCurrentUser(resp)
    navigate('/')
  }

  return (
    <div class="px-14 bg-slate-300 grid justify-items-center py-24">
      <form onSubmit={handleRegister} class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-300 mb-20">
          <div class="w-full px-3 mb-6">
            <input type='text'onChange={(e) => setUsername(e.target.value)} value={username} placeholder="username" />
          </div>
          <div class="w-full px-3 mb-6">
            <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email" />
          </div>
          <div class="w-full px-3 mb-6">
            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password" />
          </div>
      </div>
      <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
      </form>
      </div>
  )
}
