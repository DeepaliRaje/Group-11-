import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='w-full flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>The checkout process was smooth and secure. Plus, I got my order earlier than expected! Customer support was super helpful and responsive. Made my shopping experience stress-free.</p>
          <p>The product exceeded my expectations — great value for the price!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>our mission is to make online shopping effortless, enjoyable, and accessible for everyone. We are committed to delivering top-quality products, exceptional customer service, and a seamless experience from browsing to checkout. Every decision we make is driven by one goal — to exceed our customers' expectations and earn their trust, one purchase at a time.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quantity Assurance:</b>
          <p className='text-gray-600'>
          we are dedicated to providing reliable quantity assurance so our customers always get exactly what they ordered — no surprises, no shortages. Our mission is to maintain precise inventory management, real-time stock updates, and seamless order fulfillment to ensure every product, in every size and quantity, is ready when you need it. Your trust is our priority, and consistency is our promise.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
          convenience is at the heart of everything we do. Our mission is to simplify the shopping experience by offering an intuitive interface, fast navigation, flexible payment options, and quick delivery — all from the comfort of your home. Whether you're shopping on a break or browsing late at night, we're here to make every step smooth, stress-free, and satisfying.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
          we believe that great service builds lasting relationships. Our mission is to provide exceptional customer support that goes beyond expectations — whether it’s answering questions, resolving issues, or simply being there when you need us. With a team that truly cares, we aim to make every interaction personal, prompt, and positive, ensuring you feel valued at every step of your journey with us.
          </p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About