import Image from 'next/image'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

import ItemTeam from '../../components/team/ItemTeam'

import team from '../../components/data/team.json'

export default function About() {
    const { t } = useTranslation('about')

    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const hero1Text = t('hero1Text')
    const teamText = t('teamText')

    const hero1Image1Src = t('hero1Image1Src')
    const hero1Image1blurDataURL = t('hero1Image1blurDataURL')
    const hero1Image1Alt = t('hero1Image1Alt')
  
    const hero1Image2Src = t('hero1Image2Src')
    const hero1Image2blurDataURL = t('hero1Image2blurDataURL')
    const hero1Image2Alt = t('hero1Image2Alt')

  
    const hero1Image3Src = t('hero1Image3Src')
    const hero1Image3blurDataURL = t('hero1Image3blurDataURL')
    const hero1Image3Alt = t('hero1Image3Alt')
    return (
        <div>
            <NextSeo title={pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <section className="w-full text-white">
                <div className="w-full max-w-screen-lg px-8 mx-auto">
                    <div className="w-full min-h-screen my-8">
                        <div className="w-full flex flex-col items-center">
                            <div className="w-full flex flex-col md:flex-row justify-center items-center">
                                <div className="m-4">
                                    <Image width={300} height={650} objectFit="contain" placeholder="blur" blurDataURL={hero1Image1blurDataURL} src={hero1Image1Src} alt={hero1Image1Alt}/>
                                </div>
                                <div className="m-4">
                                    <Image width={300} height={650} objectFit="contain" placeholder="blur" blurDataURL={hero1Image2blurDataURL} src={hero1Image2Src} alt={hero1Image2Alt}/>
                                </div>
                                <div className="m-4">
                                    <Image width={300} height={650} objectFit="contain" placeholder="blur" blurDataURL={hero1Image3blurDataURL} src={hero1Image3Src} alt={hero1Image3Alt}/>
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold text-center">
                                {hero1Text}
                            </h3>
                        </div>
                        <div className="w-full flex flex-col items-center my-10">
                            <h1 className="text-center font-bold">
                                {teamText}
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
