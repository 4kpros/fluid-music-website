
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { AnimatePresence, motion } from 'framer-motion'

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

    return (
        <motion.div
            initial={{
                y: -10,
                opacity: 0,
                transition: {
                    duration: 0,
                }
            }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.15,
                }
            }}
            exit={{
                y: 5,
                opacity: 0,
                transition: {
                    duration: 0,
                }
            }}
        >
            <NextSeo title={pageTile === 'pageTile' ? '...' : pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-full min-h-screen mt-8" id='demos'>
                        <div className="w-full flex flex-col items-center mt-8">
                            <h1 className="w-full font-bold text-center text-2xl">
                                {t('common:demosTitle') !== 'demosTitle' && t('common:demosTitle')}
                            </h1>
                            <h3 className="w-full font-semibold text-center text-xl">
                                {heroDesc !== 'heroDesc' && heroDesc}
                            </h3>
                        </div>
                        <div className="w-full grid grid-cols-1 mt-8">
                            <AnimatePresence
                                mode='wait'
                                initial={true}
                            >
                                <motion.div
                                    initial={{
                                        y: -10,
                                        opacity: 0,
                                        transition: {
                                            duration: 0,
                                        }
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5,
                                        }
                                    }}
                                    exit={{
                                        y: 5,
                                        opacity: 0,
                                        transition: {
                                            duration: 0,
                                        }
                                    }}
                                    className='w-fit mx-auto relative flex justify-center mt-8 border-2 border-white/25'>
                                    <video
                                        id="demo1"
                                        autoPlay={true}
                                        muted={true}
                                        controls={true}
                                        width="820"
                                        height="500"
                                        className="w-full min-w-full lg:min-w-fit max-w-[820px] max-h-[500px]"
                                    >
                                        <source src={demo1} type="video/mp4" />
                                    </video>
                                </motion.div>
                            </AnimatePresence>
                            <AnimatePresence
                                mode='wait'
                                initial={true}
                            >
                                <motion.div
                                    initial={{
                                        y: 10,
                                        opacity: 0,
                                        transition: {
                                            duration: 0,
                                        }
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.5,
                                        }
                                    }}
                                    exit={{
                                        y: 5,
                                        opacity: 0,
                                        transition: {
                                            duration: 0,
                                        }
                                    }}
                                    className='w-fit mx-auto relative flex justify-center mt-8 border-2 border-white/25'>
                                    <video
                                        id="demo2"
                                        autoPlay={false}
                                        muted={true}
                                        controls={true}
                                        width="820"
                                        height="500"
                                        className="w-full min-w-full lg:min-w-fit max-w-[820px] max-h-[500px]"
                                    >
                                        <source src={demo2} type="video/mp4" />
                                    </video>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="w-full flex flex-col items-center my-10">
                            <h1 className="font-bold mt-10 hidden">
                                {teamTitle !== 'teamTitle' && teamTitle}
                            </h1>
                            <div className="w-full flex flex-wrap justify-center">
                                {
                                    team && team.length > 0 ?
                                        team.map((person, index) => {
                                            return (
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
