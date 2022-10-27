import Image from 'next/image'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

const title = 'Les nouveautes'
const description = "Fluid music website"

export default function News() {
  return (
    <div>
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <section className="w-full text-white">
            <div className="w-full max-w-screen-lg px-8 mx-auto">
                <div className="w-full min-h-[65vh] my-8">
                    <div className="w-full flex flex-col my-10">
                        <h1 className="font-bold text-2xl">
                          Les fonctionnalités
                        </h1>
                        <div className="w-full flex flex-col flex-wrap mt-5">
                          <p className='w-auto'>
                            - Ecoute
                          </p>
                          <p className='w-auto'>
                            - Ecoute
                          </p>
                          <p className='w-auto'>
                            - Ecoute
                          </p>
                          <p className='w-auto'>
                            - Ecoute
                          </p>
                          <p className='w-auto'>
                            - Ecoute
                          </p>
                          <p className='w-auto'>
                            - Ecoute
                          </p><p className='w-auto'>
                            - Ecoute
                          </p>

                        </div>
                        <h1 className="font-bold text-2xl mt-8">
                          Les Nouveautés
                        </h1>
                        <div className="w-full flex flex-col flex-wrap mt-5">
                          <p className='w-auto'>
                            - Ecoute
                          </p>
                          <p className='w-auto'>
                            - Ecoute
                          </p>
                          <p className='w-auto'>
                            - Ecoute
                          </p><p className='w-auto'>
                            - Ecoute
                          </p>
                          <p className='w-auto'>
                            - Ecoute
                          </p><p className='w-auto'>
                            - Ecoute
                          </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
