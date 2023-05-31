import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation('home')

  const pageTile = t('pageTile')
  const pageDescription = t('pageDescription')

  const appName = t('appName')

  const heroTitle = t('heroTitle')
  const heroSubTitle = t('heroSubTitle')
  const sectionText = t('sectionText')

  const heroImg1 = t('heroImg1')
  const heroImg2 = t('heroImg2')
  const heroImg3 = t('heroImg3')
  const sectionImg1 = t('sectionImg1')
  const sectionImg2 = t('sectionImg2')
  const sectionImg3 = t('sectionImg3')
  const sectionImg4 = t('sectionImg4')

  return (
    <>
      <NextSeo title={pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
      <div className="w-full min-h-[80vh] text-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="w-full min-h-screen my-8">
            <div className="w-full flex flex-col items-center mt-5">
              <h1 className="w-full text-center text-2xl font-bold md:w-2/3">
                {appName}
              </h1>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="w-auto font-semibold text-center text-xl">
                {heroTitle}
              </h3>
              <div className="w-1/2 flex flex-col justify-center items-center mt-6">
                <h1 className='w-auto text-center text-3xl font-semibold animate-pulse transition-all'>
                  {t('common:commingSoon')}
                </h1>
                <Link 
                  href="#" 
                  >
                    <Image 
                      width={250} 
                      height={128} 
                      src={t('common:playstoreImg')} 
                      alt='Google Play Store'
                      className='w-auto h-20 object-contain'
                    />
                </Link>
              </div>
                <Link 
                  href="/about#demos" 
                  className="w-auto font-semibold text-center text-xl underline transition-all hover:opacity-80 mt-4"
                >
                {t('common:seeDemos')}
              </Link>
            </div>
            <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-16">
                <Image 
                  width={250} 
                  height={500} 
                  src={heroImg1} 
                  alt='Hero Image 1'
                  className="w-auto object-contain mt-2"
                />
                <Image 
                  width={250} 
                  height={500} 
                  src={heroImg2} 
                  alt='Hero Image 2'
                  className="w-auto object-contain mt-2"
                />
                <Image 
                  width={250} 
                  height={500} 
                  src={heroImg3} 
                  alt='Hero Image 3'
                  className="w-auto object-contain mt-2"
                />
            </div>
            <p className="font-semibold text-center mt-4">
              {heroSubTitle}
            </p>
            <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-16">
                <Image 
                  width={250} 
                  height={500} 
                  src={sectionImg1} 
                  alt='Section Image 1'
                  className="w-auto object-contain mt-2"
                />
                <Image 
                  width={250} 
                  height={500} 
                  src={sectionImg2} 
                  alt='Section Image 2'
                  className="w-auto object-contain mt-2"
                />
                <Image 
                  width={250} 
                  height={500}  
                  src={sectionImg3} 
                  alt='Section Image 3'
                  className="w-auto object-contain mt-2"
                />
                <Image 
                  width={250} 
                  height={500}  
                  src={sectionImg4} 
                  alt='Section Image 4'
                  className="w-auto object-contain mt-2"
                />
            </div>
            <p className="font-semibold text-center mt-4">
              {sectionText}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
