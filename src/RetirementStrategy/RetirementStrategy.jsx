import { FaAngleRight } from 'react-icons/fa'
const RetirementStrategy = () => {
  return (
    <section className='p-2 space-y-6 text-black'>
      <h3 className='text-2xl font-bold '>Retirement Strategy</h3>
      <div>
        <label className='block' htmlFor='employee'>
          Employee Contribution
        </label>
        <input type='range' name='employee' id='' />

        <label className='block' htmlFor='employee'>
          Retirement Age{' '}
        </label>
        <input type='range' name='employee' id='' />
      </div>
      <div>
        <p className='inline-flex'>Employer Contribution </p>{' '}
        <span className='ml-2'>8.4%</span>
      </div>
      <div>
        <p className='inline-flex'>Interest Rate </p>{' '}
        <span className='ml-2'>5%</span>
      </div>
      <button className='w-9/12 btn btn-primary'>Update</button>
      <div className='hidden md:inline-block'>
        <a
          href='#'
          className='flex items-center justify-center w-full text-blue-500'
        >
          View Help Docs <FaAngleRight />
        </a>

        <div className='pl-2 border-l-2 border-blue-600 '>
          <p>Are you considering a </p>
          <h4 className='font-bold'>Housing Advance?</h4>
          <p>Limited time reduced interest</p>
          <a
            href='#'
            className='flex items-center justify-center w-full text-blue-500'
          >
            Learn More <FaAngleRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default RetirementStrategy
