import user from '../../assets/user.jpeg'
const Profile = () => {
  const transcations = [
    {
      _id: 1,
      date: '2020 - 08 - 07',

      name: 'Bank - XXX11'
    },
    {
      _id: 2,
      date: '2020 - 08 - 07',

      name: 'Bank - XXX11'
    },
    {
      _id: 3,
      date: '2020 - 08 - 07',

      name: 'Bank - XXX11'
    }
  ]
  return (
    <section className='p-3 space-y-5 border'>
      {/* profile image  */}
      <div className='flex items-center gap-3 mx-auto'>
        <div className='p-4 mx-auto border avatar'>
          <div className='w-20 rounded-full'>
            <img src={user} />
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-black'>Hi Mike,</h1>
          <p>Welcome Back.</p>
        </div>
      </div>
      {/* Balance */}
      <div className='w-full px-6'>
        <h5 className='font-bold'>Today</h5>
        <h1 className='text-2xl font-bold'>$ 19,892</h1>
        <p className='mb-2'>Account Balance</p>
        <h3 className='text-lg font-bold'>$4,000</h3>
        <p className='mb-2'>Year-to-Date-Contribution</p>
        <h3 className='text-lg font-bold'>$1892</h3>
        <p className='mb-2'>Total Interest</p>
        {/* select button */}
        <select className='w-full text-white bg-blue-600 max-w-fit select select-bordered'>
          <option disabled selected>
            I want to
          </option>
          <option>Options</option>
          <option>Options</option>
          <option>Options</option>
        </select>
      </div>
      {/* transaction */}
      <div className='w-full px-6'>
        <h4 className='mb-3 font-bold text-slate-700'>Recent Transactions</h4>
        {transcations.map(transaction => (
          <div key={transaction._id} className='mb-3'>
            <p>{transaction.date}</p>
            <h4 className='font-bold text-slate'>
              Withdrawal Transfer to {transaction.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Profile
