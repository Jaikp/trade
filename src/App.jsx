import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Input from './components/Input'

function App() {
  
  const [order, setorder] = useState(true);

  const [form,setForm]=useState({
    Quantity:"",
    Contact:"",
    Price_per_kWh:"",
    totalprice:""
  });
  

  const handleClick = ()=>{
    setorder(!order);
  }
  const handleChange = (e)=>{
    const name = e.target.name;
    setForm((prevForm)=>({
        ...prevForm,
        [name] : e.target.value
    }));
  }

  return (
    <>
    <div>
        <Navbar/>
        {order?(<div className='flex flex-col items-center'>
        <h1 className='text-center text-2xl from-neutral-800 mt-20'>Sell Your Electricity</h1>
          <div className='w-1/2 shadow-lg p-10 rounded-xl'>
            <p className='text-xl'>Input Details</p>
            <Input handleChange={handleChange} label={'Quantity'} placeholder={'138'}/>
            <Input handleChange={handleChange} label={'Price_per_kWh'} placeholder={'138'}/>
            <Input handleChange={handleChange} label={'Contact'} placeholder={''}/>
          </div>

          <div className='bg-[#F2CDCE] w-1/2 rounded-xl p-10 shadow-lg mt-4'>
              <p className='text-lg'>Order Summary</p>
              <div className='flex justify-between mt-2 text-'>
                <p>Quantity</p>
                <p>{form.Quantity} kWh</p>
              </div>
              <div className='flex justify-between mt-2'>
                <p>Price per kWh:</p>
                <p>₹ {form.Price_per_kWh}</p>
              </div>
              <div className='flex justify-between mt-2'>
                <p>Total Price:</p>
                <p>₹ {form.Quantity* form.Price_per_kWh}</p>
              </div>
              <div className='flex justify-between mt-2'>
                <p>Contact:</p>
                <p>{form.Contact}</p>
              </div>
          </div>
          <button onClick={handleClick} className='bg-[#CC1211] text-white  rounded-full px-4 py-2 mt-4'>Submit Order</button>
        </div>):(
          <div className='flex justify-center'>
            <div className='w-1/2 shadow-lg p-5 rounded-xl mt-20'>
              <h1 className='text-xl font-semibold'>Order Confirmation</h1>
              <p className='my-5'>Your electricity order has been successfully placed!</p>

              <div>
                  <p className="font-bold mb-2">Order Details:</p>
                  <p>Order Number: 32478937</p>
                  <p>Order Date: 28th August 2024</p>
                  <p>Order Amount: {form.Quantity} kWh</p>
                  <p>Total Cost: ₹ {form.Quantity* form.Price_per_kWh}</p>
              </div>
              <div className='mt-4'>
                  <p className='font-bold mb-2'>Contact Information:</p>
                  <p>Phone: {form.Contact}</p>
              </div>
              <button onClick={handleClick} className='bg-[#CC1211] text-white  rounded-full px-4 py-2 mt-4'>Return to home</button>
            </div>
          </div>
        )}
    </div>
      
    </>
  )
}

export default App
