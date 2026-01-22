'use client'

import React, { useState } from 'react'
import RememberMe from './remeber-me'
import { useRouter } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'

export default function LoginForm() {
            const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

     const handleLogin = () => {

    const user = "userLogged"

    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      sessionStorage.setItem('user', JSON.stringify(user))
    }

    router.push('/dashboard')
  }

  return (
    <div>
      <RememberMe checked={rememberMe}
        onChange={setRememberMe} />
        <Button onClick={handleLogin} className="mt-4 w-full">Login</Button>
       
    </div>
  )
}
