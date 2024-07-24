import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div id='home'  className="max-w-[100vw] overflow-x-hidden">
      <header className='w-full fixed'>
        <Header/>
      </header>
      <main className='w-full md:ml-[20%] lg:ml-0 lg:mt-28 lg:w-full bg-red-400'>
      <Main/>
      </main>
    </div>
  )
}

export default App
