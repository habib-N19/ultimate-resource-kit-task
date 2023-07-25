import ChartData from './ChartData'
import Progress from './Progress'

const IncomeInfo = () => {
  return (
    <section className='p-6 space-y-6 md:pb-16 '>
      <div>
        <p className='font-semibold text-blue-500'>REtirement Income</p>
        <h3 className='text-2xl font-bold text-slate-700'>
          Starting Year 2056
        </h3>
      </div>

      <div className='grid grid-cols-2 gap-6 md:grid-cols-3'>
        <div className='col-span-2 pb-2 border-b border-blue-700 md:col-span-1'>
          <h2 className='text-xl font-bold text-slate-800'>$300,000</h2>
          <p>My Goal</p>
        </div>
        <div className='pb-2 border-b border-blue-700'>
          <h2 className='text-xl font-bold text-slate-800'>$300,000</h2>
          <p>My Goal</p>
        </div>
        <div className='pb-2 border-b border-blue-700'>
          <h2 className='text-xl font-bold text-slate-800'>$300,000</h2>
          <p>My Goal</p>
        </div>
      </div>
      <ChartData />
      <Progress />
    </section>
  )
}

export default IncomeInfo
