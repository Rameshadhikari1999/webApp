import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div className="max-[100vw]: overflow-x-hidden">
      <header className='w-full fixed z-40'>
        <Header/>
      </header>
      <main className='w-full md:ml-[25%] lg:ml-0 lg:mt-28 lg:w-full bg-red-400'>
      <Main/>
      </main>
    </div>
  )
}

export default App
