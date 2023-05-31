import Image from 'next/image'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

import ItemTeam from '../../components/team/ItemTeam'

import team from '../../components/data/team.json'

export default function About() {
    const { t } = useTranslation('about')

    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const heroDesc = t('heroDesc')
    const teamTitle = t('teamTitle')

    const demo1 = t('demo1')
    const demo2 = t('demo2')
    const demo3 = t('demo3')

    return (
        <>
            <NextSeo title={pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-full min-h-screen my-8" id='demos'>
                        <div className="w-full flex flex-col items-center mt-10">
                            <h3 className="w-full max-w-3xl font-semibold text-center">
                                {t('common:demosTitle')}
                            </h3>
                        </div>
                        <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-8">
                            <Image 
                                width={250} 
                                height={500} 
                                src={demo1} 
                                alt='Demo 1'
                                className="w-[250px] h-[500px] object-contain bg-white/20 mt-2"
                            />
                            <Image 
                                width={250} 
                                height={500} 
                                src={demo2} 
                                alt='Demo 2'
                                className="w-[250px] h-[500px] object-contain bg-white/20 mt-2"
                            />
                            <Image 
                                width={250} 
                                height={500} 
                                src={demo3} 
                                alt='Demo 3'
                                className="w-[250px] h-[500px] object-contain bg-white/20 mt-2"
                            />
                        </div>
                        <div className="w-full flex flex-col items-center my-10">
                            <h3 className="w-full max-w-3xl font-semibold text-center">
                                {heroDesc}
                            </h3>
                            <h1 className="text-center font-bold mt-10">
                                {teamTitle}
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
            </div>
        </>
    );
};
