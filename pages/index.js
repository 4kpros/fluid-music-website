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
        <div className="w-full max-w-screen-lg px-8 mx-auto">
          <div className="w-full min-h-screen my-8">
            <div className="w-full py-10 flex flex-col items-center">
              <h1 className="text-center text-4xl font-bold w-full md:w-2/3">
                Nouvelle application d&apos;ecoute de musiques locaux avec lyrics et compatible Android 13
              </h1>
            </div>
            <div className="w-full flex flex-col items-center py-10">
              <h3 className="text-2xl font-semibold text-center">
                Disponible sur Android depuis le Play Store. Telechargez et commencez a ecouter vos sons preferes.
              </h3>
              <div className="w-1/2 flex justify-center mt-4">
                <Link href="/">
                  <a className="" target="_blank">
                    <Image width={393} height={162} objectFit="contain" placeholder="blur" blurDataURL="/images/vendors/google-play-badge.png" src="/images/vendors/google-play-badge.png" alt="Google play download"/>
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full hidden lg:flex items-center justify-center py-10 space-x-8">
              <div className="w-1/2">
                <Image width={865} height={1332} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/Lights-screenshoots.webp" src="/images/screenshoots/Lights-screenshoots.webp" alt="Fluid-music mobile screenshoot 1"/>
              </div>
              <div className="w-1/2">
                <Image width={865} height={1332} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/Dark-screenshoots.webp" src="/images/screenshoots/Dark-screenshoots.webp" alt="Fluid-music mobile screenshoot 2"/>
              </div>
            </div>
            <div className="w-full flex flex-col lg:hidden items-center justify-center py-10 space-y-8">
              <div className="">
                <Image width={865} height={1332} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/screenshoot1.webp" src="/images/screenshoots/screenshoot1.webp" alt="Fluid-music mobile screenshoot 1"/>
              </div>
              <div className="">
                <Image width={865} height={1332} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/screenshoot2.webp" src="/images/screenshoots/screenshoot2.webp" alt="Fluid-music mobile screenshoot 2"/>
              </div>
            </div>
            <div className="w-full flex flex-col items-center py-10">
              <div className="w-full">
                <Image width={1482} height={956} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/Fluid-music-tablet-screen-1.webp" src="/images/screenshoots/Fluid-music-tablet-screen-1.webp" alt="Fluid-music tablet screenshoot 1"/>
              </div>
              <h3 className="text-2xl mt-4 font-semibold text-center">
                Un large panneau d’equalizeur pour mieux editer vos styles musicaux facilement. Compatible sur tablettes en mode paysage et portrait.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
