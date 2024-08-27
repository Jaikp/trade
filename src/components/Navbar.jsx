import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-10 py-5 shadow-md'>
        <div className='text-2xl'>
            PowerSell
        </div>
        <div className='flex gap-10 text-lg pr-32'>
            <div>Home</div>
            <div>Sell Electricity</div>
            <div>Order</div>
        </div>
    </div>
  )
}

export default Navbar