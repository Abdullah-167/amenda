import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className=" relative bg-slate-50">
      <Container>
        <div className=' pt-16 pb-6 flex justify-between items-center '>
          <div>
            <div className="flex gap-3 items-center mb-6">
              <svg viewBox="0 0 40 40" aria-hidden="true" class="h-10 w-10 flex-none fill-cyan-500"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path></svg>
              <nav className=" text-sm" aria-label="quick links">
                <div className="gap-x-0 lg:gap-x-6">
                  <p className=' cursor-pointer'>
                    <Logo className="" />
                  </p>
                  <p className='pl-4'>Invest at the perfect time.</p>
                </div>
              </nav>
            </div>
            <div className='flex gap-3 font-medium'>
              <p className='hover:bg-[#F5F5F5] px-2 py-1.5 rounded-md transition-all duration-500 cursor-pointer'>Features</p>
              <p className='hover:bg-[#F5F5F5] px-2 py-1.5 rounded-md transition-all duration-500 cursor-pointer'>Reviews</p>
              <p className='hover:bg-[#F5F5F5] px-2 py-1.5 rounded-md transition-all duration-500 cursor-pointer'>Pricing</p>
              <p className='hover:bg-[#F5F5F5] px-2 py-1.5 rounded-md transition-all duration-500 cursor-pointer'>FAQs</p>
            </div>
          </div>
          <div className='svg-strock flex gap-6 hover:bg-black hover:bg-opacity-5 transition-all duration-500 cursor-pointer px-7 py-5 rounded-md'>
            <div className='relative svg-strock'>
              <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" class="absolute transition-all duration-500 h-[95px] w-[95px] -top-2 -left-2 stroke-gray-300 "><path d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8" stroke-width="2" stroke-linecap="round"></path></svg>
              <Image src={'/qr.png'} alt='qr' width={80} height={80} />
            </div>
            <div className='max-w-[250px]'>
              <h2 className='text-xl font-semibold text-gray-700'> Download the app </h2>
              <p>Scan the QR code to download the app from the App Store.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            {/* <Link
              href="https://www.linkedin.com/company/amenda-app/"
              className="group"
              aria-label="Amenda on LinkedIn"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-gray-500 group-hover:fill-gray-700"
              >
                <path
                  id="XMLID_802_"
                  d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                />
                <path
                  id="XMLID_803_"
                  d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                />
                <path
                  id="XMLID_804_"
                  d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                />{' '}
              </svg>
            </Link> */}
          </div>
          <p className="mt-6 text-sm text-gray-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} amenda.
          </p>
        </div>
      </Container>
    </footer>
  )
}
