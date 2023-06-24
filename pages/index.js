import Image from 'next/legacy/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

export default function Home() {
  const { t } = useTranslation('home')

  const pageTile = t('pageTile')
  const pageDescription = t('pageDescription')

  const appName = t('appName')

  const heroTitle = t('heroTitle')

  const heroImg1 = t('heroImg1')
  const heroImg1Blur = t('heroImg1Blur')
  const heroImg2 = t('heroImg2')
  const heroImg2Blur = t('heroImg2Blur')
  const heroImg3 = t('heroImg3')
  const heroImg3Blur = t('heroImg3Blur')
  const heroImg4 = t('heroImg4')
  const heroImg4Blur = t('heroImg4Blur')

  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1, duration: 0.1, }}
      exit={{ y: 10, opacity: 0, duration: 0 }}
    >
      <NextSeo title={pageTile === 'pageTile' ? '...' : pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
      <div className="w-full min-h-[80vh] text-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col items-center mt-8">
              <h1 className="w-full text-center text-2xl font-bold md:w-2/3">
                {appName !== 'appName' && appName}
              </h1>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="w-auto font-semibold text-center text-xl">
                {heroTitle !== 'heroTitle' && heroTitle}
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
                      quality={100}
                      placeholder='blur'
                      blurDataURL={t('common:playstoreImgBlur')}
                      src={t('common:playstoreImg')} 
                      alt=''
                      className='w-auto h-20 object-contain'
                    />
                </Link>
              </div>
                <Link 
                  href="/about" 
                  className="w-auto font-semibold text-center text-xl underline transition-all hover:opacity-80 mt-4"
                >
                  {t('common:seeDemos') !== 'seeDemos' && t('common:seeDemos')}
                </Link>
              </div>
              {
                heroImg1.startsWith('/') && (
                  <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-16">
                    <div className='mt-2'>
                      <Image 
                        width={250} 
                        height={500} 
                        quality={100}
                        placeholder='blur'
                        blurDataURL={heroImg1Blur}
                        src={heroImg1} 
                        alt=''
                        className="max-w-[250px] object-contain"
                      />
                    </div>
                    <div className='mt-2'>
                      <Image 
                        width={250} 
                        height={500} 
                        quality={100}
                        placeholder='blur'
                        blurDataURL={heroImg2Blur}
                        src={heroImg2} 
                        alt=''
                        className="max-w-[250px] object-contain"
                      />
                    </div>
                    <div className='mt-2'>
                      <Image 
                        width={250} 
                        height={500} 
                        quality={100}
                        placeholder='blur'
                        blurDataURL={heroImg3Blur}
                        src={heroImg3} 
                        alt=''
                        className="max-w-[250px] object-contain"
                      />
                    </div>
                    <div className='mt-2'>
                      <Image 
                        width={250} 
                        height={500} 
                        quality={100}
                        placeholder='blur'
                        blurDataURL={heroImg4Blur}
                        src={heroImg4} 
                        alt=''
                        className="max-w-[250px] object-contain"
                      />
                    </div>
                  </div>
                )
              }
            <br/><br/><br/>
          </div>
      </div>
    </motion.div>
  )
}
