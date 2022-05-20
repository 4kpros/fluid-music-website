import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const title = 'Erreur 404 !'
const description = "Page non existante !"

export default function Custom404() {
    return (
    <div>
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <div className="w-full text-white">
            <section className="w-full">
                <div className="w-full max-w-screen-xl mx-auto px-4">
                    <div className="w-full min-h-[80vh] flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-128 h-128">
                                {/* <Image width={128} height={128} objectFit="scale-down" placeholder="blur" priority blurDataURL="/images/svg/alerts/warn.webp" src="/images/svg/alerts/warn.webp" alt=""/> */}
                            </div>
                            <h3 className="text-center text-3xl font-semibold">
                                ERREUR 404 !
                            </h3>
                            <p className="text-center text-xl text-gray-400 mt-4">
                                Cette page semble ne pas exister. Veillez retourner à la page d accueil.
                            </p>
                            <div className="mt-12">
                                <Link href="/">
                                    <button className="text-lg font-bold bg-white rounded-lg text-black px-6 py-2 text-center focus:outline-none">
                                        Page d accueil
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
  }