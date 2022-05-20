import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Image from 'next/image'

const links = [
    {
        name: 'Accueil',
        href: '/',
    },
    {
        name: 'A propos',
        href: '/about',
    }
]

const Navbar = () => {
    
    const router = useRouter()

    return (
        <nav className='w-full text-white bg-gradient-to-r from-black to-[#616161]'>
            <div className="w-full max-w-screen-lg px-8 mx-auto">
                <div className='w-full flex justify-between items-center py-4'>
                    <Link href={`/`}>
                        <a className="flex items-center">
                            <Image width={60} height={50} objectFit="contain" placeholder="blur" blurDataURL="/fluid-music-icon-white.svg" src="/fluid-music-icon-white.svg" alt="site logo"/>
                            <h1 className="text-xl font-bold mx-4">FLUID MUSIC</h1>
                        </a>
                    </Link>
                    <div className="hidden md:flex space-x-20">
                        {
                            links.map((link, index) => {
                                return(
                                    <Link key={index} href={link.href} passHref scroll={false}>
                                        <a className={`flex flex-col text-xl relative hover:text-neutral-400 hover:border-neutral-400 ${link.href === router.pathname ? ` boder-b border-b-white border-b-2` : ` `}`}>
                                            {link.name}
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;