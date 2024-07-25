import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <div id='home'  className="max-w-[100vw] overflow-x-hidden">
      <header className='w-full'>
        <Header/>
      </header>
      <main className='w-full mt-[-100vh]  md:ml-[20%] lg:ml-0  lg:w-full'>
      <Main/>
      </main>
    </div>
  )
}

export default App
