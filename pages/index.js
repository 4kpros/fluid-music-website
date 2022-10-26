import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const title = 'Accueil'
const description = "Fluid music website"

export default function Home() {
  return (
    <div>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <section className="w-full text-white">
        <div className="w-full max-w-screen-lg px-2 mx-auto">
          <div className="w-full min-h-screen my-8">
            <div className="w-full flex flex-col items-center my-5">
              <h1 className="text-center text-4xl font-bold w-full md:w-2/3">
                Fluid Music
              </h1>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-semibold text-center text-3xl">
                Application d&apos;écoute de musiques open source compatible Android 13
              </h3>
              <div className="w-1/2 flex justify-center mt-4">
                <Link href="/">
                  <a className="" target="_blank">
                    <Image width={393} height={162} quality={50} objectFit="contain" placeholder="blur" blurDataURL="/images/vendors/google-play-badge.png" src="/images/vendors/google-play-badge.png" alt="Google play download"/>
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full hidden lg:flex items-center justify-center space-x-8">
              <div className="w-1/2">
                <Image width={865} height={1332} quality={50} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/blur/Lights-screenshoots.webp" src="/images/screenshoots/Lights-screenshoots.webp" alt="Fluid-music mobile screenshoot 1"/>
              </div>
              <div className="w-1/2">
                <Image width={865} height={1332} quality={50} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/blur/Dark-screenshoots.webp" src="/images/screenshoots/Dark-screenshoots.webp" alt="Fluid-music mobile screenshoot 2"/>
              </div>
            </div>
            <div className="w-full flex flex-col lg:hidden items-center justify-center pt-10 space-y-8">
              <div className="">
                <Image width={865} height={1332} quality={50} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/blur/screenshoot1.webp" src="/images/screenshoots/screenshoot1.webp" alt="Fluid-music mobile screenshoot 1"/>
              </div>
              <div className="">
                <Image width={865} height={1332} quality={50} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/blur/screenshoot2.webp" src="/images/screenshoots/screenshoot2.webp" alt="Fluid-music mobile screenshoot 2"/>
              </div>
            </div>
            <h3 className="font-semibold text-center text-2xl mt-4">
              Un design moderne, avec le mode jour/sombre, des arrières plan dynamiques et plein d'autres.
            </h3>
            <div className="w-full flex flex-col items-center pt-10">
              <div className="w-full">
                <Image width={988} height={637} quality={50} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/blur/Fluid-music-tablet-screen-1.webp" src="/images/screenshoots/Fluid-music-tablet-screen-1.webp" alt="Fluid-music tablet screenshoot 1"/>
              </div>
            </div>
            <h3 className="font-semibold text-center text-2xl mt-4">
              Un large panel d&apos;equalizer pour éditer vos styles musicaux facilement. Compatible sur tablettes en mode paysage et portrait.
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}
