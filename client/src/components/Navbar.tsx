import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'
import { Home, ShoppingCart, Bell } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
            {/* left side */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="TrendLama"
                    width={36}
                    height={36}
                    className='w-6 h-6 md:w-9 md:h-9'
                />
                <p className='hidden md:block text-md font-medium tracking-wider'>TRENDLAMA</p>
            </Link>
            {/* right side */}
            <div className='flex items-center gap-6'>
                <SearchBar />
                <Link href="/">
                    <Home className='w-4 h-4 text-gray-6' />
                </Link>
                <Bell className='w-4 h-4 text-gray-6' />
                <ShoppingCart className='w-4 h-4 text-gray-6' />
                <Link href="/login">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar
