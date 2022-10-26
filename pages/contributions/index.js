import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import ItemTeam from '../../components/team/ItemTeam'

const title = 'Contributions'
const description = "Contribuer au developpement du projet"

export default function Contributions() {
    return (
        <div>
            <NextSeo title={title} description={description} openGraph={{ title, description }} />
            <section className="w-full text-white">
                <div className="w-full max-w-screen-lg min-h-[65vh] px-8 mx-auto">
                    <div className="w-full my-8">
                        <div className="w-full flex flex-col items-center text-center">
                            <div className='w-auto'>
                                <Image width={100} height={100} objectFit="contain" src="/images/svg/community.svg" alt="Community"/>
                            </div>
                            <h1 className="text-2xl font-bold">
                                Rejoignez l&apos;equipe de developpement de Fluid Music.
                            </h1>
                            <div className='w-auto my-8'>
                                <a href='https://github.com/4kpros/fluidmusic' target='_blank' rel='noreferrer' className='w-auto px-6 py-2.5 flex justify-center items-center rounded-lg bg-gray-500 shadow-lg'>
                                    <p className='mr-2'>
                                        Code Source
                                    </p>
                                    <Image width={24} height={24} objectFit="contain" src="/images/svg/github.svg" alt="Github"/>
                                </a>
                            </div>
                            <article className="flex flex-col flex-wrap">
                                <h1 className="mt-4 text-xl font-semibold my-2">
                                    Traduction 
                                </h1>
                                <h3 className="">
                                Pour nous aider à traduire l'application, veuillez vous rendre à <a href='https://poeditor.com/join/project/ytUUxGZtzz' target='_blank' rel='noreferrer' className='w-auto underline font-bold text-blue-300'>cette page</a>.
                                </h3>
                            </article>
                            <article className="flex flex-col flex-wrap">
                                <h1 className="mt-4 text-xl font-semibold my-2">
                                    Design 
                                </h1>
                                <h3 className="">
                                Vous pourrez contribuer à l'amélioration de l'UX et l'UI. Veuillez cliquer sur <a href='https://www.figma.com/file/XwEoyQ1CvGClTxtUzq3PmI/Fluid-music?node-id=907%3A2' target='_blank' rel='noreferrer' className='w-auto underline font-bold text-blue-300'>ce lien</a> pour commencer.
                                </h3>
                            </article>
                            <article className="flex flex-col flex-wrap mt-8">
                                <h3 className="">
                                Fluid Music est un lecteur de sons local. Il ne supporte pas le streaming ou le téléchargement de musiques.
                                </h3>
                                <h3 className="">
                                    A noter que Fluid Music est sous licence GNU General Public Licence v3.0 (GPLv3). Vous pouvez trouver le lien <a href='https://github.com/4kpros/fluidmusic/LICENCE.md' target='_blank' rel='noreferrer' className='w-auto underline font-bold text-blue-300'>ici</a>.
                                </h3>
                            </article>
                            <article className="flex flex-col flex-wrap mt-8">
                                <h3 className="">
                                Merci à tous ceux qui prennent leur précieux temps pour améliorer cette application.
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};