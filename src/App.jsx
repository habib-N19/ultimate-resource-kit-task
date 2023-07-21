import NavBar from './components/NavBar/NavBar'
import Profile from './components/ProfileInfo/Profile'

const App = () => {
  return (
    <div className='flex w-full h-full bg-white border rounded-lg'>
      <NavBar></NavBar>
      <Profile></Profile>
    </div>
  )
}

export default App
