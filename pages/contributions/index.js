import Image from 'next/legacy/image'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export default function Contributions() {
    const { t } = useTranslation('contributions')

    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')

    const heroText = t('heroText')
    const sourceGithub = t('sourceGithub')

    const translation = t('translation')
    const translationDescription = t('translationDescription')
    const translationLink = t('translationLink')

    const design = t('design')
    const designDescription = t('designDescription')
    const designLink = t('designLink')

    const featuresResume = t('featuresResume')

    const licenceDescription = t('licenceDescription')

    const thanks = t('thanks')

    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0, transition: { duration: 0, } }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.25, } }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0, } }}
        >
            <NextSeo title={pageTile === 'pageTile' ? '...' : pageTile} description={pageDescription} openGraph={{ pageTile, pageDescription }} />
            <div className="w-full min-h-[80vh] text-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="w-full mt-8">
                        <div className="w-full flex flex-col items-center text-center">
                            <div className='w-auto'>
                                <Image
                                    src={`/images/svg/community.svg`}
                                    alt="Community"
                                    width={100}
                                    height={100}
                                    quality={75}
                                />
                            </div>
                            <h1 className="text-2xl font-bold">
                                {heroText !== 'heroText' && heroText}
                            </h1>
                            <div className='w-auto mt-8'>
                                <Link
                                    href='https://github.com/4kpros/FluidMusic'
                                    className='w-auto px-6 py-2.5 flex flex-wrap justify-center items-center rounded-lg bg-gray-500 shadow-lg'
                                >
                                    <Image
                                        src="/images/svg/github.svg"
                                        alt="Github"
                                        width={24}
                                        height={24}
                                        quality={75}
                                        className='object-contain'
                                    />
                                    <p className='w-auto ml-2'>
                                        {sourceGithub !== 'sourceGithub' && sourceGithub}
                                    </p>
                                </Link>
                            </div>
                            <article className="flex flex-col flex-wrap mt-8">
                                <AnimatePresence mode='wait' initial={true} >
                                    <motion.div
                                        initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                        animate={{ y: 0, opacity: 1, transition: { duration: 0.4, } }}
                                        exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                    >
                                        <h1 className="text-xl font-semibold">
                                            {translation !== 'translation' && translation}
                                        </h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence mode='wait' initial={true} >
                                    <motion.div
                                        initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                        animate={{ y: 0, opacity: 1, transition: { duration: 0.45, } }}
                                        exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                    >
                                        <div className="w-auto flex flex-wrap justify-center items-center">
                                            <span className='mr-2'>
                                                {translationDescription !== 'translationDescription' && translationDescription}
                                            </span>
                                            <Link
                                                href='https://poeditor.com/join/project/ytUUxGZtzz'
                                                target='_blank' rel='noreferrer'
                                                className='w-auto underline font-bold text-blue-300'
                                            >
                                                {translationLink !== 'translationLink' && translationLink}
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </article>
                            <article className="flex flex-col flex-wrap justify-center items-center mt-8">
                                <AnimatePresence mode='wait' initial={true} >
                                    <motion.div
                                        initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                        animate={{ y: 0, opacity: 1, transition: { duration: 0.5, } }}
                                        exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                    >
                                        <h1 className="mt-4 text-xl font-semibold">
                                            {design !== 'design' && design}
                                        </h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence mode='wait' initial={true} >
                                    <motion.div
                                        initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                        animate={{ y: 0, opacity: 1, transition: { duration: 0.55, } }}
                                        exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                    >
                                        <div className="w-auto flex flex-wrap justify-center items-center">
                                            <span className='mr-2'>
                                                {designDescription !== 'designDescription' && designDescription}
                                            </span>
                                            <Link
                                                href='https://www.figma.com/file/XwEoyQ1CvGClTxtUzq3PmI/Fluid-music?node-id=907%3A2'
                                                target='_blank' rel='noreferrer'
                                                className='w-auto underline font-bold text-blue-300'
                                            >
                                                {designLink !== 'designLink' && designLink}
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </article>
                            <article className="flex flex-col flex-wrap justify-center items-center mt-8">
                                <AnimatePresence mode='wait' initial={true} >
                                    <motion.div
                                        initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                        animate={{ y: 0, opacity: 1, transition: { duration: 0.6, } }}
                                        exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                    >
                                        <h1 className="text-xl font-semibold">
                                            {t('common:licence') !== 'licence' && t('common:licence')}
                                        </h1>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence mode='wait' initial={true} >
                                    <motion.div
                                        initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                        animate={{ y: 0, opacity: 1, transition: { duration: 0.65, } }}
                                        exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                    >
                                        <article className="flex flex-col flex-wrap justify-center items-center mt-8">
                                            <h3 className="">
                                                {thanks !== 'thanks' && thanks}
                                            </h3>
                                        </article>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence mode='wait' initial={true} >
                                    <motion.div
                                        initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                        animate={{ y: 0, opacity: 1, transition: { duration: 0.7, } }}
                                        exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                    >
                                        <h3 className="">
                                            {featuresResume !== 'featuresResume' && featuresResume}
                                        </h3>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence mode='wait' initial={true} >
                                    <motion.div
                                        initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                        animate={{ y: 0, opacity: 1, transition: { duration: 0.75, } }}
                                        exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                    >
                                        <div className="w-auto flex flex-wrap justify-center items-center">
                                            <span className='mr-2'>
                                                {licenceDescription !== 'licenceDescription' && licenceDescription}
                                            </span>
                                            <Link
                                                href='#'
                                                className='w-auto underline font-bold text-blue-300'
                                            >
                                                {t('common:licence') !== 'licence' && t('common:licence')}
                                                ({t('common:commingSoon') !== 'commingSoon' && t('common:commingSoon')})
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </article>

                            <AnimatePresence mode='wait' initial={true} >
                                <motion.div
                                    initial={{ y: 25, opacity: 0, transition: { duration: 0, } }}
                                    animate={{ y: 0, opacity: 1, transition: { duration: 0.8, } }}
                                    exit={{ y: 5, opacity: 0, transition: { duration: 0, } }}
                                >
                                    <article className="flex flex-col flex-wrap justify-center items-center mt-8">
                                        <h3 className="">
                                            {thanks !== 'thanks' && thanks}
                                        </h3>
                                    </article>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
