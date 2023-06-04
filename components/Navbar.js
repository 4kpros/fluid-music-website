import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

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
        <nav className='w-full text-white bg-gradient-to-r from-black to-[#616161]'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className='w-full flex justify-between items-center py-2'>
                    <Link href={`/`} className="flex items-center">
                        <Image 
                            width={60} 
                            height={50} 
                            src="/images/fluid-music-icon-white.svg" 
                            alt="site logo"
                            className='w-8 object-contain lg:w-12'
                        />
                        <h1 className="text-md md:text-lg lg:text-xl font-bold">{appName}</h1>
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
                        <Link 
                            href={link1Href} 
                            passHref 
                            scroll={false}
                            className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link1Href === router.pathname ? `` : ` `}`}
                        >
                            {link1}
                            {
                                link1Href === router.pathname && (
                                    <motion.div
                                        layoutId="my-navlink-underline"
                                        className="w-full border border-my-main-color "
                                    />
                                )
                            }
                        </Link>
                        <Link 
                            href={link2Href} 
                            passHref 
                            scroll={false}
                            className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link2Href === router.pathname ? `` : ` `}`}
                        >
                            {link2}
                            {
                                link2Href === router.pathname && (
                                    <motion.div
                                        layoutId="my-navlink-underline"
                                        className="w-full border border-my-main-color "
                                    />
                                )
                            }
                        </Link>
                        <Link 
                            href={link3Href} 
                            passHref 
                            scroll={false}
                            className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link3Href === router.pathname ? `` : ` `}`}
                        >
                            {link3}
                            {
                                link3Href === router.pathname && (
                                    <motion.div
                                        layoutId="my-navlink-underline"
                                        className="w-full border border-my-main-color "
                                    />
                                )
                            }
                        </Link>
                    </div>
                </div>
                <div className='w-full flex justify-end pb-4 md:hidden'>
                    <div className={`w-auto text-right ${showMore ? '' : 'hidden'}`}>
                        <div className='w-auto flex flex-col space-y-2'>
                            <Link 
                                href={link1Href} 
                                passHref 
                                scroll={false}
                                className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link1Href === router.pathname ? `` : ` `}`}
                            >
                                {link1}
                                {
                                    link1Href === router.pathname && (
                                        <motion.div
                                            layoutId="my-navlink-underline-mobile"
                                            className="w-full border border-my-main-color "
                                        />
                                    )
                                }
                            </Link>
                            <Link 
                                href={link2Href} 
                                passHref 
                                scroll={false}
                                className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link2Href === router.pathname ? `` : ` `}`}
                            >
                                {link2}
                                {
                                    link2Href === router.pathname && (
                                        <motion.div
                                            layoutId="my-navlink-underline-mobile"
                                            className="w-full border border-my-main-color "
                                        />
                                    )
                                }
                            </Link>
                            <Link 
                                href={link3Href} 
                                passHref 
                                scroll={false}
                                className={`flex flex-col relative hover:text-neutral-400 hover:border-neutral-400 ${link3Href === router.pathname ? `` : ` `}`}
                            >
                                {link3}
                                {
                                    link3Href === router.pathname && (
                                        <motion.div
                                            layoutId="my-navlink-underline-mobile"
                                            className="w-full border border-my-main-color "
                                        />
                                    )
                                }
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;