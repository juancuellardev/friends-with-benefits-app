import React from 'react'

function Header() {
  return (
    <header className='container mx-auto flex items-center justify-start gap-10 py-10'>
      <img src="/logo.png" className="h-24" alt="Logo" />
      <h1 className='text-3xl font-bold'>Friends With Benefits</h1>
    </header>
  )
}

export default Header