import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

const title = 'Accueil'
const description = "Fluid music website"

export default function Home() {
  const { t } = useTranslation('home')

  const appName = t('appName')

  const heroTitle = t('heroTitle')

  const downloadPlayStoreImageSrc = t('downloadPlayStoreImageSrc')
  const downloadPlayStoreImageAlt = t('downloadPlayStoreImageAlt')

  const hero1Text = t('hero1Text')

  const hero1Image1Src = t('hero1Image1Src')
  const hero1Image1blurDataURL = t('hero1Image1blurDataURL')
  const hero1Image1Alt = t('hero1Image1Alt')

  const hero1Image2Src = t('hero1Image2Src')
  const hero1Image2blurDataURL = t('hero1Image2blurDataURL')
  const hero1Image2Alt = t('hero1Image2Alt')

  const hero2Text = t('hero2Text')

  const hero2ImageSrc = t('hero2ImageSrc')
  const hero2ImageblurDataURL = t('hero2ImageblurDataURL')
  const hero2ImageAlt = t('hero2ImageAlt')

  return (
    <div>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <section className="w-full text-white">
        <div className="w-full max-w-screen-lg px-2 mx-auto">
          <div className="w-full min-h-screen my-8">
            <div className="w-full flex flex-col items-center my-5">
              <h1 className="text-center text-4xl font-bold w-full md:w-2/3">
                {appName}
              </h1>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-semibold text-center text-3xl">
                {heroTitle}
              </h3>
              <div className="w-1/2 flex justify-center mt-4">
                <Link href="/">
                  <a className="" target="_blank">
                    <Image width={393} height={162} quality={50} objectFit="contain" src={downloadPlayStoreImageSrc} alt={downloadPlayStoreImageAlt}/>
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full md:flex hidden md:flex-row items-center justify-center md:space-x-8">
              <div className="w-1/2">
                <Image width={865} height={1332} quality={50} objectFit="contain" placeholder="blur" blurDataURL={hero1Image1blurDataURL} src={hero1Image1Src} alt={hero1Image1Alt}/>
              </div>
              <div className="w-1/2">
                <Image width={865} height={1332} quality={50} objectFit="contain" placeholder="blur" blurDataURL={hero1Image2blurDataURL} src={hero1Image2Src} alt={hero1Image2Alt}/>
              </div>
            </div>
            <h3 className="font-semibold text-center text-2xl mt-4">
              {hero1Text}
            </h3>
            <div className="w-full flex flex-col items-center pt-10">
              <div className="w-full">
                <Image width={988} height={637} quality={50} objectFit="contain" placeholder="blur" blurDataURL={hero2ImageblurDataURL} src={hero2ImageSrc} alt={hero2ImageAlt}/>
              </div>
            </div>
            <h3 className="font-semibold text-center text-2xl mt-4">
              {hero2Text}
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}
