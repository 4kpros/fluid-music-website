import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

const Footer = () => {
    const { t } = useTranslation('common')
  
    const appName = t('appName')

    const home = t('home')
    const contribute = t('contribute')
    const about = t('about')

    const legal = t('legal')
    const policy = t('policy')

    const socialMedia = t('socialMedia')
    const twitter = t('twitter')
    const facebook = t('facebook')

    const playstoreImg = t('playstoreImg')

    const copyRight = t('copyRight')

    return (
        <footer className='w-full text-white bg-my-footer-color'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className='w-full py-10 px-6 lg:px-0'>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="w-full flex flex-col">
                            <h3 className="text-neutral-700 font-semibold">
                                {appName}
                            </h3>
                            <Link 
                                href="/" 
                                className="text-neutral-400 transition-all hover:text-white hover:underline hover:opacity-80 mt-2"
                            >
                                {home}
                            </Link>
                            <Link 
                                href="/contributions" 
                                className="text-neutral-400 transition-all hover:text-white hover:underline hover:opacity-80 mt-2"
                            >
                                {contribute}
                            </Link>
                            <Link 
                                href="/about" 
                                className="text-neutral-400 transition-all hover:text-white hover:underline hover:opacity-80 mt-2"
                            >
                                {about}
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <h3 className="text-neutral-700 font-semibold">
                                {legal}
                            </h3>
                            <Link 
                                href="/policy" 
                                className="text-neutral-400 transition-all hover:text-white hover:underline hover:opacity-80 mt-2"
                            >
                                {policy}
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <h3 className="text-neutral-700 font-semibold">
                                {socialMedia}
                            </h3>
                            <Link 
                                href="#" 
                                target="_blank"
                                className="text-neutral-400 transition-all hover:text-white hover:underline hover:opacity-80 mt-2 hidden" 
                            >
                                {twitter}
                            </Link>
                            <Link 
                                href="https://www.facebook.com/fluidmusicsoft" 
                                target="_blank"
                                className="text-neutral-400 transition-all hover:text-white hover:underline hover:opacity-80 mt-2" 
                            >
                                {facebook}
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <Link 
                                href="#" 
                                className="w-auto mt-2" 
                                target="_blank"
                            >
                                <Image 
                                    width={250} 
                                    height={80} 
                                    src={playstoreImg} 
                                    alt="Google Play Store"
                                    className='w-auto h-20 object-contain'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="w-full text-neutral-400 text-center">
                            {copyRight}, {appName}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;