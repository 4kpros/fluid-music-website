import Image from 'next/image'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

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
        <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1, duration: 0.1, }}
            exit={{ y: 10, opacity: 0, duration: 0 }}
        >
            <NextSeo title={pageTile === 'pageTile' ? '...' : pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-full min-h-screen mt-8" id='demos'>
                        <div className="w-full flex flex-col items-center mt-8">
                            <h1 className="w-full font-bold text-center text-2xl">
                                {t('common:demosTitle')}
                            </h1>
                            <h3 className="w-full font-semibold text-center text-xl">
                                {heroDesc}
                            </h3>
                        </div>
                        {
                            demo1.startsWith('/') && (
                                <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center md:space-x-4 mt-8">
                                    <div className='w-auto relative flex justify-center mt-2'>
                                        <Image 
                                            width={250} 
                                            height={500} 
                                            quality={100}
                                            src={demo1} 
                                            alt=''
                                            className="max-w-[250px] object-contain"
                                        />
                                        <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10  bg-white/10'>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                            >
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.667 15.772A4.512 4.512 0 0 1 9.984 18c-.737 0-1.271-.186-1.644-.546-.371-.348-.575-.875-.569-1.469.006-1.344.983-2.111 2.309-2.111.521 0 .924.103 1.121.198l-.191.731c-.222-.096-.498-.174-.941-.174-.762 0-1.338.432-1.338 1.308 0 .833.522 1.325 1.271 1.325.21 0 .378-.024.45-.061v-.846h-.624v-.713h1.505v2.13zm1.634.186h-.918v-4.042h.918v4.042zm3.262-3.292h-1.553v.923h1.451v.744h-1.451v1.625h-.918v-4.042h2.471v.75zM14 9h-1V4l5 5h-4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='w-auto relative flex justify-center mt-2'>
                                        <Image 
                                            width={250} 
                                            height={500} 
                                            quality={100}
                                            src={demo2} 
                                            alt=''
                                            className="max-w-[250px] object-contain"
                                        />
                                        <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10  bg-white/10'>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                            >
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.667 15.772A4.512 4.512 0 0 1 9.984 18c-.737 0-1.271-.186-1.644-.546-.371-.348-.575-.875-.569-1.469.006-1.344.983-2.111 2.309-2.111.521 0 .924.103 1.121.198l-.191.731c-.222-.096-.498-.174-.941-.174-.762 0-1.338.432-1.338 1.308 0 .833.522 1.325 1.271 1.325.21 0 .378-.024.45-.061v-.846h-.624v-.713h1.505v2.13zm1.634.186h-.918v-4.042h.918v4.042zm3.262-3.292h-1.553v.923h1.451v.744h-1.451v1.625h-.918v-4.042h2.471v.75zM14 9h-1V4l5 5h-4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='w-auto relative flex justify-center mt-2'>
                                        <Image 
                                            width={250} 
                                            height={500} 
                                            quality={100}
                                            src={demo3} 
                                            alt=''
                                            className="max-w-[250px] object-contain"
                                        />
                                        <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10  bg-white/10'>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                            >
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.667 15.772A4.512 4.512 0 0 1 9.984 18c-.737 0-1.271-.186-1.644-.546-.371-.348-.575-.875-.569-1.469.006-1.344.983-2.111 2.309-2.111.521 0 .924.103 1.121.198l-.191.731c-.222-.096-.498-.174-.941-.174-.762 0-1.338.432-1.338 1.308 0 .833.522 1.325 1.271 1.325.21 0 .378-.024.45-.061v-.846h-.624v-.713h1.505v2.13zm1.634.186h-.918v-4.042h.918v4.042zm3.262-3.292h-1.553v.923h1.451v.744h-1.451v1.625h-.918v-4.042h2.471v.75zM14 9h-1V4l5 5h-4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="w-full flex flex-col items-center my-10">
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
        </motion.div>
    );
};
