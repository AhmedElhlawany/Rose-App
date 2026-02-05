'use client';

import React, { useState } from 'react';
import RememberMe from './remeber-me';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react'
import { Input } from '@/components/ui/input';

export default function LoginForm() {

   const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = async () => {
    await signIn('credentials', {
      email,
      password,
      rememberMe,
      redirect: true,
      callbackUrl: '/dashboard',
    })
  }

  return (
    <div>
      <div className="flex flex-col gap-4 pb-3">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <RememberMe checked={rememberMe} onChange={setRememberMe} />
      <Button onClick={handleLogin} className="mt-4 w-full">
        Login
      </Button>
    </div>
  );
}
