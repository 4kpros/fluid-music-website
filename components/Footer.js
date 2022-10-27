import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

const Footer = () => {
    const { t } = useTranslation('common')
  
    const appName = t('appName')

    const home = t('home')
    const contributions = t('contributions')
    const about = t('about')

    const legal = t('legal')
    const policy = t('policy')

    const socialMedia = t('socialMedia')
    const twitter = t('twitter')
    const facebook = t('facebook')

    const downloadPlayStoreImageSrc = t('downloadPlayStoreImageSrc')
    const downloadPlayStoreImageAlt = t('downloadPlayStoreImageAlt')

    const copyRight = t('copyRight')

    return (
        <footer className='w-full text-white bg-my-footer-color mt-20'>
            <div className="w-full max-w-screen-lg px-8 mx-auto">
                <div className='w-full py-20'>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="w-full flex flex-col">
                            <h3 className="text-neutral-700 font-semibold">
                                {appName}
                            </h3>
                            <Link href="/">
                                <a className="text-neutral-400 mt-2">
                                    {home}
                                </a>
                            </Link>
                            <Link href="/contributions">
                                <a className="text-neutral-400 mt-2">
                                    {contributions}
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="text-neutral-400 mt-2">
                                    {about}
                                </a>
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <h3 className="text-neutral-700 font-semibold">
                                {legal}
                            </h3>
                            <Link href="/policy">
                                <a className="text-neutral-400 mt-2">
                                    {policy}
                                </a>
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <h3 className="text-neutral-700 font-semibold">
                                {socialMedia}
                            </h3>
                            <Link href="#">
                                <a className="text-neutral-400 mt-2" target="_blank">
                                    {twitter}
                                </a>
                            </Link>
                            <Link href="https://www.facebook.com/fluidmusicsoft">
                                <a className="text-neutral-400 mt-2" target="_blank">
                                    {facebook}
                                </a>
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <Link href="#">
                                <a className="mt-2" target="_blank">
                                    <Image width={393} height={162} objectFit="contain" src={downloadPlayStoreImageSrc} alt={downloadPlayStoreImageAlt}/>
                                </a>
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