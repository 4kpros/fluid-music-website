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
            <NextSeo title={pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className='w-full mt-8'>
                        <div className="w-full flex flex-col items-center">
                            <h1 className="w-full font-bold text-center text-2xl">
                                {pageTile}
                            </h1>
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
                            <div className='w-full'>
                                <Image
                                    src={'/images/screenshots/features-images.webp'}
                                    alt=''
                                    width={720}
                                    height={600}
                                    quality={100}
                                    className='w-full max-w-3xl object-contain'
                                    />
                            </div>
                            <div className="w-full h-full">
                                <ul className='list-disc'>
                                    <li className=''>
                                        {feature1}
                                    </li>
                                    <li className='mt-4'>
                                        {feature2}
                                    </li>
                                    <li className='mt-4'>
                                        {feature3}
                                    </li>
                                    <li className='mt-4'>
                                        {feature4}
                                    </li>
                                    <li className='mt-4'>
                                        {feature5}
                                    </li>
                                    <li className='mt-4'>
                                        {feature6}
                                    </li>
                                    <li className='mt-4'>
                                        {feature7}
                                    </li>
                                    <li className='mt-4'>
                                        {feature8}
                                    </li>
                                    <li className='mt-4'>
                                        {feature9}
                                    </li>
                                    <li className='mt-4'>
                                        {feature10}
                                    </li>
                                    <li className='mt-4'>
                                        {feature11}
                                    </li>
                                    <li className='mt-4'>
                                        {feature12}
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