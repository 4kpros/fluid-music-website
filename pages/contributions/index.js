import Image from 'next/legacy/image'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

  const licenceDescription = t('licenceDescription')

  const thanks = t('thanks')

    return (
        <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1, duration: 0.1, }}
            exit={{ y: 10, opacity: 0, duration: 0 }}
        >
            <NextSeo title={pageTile === 'pageTile' ? '...' : pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-full mt-8">
                        <div className="w-full flex flex-col items-center text-center">
                            <div className='w-auto'>
                                <Image 
                                    width={100} 
                                    height={100} 
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL={'/images/svg/community.svg'}
                                    src="/images/svg/community.svg" alt="Community"
                                />
                            </div>
                            <h1 className="text-2xl font-bold">
                                {heroText !== 'heroText' && heroText}
                            </h1>
                            <div className='w-auto mt-8'>
                                <Link 
                                    href='#'
                                    className='w-auto px-6 py-2.5 flex flex-wrap justify-center items-center rounded-lg bg-gray-500 shadow-lg'
                                >
                                    <Image 
                                        width={24} 
                                        height={24}
                                        quality={100}
                                        placeholder='blur'
                                        blurDataURL={'/images/svg/github.svg'}
                                        src="/images/svg/github.svg" 
                                        alt="Github"
                                        className='object-contain'
                                    />
                                    <p className='w-auto ml-2'>
                                        {sourceGithub !== 'sourceGithub' && sourceGithub}
                                        ({t('common:commingSoon') !== 'commingSoon' && t('common:commingSoon')})
                                    </p>
                                </Link>
                            </div>
                            <article className="flex flex-col flex-wrap mt-8">
                                <h1 className="text-xl font-semibold">
                                    {translation !== 'translation' && translation}
                                </h1>
                                <div className="w-auto flex flex-wrap justify-center items-center">
                                    <span className='mr-2'>
                                        {translationDescription !== 'translationDescription' && translationDescription}
                                    </span>
                                    <Link 
                                        href='https://poeditor.com/join/project/ytUUxGZtzz'
                                        target='_blank' rel='noreferrer'
                                        className='w-auto underline font-bold text-blue-300'
                                    >
                                        {translationLink !== 'translationLink' && translationLink}
                                    </Link>
                                </div>
                            </article>
                            <article className="flex flex-col flex-wrap justify-center items-center mt-8">
                                <h1 className="mt-4 text-xl font-semibold">
                                    {design !== 'design' && design}
                                </h1>
                                <div className="w-auto flex flex-wrap justify-center items-center">
                                    <span className='mr-2'>
                                        {designDescription !== 'designDescription' && designDescription}
                                    </span>
                                    <Link 
                                        href='https://www.figma.com/file/XwEoyQ1CvGClTxtUzq3PmI/Fluid-music?node-id=907%3A2'
                                        target='_blank' rel='noreferrer'
                                        className='w-auto underline font-bold text-blue-300'
                                    >
                                        {designLink !== 'designLink' && designLink}
                                    </Link>
                                </div>
                            </article>
                            <article className="flex flex-col flex-wrap justify-center items-center mt-8">
                                <h1 className="text-xl font-semibold">
                                    {t('common:licence') !== 'licence' && t('common:licence')}
                                </h1>
                                <h3 className="">
                                    {featuresResume !== 'featuresResume' && featuresResume}
                                </h3>
                                <div className="w-auto flex flex-wrap justify-center items-center">
                                    <span className='mr-2'>
                                        {licenceDescription !== 'licenceDescription' && licenceDescription}
                                    </span>
                                    <Link 
                                        href='#' 
                                        className='w-auto underline font-bold text-blue-300'
                                    >
                                        {t('common:licence') !== 'licence' && t('common:licence')}
                                        ({t('common:commingSoon') !== 'commingSoon' && t('common:commingSoon')})
                                    </Link>
                                </div>
                            </article>
                            <article className="flex flex-col flex-wrap justify-center items-center mt-8">
                                <h3 className="">
                                    {thanks !== 'thanks' && thanks}
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};