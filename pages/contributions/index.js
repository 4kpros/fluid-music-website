import Image from 'next/image'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

export default function Contributions() {
  const { t } = useTranslation('contributions')

  const pageTile = t('pageTile')
  const pageDescription = t('pageDescription')

  const appName = t('appName')

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
  const licenceLink = t('licenceLink')

  const thanks = t('thanks')

    return (
        <div>
            <NextSeo title={pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <section className="w-full text-white">
                <div className="w-full max-w-screen-lg min-h-[65vh] px-8 mx-auto">
                    <div className="w-full my-8">
                        <div className="w-full flex flex-col items-center text-center">
                            <div className='w-auto'>
                                <Image width={100} height={100} objectFit="contain" src="/images/svg/community.svg" alt="Community"/>
                            </div>
                            <h1 className="text-2xl font-bold">
                                {heroText}
                            </h1>
                            <div className='w-auto my-8'>
                                <a href='https://github.com/4kpros/fluidmusic' target='_blank' rel='noreferrer' className='w-auto px-6 py-2.5 flex justify-center items-center rounded-lg bg-gray-500 shadow-lg'>
                                    <p className='mr-2'>
                                        {sourceGithub}
                                    </p>
                                    <Image width={24} height={24} objectFit="contain" src="/images/svg/github.svg" alt="Github"/>
                                </a>
                            </div>
                            <article className="flex flex-col flex-wrap">
                                <h1 className="mt-4 text-xl font-semibold my-2">
                                    {translation} 
                                </h1>
                                <h3 className="">
                                {translationDescription} <a href='https://poeditor.com/join/project/ytUUxGZtzz' target='_blank' rel='noreferrer' className='w-auto underline font-bold text-blue-300'>{translationLink}</a>
                                </h3>
                            </article>
                            <article className="flex flex-col flex-wrap">
                                <h1 className="mt-4 text-xl font-semibold my-2">
                                    {design} 
                                </h1>
                                <h3 className="">
                                {designDescription} <a href='https://www.figma.com/file/XwEoyQ1CvGClTxtUzq3PmI/Fluid-music?node-id=907%3A2' target='_blank' rel='noreferrer' className='w-auto underline font-bold text-blue-300'>{designLink}</a>
                                </h3>
                            </article>
                            <article className="flex flex-col flex-wrap mt-8">
                                <h3 className="">
                                    {featuresResume}
                                </h3>
                                <h3 className="">
                                    {licenceDescription} <a href='https://github.com/4kpros/FluidMusic/blob/dev/LICENCE.md' target='_blank' rel='noreferrer' className='w-auto underline font-bold text-blue-300'>{licenceLink}</a>.
                                </h3>
                            </article>
                            <article className="flex flex-col flex-wrap mt-8">
                                <h3 className="">
                                {thanks}
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};