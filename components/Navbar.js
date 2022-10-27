import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

const Navbar = () => {
    
    const router = useRouter()
    const [showMore, setShowMore] = useState(false);

    const { t } = useTranslation('common')
    const appName = t('appName')

    const link1 = t('link1')
    const link1Href = t('link1Href')
    
    const link2 = t('link2')
    const link2Href = t('link2Href')

    const link3 = t('link3')
    const link3Href = t('link3Href')
    
    function toggleMenu(){
        setShowMore(!showMore)
    }
    
    return (
        <nav className='w-full mx-0 px-0 text-white bg-gradient-to-r from-black to-[#616161]'>
            <div className="w-full max-w-screen-lg px-8 mx-auto">
                <div className='w-full flex justify-between items-center py-2'>
                    <Link href={`/`}>
                        <a className="flex items-center">
                            <Image width={60} height={50} objectFit="contain" placeholder="blur" blurDataURL="/images/fluid-music-icon-white.svg" src="/images/fluid-music-icon-white.svg" alt="site logo"/>
                            <h1 className="text-xl font-bold">{appName}</h1>
                        </a>
                    </Link>
                    <div className='flex md:hidden'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="menu-button"
                            className="h-8 w-8 cursor-pointer md:hidden block"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => toggleMenu()}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link href={link1Href} passHref scroll={false}>
                            <a className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link1Href === router.pathname ? ` boder-b border-b-white border-b-2` : ` `}`}>
                                {link1}
                            </a>
                        </Link>
                        <Link href={link2Href} passHref scroll={false}>
                            <a className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link2Href === router.pathname ? ` boder-b border-b-white border-b-2` : ` `}`}>
                                {link2}
                            </a>
                        </Link>
                        <Link href={link3Href} passHref scroll={false}>
                            <a className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link3Href === router.pathname ? ` boder-b border-b-white border-b-2` : ` `}`}>
                                {link3}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='w-full flex justify-end pb-4 md:hidden'>
                    <div className={`w-auto text-right ${showMore ? '' : 'hidden'}`}>
                        <div className='w-auto flex flex-col space-y-2'>
                            <Link href={link1Href} passHref scroll={false}>
                                <a className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link1Href === router.pathname ? ` boder-b border-b-white border-b-2` : ` `}`}>
                                    {link1}
                                </a>
                            </Link>
                            <Link href={link2Href} passHref scroll={false}>
                                <a className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link2Href === router.pathname ? ` boder-b border-b-white border-b-2` : ` `}`}>
                                    {link2}
                                </a>
                            </Link>
                            <Link href={link3Href} passHref scroll={false}>
                                <a className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link3Href === router.pathname ? ` boder-b border-b-white border-b-2` : ` `}`}>
                                    {link3}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;