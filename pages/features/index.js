import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Features() {
    const { t } = useTranslation('features')

    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
    
    const feature1 = t('feature1')
    const feature2 = t('feature2')
    const feature3 = t('feature3')
    const feature4 = t('feature4')
    const feature5 = t('feature5')
    const feature6 = t('feature6')
    const feature7 = t('feature7')
    const feature8 = t('feature8')
    const feature9 = t('feature9')
    const feature10 = t('feature10')
    const feature11 = t('feature11')
    const feature12 = t('feature12')

    return (
        <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1, duration: 0.1, }}
            exit={{ y: 10, opacity: 0, duration: 0 }}
        >
            <NextSeo title={pageTile === 'pageTile' ? '...' : pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className='w-full mt-8 mb-10'>
                        <div className="w-full flex flex-col items-center">
                            <h1 className="w-full font-bold text-center text-2xl">
                                {pageTile !== 'pageTile' && pageTile}
                            </h1>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row justify-center items-center space-x-0 space-y-10 lg:space-x-10 lg:space-y-0 mt-8">
                            <div className='w-full flex flex-col items-center lg:justify-end space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
                                <div className='w-fit relative'>
                                    <Image 
                                        width={250} 
                                        height={500} 
                                        quality={100}
                                        src={'/images/screenshots/fluid-music-feature-1.jpg'}
                                        alt=''
                                        className="max-w-[250px] object-contain"
                                    />
                                    <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                        >
                                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-fit relative'>
                                    <Image 
                                        width={250} 
                                        height={500} 
                                        quality={100}
                                        src={'/images/screenshots/fluid-music-feature-2.jpg'}
                                        alt=''
                                        className="max-w-[250px] object-contain"
                                    />
                                    <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                        >
                                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center lg:justify-start">
                                <ul className='list-disc mx-8 lg:mx-0'>
                                    <li className=''>
                                        {feature1 !== 'feature1' && feature1}
                                    </li>
                                    <li className='mt-4'>
                                        {feature2 !== 'feature2' && feature2}
                                    </li>
                                    <li className='mt-4'>
                                        {feature3 !== 'feature3' && feature3}
                                    </li>
                                    <li className='mt-4'>
                                        {feature4 !== 'feature4' && feature4}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center space-x-0 space-y-10 lg:space-x-10 lg:space-y-0 mt-8">
                            <div className="w-full flex items-center lg:justify-end">
                                <ul className='list-disc mx-8 lg:mx-0'>
                                    <li className='mt-4'>
                                        {feature5 !== 'feature5' && feature5}
                                    </li>
                                    <li className='mt-4'>
                                        {feature6 !== 'feature6' && feature6}
                                    </li>
                                    <li className='mt-4'>
                                        {feature7 !== 'feature7' && feature7}
                                    </li>
                                    <li className='mt-4'>
                                        {feature8 !== 'feature8' && feature8}
                                    </li>
                                </ul>
                            </div>
                            <div className='w-full flex flex-col items-center lg:justify-start space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
                                <div className='w-fit relative'>
                                    <Image 
                                        width={250} 
                                        height={500} 
                                        quality={100}
                                        src={'/images/screenshots/fluid-music-feature-3.jpg'}
                                        alt=''
                                        className="max-w-[250px] object-contain"
                                    />
                                    <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                        >
                                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-fit relative'>
                                    <Image 
                                        width={250} 
                                        height={500} 
                                        quality={100}
                                        src={'/images/screenshots/fluid-music-feature-4.jpg'}
                                        alt=''
                                        className="max-w-[250px] object-contain"
                                    />
                                    <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                        >
                                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row justify-center items-center space-x-0 space-y-10 lg:space-x-10 lg:space-y-0 mt-8">
                            <div className='w-full flex flex-col items-center lg:justify-end space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
                                <div className='w-fit relative'>
                                    <Image 
                                        width={250} 
                                        height={500} 
                                        quality={100}
                                        src={'/images/screenshots/fluid-music-feature-5.jpg'}
                                        alt=''
                                        className="max-w-[250px] object-contain"
                                    />
                                    <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                        >
                                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-fit relative'>
                                    <Image 
                                        width={250} 
                                        height={500} 
                                        quality={100}
                                        src={'/images/screenshots/fluid-music-feature-6.jpg'}
                                        alt=''
                                        className="max-w-[250px] object-contain"
                                    />
                                    <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            className='w-24 h-24 fill-white opacity-20 animate-pulse' 
                                        >
                                            <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full flex items-center lg:justify-start">
                                <ul className='list-disc mx-8 lg:mx-0'>
                                    <li className='mt-4'>
                                        {feature9 !== 'feature9' && feature9}
                                    </li>
                                    <li className='mt-4'>
                                        {feature10 !== 'feature10' && feature10}
                                    </li>
                                    <li className='mt-4'>
                                        {feature11 !== 'feature11' && feature11}
                                    </li>
                                    <li className='mt-4'>
                                        {feature12}
                                        {feature12 !== 'feature12' && feature12}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};