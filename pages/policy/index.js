import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const title = 'Politique de confidentialite'
const description = "Fluid music website"

const index = () => {
    return (
        <div>
            <NextSeo title={title} description={description} openGraph={{ title, description }} />
            <section className="w-full text-white">
                <div className="w-full max-w-screen-lg px-8 mx-auto">
                    <div className="w-full min-h-screen my-8">
                        <div className="w-full flex flex-col py-10">
                            <h1 className="text-5xl font-bold">
                                Parametres de confidentialite
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default index;