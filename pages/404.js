import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

export default function Custom404() {
    const { t } = useTranslation('404')

    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const error = t('error')
    const errorMessage = t('errorMessage')
    const homePage = t('homePage')

    return (
    <div>
        <NextSeo title={pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
        <div className="w-full min-h-[80vh] text-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="w-full flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-center font-semibold">
                            {error} !
                        </h3>
                        <p className="text-center text-gray-400 mt-4">
                            {errorMessage}
                        </p>
                        <div className="mt-8">
                            <Link href="/">
                                <button className="font-bold bg-white rounded-lg text-black px-6 py-2 text-center focus:outline-none">
                                    {homePage}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }