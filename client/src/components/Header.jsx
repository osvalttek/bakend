import{useContext} from 'react'
import { chatContext } from '../context/ChatProvider'


const Header = () => {
  const {roomSelected}=useContext(chatContext)
  return (
    <header className='h-1/4'>{roomSelected}</header>
  )
}

export default Header