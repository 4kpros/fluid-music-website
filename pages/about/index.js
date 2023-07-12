
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { AnimatePresence, motion } from 'framer-motion'

import ItemTeam from '../../components/team/ItemTeam'

import team from '../../components/data/team.json'
import { useRef, useState } from 'react'

export default function About() {
    const { t } = useTranslation('about')

    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const heroDesc = t('heroDesc')
    const teamTitle = t('teamTitle')

    const demo1 = t('demo1')
    const demo2 = t('demo2')

    const demoSection1 = useRef(null)

    const [isShowMoreDemos, setIsShowMoreDemos] = useState(false)

    function toggleShowMoreDemos(){
        if(isShowMoreDemos === true){
            demoSection1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setIsShowMoreDemos(prev => !prev)
    }

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
        >
            <NextSeo title={pageTile === 'pageTile' ? '...' : pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-full min-h-screen mt-8" id='demos'>
                        <div ref={demoSection1} className="w-full flex flex-col items-center mt-8">
                            <h1 className="w-full font-bold text-center text-2xl">
                                {t('common:demosTitle') !== 'demosTitle' && t('common:demosTitle')}
                            </h1>
                            <h3 className="w-full font-semibold text-center text-xl">
                                {heroDesc !== 'heroDesc' && heroDesc}
                            </h3>
                        </div>
                        <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-8">
                            <div className='w-auto relative flex justify-center mt-2 border-2 border-white/25'>
                                <video
                                    id="demo1"
                                    autoPlay
                                    muted
                                    controls
                                    width="820"
                                    height="500"
                                    className="w-full max-w-[820px] max-h-[500px] video-js"
                                >
                                    <source src={demo1} type="video/mp4" />
                                </video>
                                <div className='w-full h-full max-h-[500px] flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                                </div>
                            </div>
                            {
                                isShowMoreDemos && (
                                    <div className='w-auto relative flex justify-center mt-8 border-2 border-white'>
                                        <video
                                            id="demo2"
                                            autoPlay
                                            muted
                                            controls
                                            width="820"
                                            height="500"
                                            className="w-full max-w-[820px] max-h-[500px] video-js"
                                        >
                                            <source src={demo2} type="video/mp4" />
                                        </video>
                                        <div className='w-full h-full max-h-[500px] flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className='w-full flex justify-center'>
                            <button
                                type='button'
                                onClick={() => toggleShowMoreDemos()}
                                className="w-auto font-semibold text-center underline transition-all hover:opacity-80 mt-4"
                            >
                                {
                                    isShowMoreDemos === false ?
                                        `${t('common:showMore') !== 'showMore' && t('common:showMore')}`
                                    :
                                        `${t('common:hide') !== 'hide' && t('common:hide')}`
                                }
                            </button>
                        </div>
                        <div className="w-full flex flex-col items-center my-10">
                            <h1 className="text-center font-bold mt-10">
                                {teamTitle !== 'teamTitle' && teamTitle}
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
        </motion.div>
    );
};
