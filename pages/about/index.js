import Image from 'next/legacy/image'
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
    const demo1Blur = t('demo1Blur')
    const demo2 = t('demo2')
    const demo2Blur = t('demo2Blur')
    const demo3 = t('demo3')
    const demo3Blur = t('demo3Blur')
    const demo4 = t('demo4')
    const demo4Blur = t('demo4Blur')
    const demo5 = t('demo5')
    const demo5Blur = t('demo5Blur')
    const demo6 = t('demo6')
    const demo6Blur = t('demo6Blur')

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
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1, duration: 0.1, }}
            exit={{ y: 10, opacity: 0, duration: 0 }}
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
                        {
                            demo1.startsWith('/') && (
                                <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-8">
                                    <div className='w-auto flex justify-center mt-2'>
                                        <Image 
                                            width={250} 
                                            height={500} 
                                            quality={100}
                                            placeholder='blur'
                                            blurDataURL={demo1Blur}
                                            src={demo1} 
                                            alt=''
                                            className="max-w-[250px] object-contain"
                                        />
                                    </div>
                                    <div className='w-auto flex justify-center mt-2'>
                                        <Image 
                                            width={250} 
                                            height={500} 
                                            quality={100}
                                            placeholder='blur'
                                            blurDataURL={demo3Blur}
                                            src={demo3} 
                                            alt=''
                                            className="max-w-[250px] object-contain"
                                        />
                                    </div>
                                    {
                                        isShowMoreDemos && demo2.startsWith('/') && (
                                            <div className='w-auto flex justify-center mt-2'>
                                                <Image 
                                                    width={250} 
                                                    height={500} 
                                                    quality={100}
                                                    placeholder='blur'
                                                    blurDataURL={demo2Blur}
                                                    src={demo2} 
                                                    alt=''
                                                    className="max-w-[250px] object-contain"
                                                />
                                            </div>
                                        )
                                    }
                                    {
                                        isShowMoreDemos && demo4.startsWith('/') && (
                                            <div className='w-auto flex justify-center mt-2'>
                                                <Image 
                                                    width={250} 
                                                    height={500} 
                                                    quality={100}
                                                    placeholder='blur'
                                                    blurDataURL={demo4Blur}
                                                    src={demo4} 
                                                    alt=''
                                                    className="max-w-[250px] object-contain"
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                        {
                            isShowMoreDemos && demo4.startsWith('/') && (
                                <AnimatePresence
                                    initial={true}
                                >
                                    <motion.div 
                                        initial={{ y: -25, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1, duration: 0.1, }}
                                        exit={{ y: 10, opacity: 0, duration: 0.1 }}
                                        className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-8"
                                    >
                                        <div className='w-auto flex justify-center mt-2'>
                                            <Image 
                                                width={250} 
                                                height={500} 
                                                quality={100}
                                                placeholder='blur'
                                                blurDataURL={demo5Blur}
                                                src={demo5} 
                                                alt=''
                                                className="max-w-[250px] object-contain"
                                            />
                                        </div>
                                        <div className='w-auto flex justify-center mt-2'>
                                            <Image 
                                                width={250} 
                                                height={500} 
                                                quality={100}
                                                placeholder='blur'
                                                blurDataURL={demo6Blur}
                                                src={demo6} 
                                                alt=''
                                                className="max-w-[250px] object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            )
                        }
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
