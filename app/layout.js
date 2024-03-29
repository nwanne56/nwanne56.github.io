import Link from 'next/link';
import { Inter } from 'next/font/google';
import getNewestFileDate from '@/components/getNewestFileDate';

import dynamic from 'next/dynamic'

const DonationButton = dynamic(
  () => import('../components/Donation'),
  { ssr: false }
)

const inter = Inter({ subsets: ['latin'] });

import './globals.css'

export const metadata = {
  title: 'nwanne',
  description: 'personal site for projects and posts',
}

const header = (
  <header>
    <div className="text-center bg-[#4E4950] p-4 my-6 rounded-lg shadow-sm">
      <Link href='/'>
        <p className="text-2xl text-[#EFF0EF] text-shadow">nwanne56</p>
      </Link>

      <div className="text-white font-medium rounded-lg px-5 pt-4 text-center inline-flex items-center  mr-2 mb-2">
        <svg className= "drop-shadow-svg w-4 h-4 mr-2 fill-[#7D767F]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
        </svg>
        <a href="https://github.com/nwanne56" className="text-shadow text-md text-[#7D767F]">github link</a>
      </div>

    </div>
  </header>
);


const date = getNewestFileDate(".").toString();

const footer = (
  <header>
    <div className='my-4 p-2 text-[#7D767F88] text-center border-t border-[#E2DFE0] text-xs'>
      <p>last edited: {date}</p>
      <p>hosted on <a className='font-bold' href='https://pages.github.com'>github pages</a>, made with next.js </p>
    </div>
  </header>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-neutral-200 ease-in-out duration-500" suppressHydrationWarning>
      <body className={inter.className}>
        <div className='mx-auto max-w-5xl px-6'>
          {header}
          {children}
          <div>
            <DonationButton/>
          </div>
          {footer}
        </div>
      </body>
    </html>
  )
}
