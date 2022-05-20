import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='w-full text-white bg-my-footer-color mt-20'>
            <div className="w-full max-w-screen-lg px-8 md:px-0 mx-auto">
                <div className='w-full py-20'>
                    <div className="w-full grid grid-cols-4 gap-4">
                        <div className="w-full flex flex-col">
                            <h3 className="text-2xl text-neutral-700 font-semibold">
                                Fluid music
                            </h3>
                            <Link href="/">
                                <a className="text-neutral-400 mt-2">
                                    Accueil
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="text-neutral-400 mt-2">
                                    A propos
                                </a>
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <h3 className="text-2xl text-neutral-700 font-semibold">
                                Legalite
                            </h3>
                            <Link href="/">
                                <a className="text-neutral-400 mt-2">
                                    Politique de confidentialite
                                </a>
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <h3 className="text-2xl text-neutral-700 font-semibold">
                                Reseaux sociaux
                            </h3>
                            <Link href="#">
                                <a className="text-neutral-400 mt-2">
                                    Twitter
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="text-neutral-400 mt-2">
                                    Facebook
                                </a>
                            </Link>
                        </div>
                        <div className="w-full flex flex-col">
                            <Link href="#">
                                <a className="mt-2">
                                    <Image width={393} height={162} objectFit="contain" placeholder="blur" blurDataURL="/images/vendors/google-play-badge.png" src="/images/vendors/google-play-badge.png" alt="Google play download"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="w-full text-neutral-400 text-center">
                            Copyright © 2022, Fluid music
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;