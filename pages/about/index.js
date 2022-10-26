import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import ItemTeam from '../../components/team/ItemTeam'

const title = 'A propos'
const description = "Fluid music website"

const team = [
    {
        "name": "Abouar Prosper",
        "work": "Lead développeur et designer",
        "image": "/images/profile/prosperabouar.webp",
        "linkedin": "https://www.linkedin.com/in/prosper-abouar-408089134/",
        "github": "https://github.com/4kpros",
        "website": "https://prosperabouar.vercel.app/"
    }
]

export default function About() {
    return (
        <div>
            <NextSeo title={title} description={description} openGraph={{ title, description }} />
            <section className="w-full text-white">
                <div className="w-full max-w-screen-lg px-8 mx-auto">
                    <div className="w-full min-h-screen my-8">
                        <div className="w-full flex flex-col items-center">
                            <div className="w-full flex flex-col md:flex-row justify-center items-center">
                                <div className="m-4">
                                    <Image width={375} height={812} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/Home-music.webp" src="/images/screenshoots/Home-music.webp" alt="Fluid-music-1"/>
                                </div>
                                <div className="m-4">
                                    <Image width={375} height={812} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/Home-music-fullscreen.webp" src="/images/screenshoots/Home-music-fullscreen.webp" alt="Fluid-music-fullscreen"/>
                                </div>
                                <div className="m-4">
                                    <Image width={375} height={812} objectFit="contain" placeholder="blur" blurDataURL="/images/screenshoots/Equalizer.webp" src="/images/screenshoots/Equalizer.webp" alt="Fluid-music-equ"/>
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold text-center">
                            Fluid music, lecteur audio open source disponible sur Android et reprend les grands standards des lecteurs conventionnels. Ce lecteur a donc les fonctionnalités de base d’une application de ce type. Vous pourrez jouer les sons depuis votre téléphone et votre carte SD. Les formats audios sont encodés aux nouvelles versions et compatibles MP3, OGG, FLAC etc... Il dispose d’un égaliseur intégré de 5 à 10 bandes.
                            </h3>
                        </div>
                        <div className="w-full flex flex-col items-center my-10">
                            <h1 className="text-center font-bold">
                            L&apos;équipe
                            </h1>
                            <div className="w-full flex flex-wrap justify-center">
                                {
                                    team && team.length > 0 ?
                                        team.map((person, index) => {
                                            return(
                                                <ItemTeam key={index} person={person} />
                                            )
                                        })
                                    :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};