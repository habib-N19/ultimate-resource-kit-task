import RetirementStrategy from './RetirementStrategy/RetirementStrategy'
import IncomeInfo from './components/IncomeInformations/IncomeInfo'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/ProfileInfo/Profile'

const App = () => {
  return (
    <div className='flex flex-col w-full h-full bg-white border rounded-lg md:flex-row'>
      <NavBar></NavBar>
      <Profile></Profile>
      <IncomeInfo></IncomeInfo>
      <RetirementStrategy />
    </div>
  )
}

export default App
