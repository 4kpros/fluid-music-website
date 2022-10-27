import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

const title = 'Politique de confidentialite'
const description = "Fluid music website"

export default function Policy() {
    const { t } = useTranslation('policy')
  
    const heroText = t('heroText')
    const collectedData = t('collectedData')
    const sharedData = t('sharedData')
    const logData = t('logData')

    return (
        <div>
            <NextSeo title={title} description={description} openGraph={{ title, description }} />
            <section className="w-full text-white">
                <div className="w-full max-w-screen-lg px-8 mx-auto">
                    <div className="w-full min-h-screen my-8">
                        <div className="w-full flex flex-col py-10">
                            <h1 className="text-5xl font-bold">
                                {heroText}
                            </h1>
                            <div className="">
                                <h3 className="text-2xl mt-8">
                                    {collectedData}
                                </h3>
                                <p className="mt-2 hidden">
                                    No content !!!
                                </p>
                                <h3 className="text-2xl mt-8">
                                    {sharedData}
                                </h3>
                                <p className="mt-2 hidden">
                                    No content !!!
                                </p>
                                <h3 className="text-2xl mt-8">
                                    {logData}
                                </h3>
                                <p className="mt-2 hidden">
                                    No content !!!  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};