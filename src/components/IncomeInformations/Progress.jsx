import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Progress = () => {
  return (
    <div className='h-fit'>
      <h4 className='mb-2 text-xl font-bold text-black text-start'>
        How do I compare my peers?
      </h4>
      <p className='mb-6 text-sm'>
        These numbers represent current goal achievement
      </p>
      <div className='flex flex-col justify-between md:flex-row'>
        <div className='space-y-2 divide-y'>
          <div className='flex items-center justify-center'>
            <h3>Age:</h3>
            <select className='w-full max-w-xs select select-sm select-ghost'>
              <option disabled selected>
                Select Age
              </option>
              <option>Under 25</option>
              <option>Under 30</option>
              <option>Under 35</option>
            </select>
          </div>
          <div className='flex items-center justify-center'>
            <h3>Salary: </h3>
            <select className='w-full max-w-xs select select-sm select-ghost'>
              <option disabled selected>
                Select Salary
              </option>
              <option>K 20 - K 30</option>
              <option>K 20 - K 30</option>
              <option>K 20 - K 30</option>
            </select>
          </div>
          <div className='flex items-center justify-center'>
            <h3>Gender:</h3>
            <select className='w-full max-w-xs select select-sm select-ghost'>
              <option disabled selected>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        {/* progress bar */}
        <div className='flex gap-3'>
          <div className='w-16' label='default'>
            <CircularProgressbar
              value={78}
              text='78%'
              strokeWidth={10}
            ></CircularProgressbar>
            <p className='text-sm'>Average</p>
          </div>
          <div className='w-16' label='default'>
            <CircularProgressbar
              value={95}
              text='95%'
              strokeWidth={10}
            ></CircularProgressbar>
            <p className='text-sm'>Top</p>
          </div>
          <div className='w-16' label='default'>
            <CircularProgressbar
              value={59}
              text='59%'
              strokeWidth={10}
            ></CircularProgressbar>
            <p className='text-sm'>Me</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress
