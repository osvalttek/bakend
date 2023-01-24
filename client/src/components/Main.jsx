import React from 'react'
import AsideRooms from './AsideRooms'
import ChatContainer from './ChatContainer'

const Main = () => {
  return (
    <main className='flex h-3/4 gap-3'>
        <AsideRooms/>
        <ChatContainer/>
    </main>
  )
}

export default Main