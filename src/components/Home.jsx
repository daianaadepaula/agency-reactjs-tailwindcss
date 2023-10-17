import { Carousel } from 'flowbite-react'
import React from 'react'

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'

export const Home = () => {
	return (
		<>
			<section className='bg-neutralSilver'>
				<div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>

					<Carousel className='w-full mx-auto'>

						<div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
							<div className='md:w-1/2'>
								<img src={banner1} alt="" />
							</div>
							<div className='md:w-1/2 flex flex-col items-center justify-center md:items-start'>
								<h1 className='home-h1'>
									Lessons and insights <br /> <span className='text-brandPrimary leading-snug'>from 8 years</span>
								</h1>
								<p className='text-neutralGrey text-base mb-8 text-center md:text-left'>
									Where to grow your business as a photographer: site or social media?
								</p>
								<button className='btn-primary'>
									Register
								</button>
							</div>
						</div>

						<div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
							<div className='md:w-1/2'>
								<img src={banner2} alt="" />
							</div>
							<div className='md:w-1/2 flex flex-col items-center justify-center md:items-start'>
								<h1 className='home-h1'>
									Learn and Earn <br /> <span className='text-brandPrimary leading-snug'>in 4 Months</span>
								</h1>
								<p className='text-neutralGrey text-base mb-8 text-center md:text-left'>
									Where to grow your business as a photographer: site or social media?
								</p>
								<button className='btn-primary'>
									Register
								</button>
							</div>
						</div>

						<div className="my-14 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
							<div className='md:w-1/2'>
								<img src={banner3} alt="" />
							</div>
							<div className='md:w-1/2 flex flex-col items-center justify-center md:items-start'>
								<h1 className='home-h1'>
									Lets and insights <br /> <span className='text-brandPrimary leading-snug'>from 6 years</span>
								</h1>
								<p className='text-neutralGrey text-base mb-8 text-center md:text-left'>
									Where to grow your business as a photographer: site or social media?
								</p>
								<button className='btn-primary'>
									Register
								</button>
							</div>
						</div>
						
					</Carousel>

				</div>
			</section>
		</>
	)
}
