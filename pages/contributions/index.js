import Image from 'next/image'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

export default function Contributions() {
  const { t } = useTranslation('contributions')

  const pageTile = t('pageTile')
  const pageDescription = t('pageDescription')

  const heroText = t('heroText')
  const sourceGithub = t('sourceGithub')

  const translation = t('translation')
  const translationDescription = t('translationDescription')
  const translationLink = t('translationLink')

  const design = t('design')
  const designDescription = t('designDescription')
  const designLink = t('designLink')

  const featuresResume = t('featuresResume')

  const licenceTitle = t('licenceTitle')
  const licenceDescription = t('licenceDescription')

  const thanks = t('thanks')

    return (
        <>
            <NextSeo title={pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-full my-8">
                        <div className="w-full flex flex-col items-center text-center">
                            <div className='w-auto'>
                                <Image width={100} height={100} objectFit="contain" src="/images/svg/community.svg" alt="Community"/>
                            </div>
                            <h1 className="text-2xl font-bold">
                                {heroText}
                            </h1>
                            <div className='w-auto my-8'>
                                <Link 
                                    href='#'
                                    className='w-auto px-6 py-2.5 flex justify-center items-center rounded-lg bg-gray-500 shadow-lg'
                                >
                                    <p className='mr-2'>
                                        {sourceGithub}({t('common:commingSoon')})
                                    </p>
                                    <Image 
                                        width={24} 
                                        height={24}
                                        src="/images/svg/github.svg" 
                                        alt="Github"
                                        className='object-contain'
                                        />
                                </Link>
                            </div>
                            <article className="flex flex-col flex-wrap">
                                <h1 className="mt-4 text-xl font-semibold my-2">
                                    {translation} 
                                </h1>
                                <div className="w-auto flex flex-wrap">
                                    <span className='mr-2'>
                                        {translationDescription} 
                                    </span>
                                    <Link 
                                        href='https://poeditor.com/join/project/ytUUxGZtzz'
                                        target='_blank' rel='noreferrer'
                                        className='w-auto underline font-bold text-blue-300'
                                    >
                                        {translationLink}
                                    </Link>
                                </div>
                            </article>
                            <article className="flex flex-col flex-wrap">
                                <h1 className="mt-4 text-xl font-semibold my-2">
                                    {design} 
                                </h1>
                                <div className="w-auto flex flex-wrap">
                                    <span className='mr-2'>
                                        {designDescription} 
                                    </span>
                                    <Link 
                                        href='https://www.figma.com/file/XwEoyQ1CvGClTxtUzq3PmI/Fluid-music?node-id=907%3A2'
                                        target='_blank' rel='noreferrer'
                                        className='w-auto underline font-bold text-blue-300'
                                    >
                                        {designLink}
                                    </Link>
                                </div>
                            </article>
                            <article className="flex flex-col flex-wrap mt-8">
                                <h1 className="mt-4 text-xl font-semibold my-2">
                                    {t('common:licence')} 
                                </h1>
                                <h3 className="">
                                    {featuresResume}
                                </h3>
                                <div className="w-auto flex flex-wrap">
                                    <span className='mr-2'>
                                        {licenceDescription} 
                                    </span>
                                    <Link 
                                        href='#' 
                                        className='w-auto underline font-bold text-blue-300'
                                    >
                                        {t('common:licence')}({t('common:commingSoon')})
                                    </Link>
                                </div>
                            </article>
                            <article className="flex flex-col flex-wrap mt-8">
                                <h3 className="">
                                {thanks}
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};