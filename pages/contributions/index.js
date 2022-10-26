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
                <div className="w-full max-w-screen-lg px-8 mx-auto">
                    <div className="w-full min-h-screen my-8">
                        <div className="w-full flex flex-col items-center text-center">
                            <div className='w-auto'>
                                <Image width={100} height={100} objectFit="contain" src="/images/svg/community.svg" alt="Community"/>
                            </div>
                            <h1 className="text-2xl font-bold">
                                Rejoignez l&apos;equipe de developpement de Fluid Music.
                            </h1>
                            <div className='w-auto my-8'>
                                <a href='/' className='w-auto px-6 py-2.5 flex justify-center items-center rounded-lg bg-gray-500 shadow-lg'>
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
                                Pour nous aider a traduire l'application, veillez vous referer a cette page.
                                </h3>
                            </article>
                            <article className="flex flex-col flex-wrap">
                                <h1 className="mt-4 text-xl font-semibold my-2">
                                    Design 
                                </h1>
                                <h3 className="">
                                Vous pourrez contribuer a l'amelioration de l'UX et l'UI. Veillez cliquer sur ce lien pour commencer.
                                </h3>
                            </article>
                            <article className="flex flex-col flex-wrap mt-8">
                                <h3 className="">
                                Fluid Music est un lecteur de sons locaux. Il ne supporte pas le streaming ou le telechargement de musiques.
                                </h3>
                                <h3 className="">
                                Merci a tous ceux qui prennent leur precieux temps pour ameliorer cette application.
                                </h3>
                                <h3 className="">
                                A noter que Fluid Music est sous licence GNU General Public Licence v3.0 (GPLv3). Vous pouvez trouver le lien ici.
                                </h3>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};