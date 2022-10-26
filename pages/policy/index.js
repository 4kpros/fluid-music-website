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
                                Paramètres de confidentialité
                            </h1>
                            <div className="">
                                <h3 className="text-2xl mt-8">
                                    Les donnés collectées
                                </h3>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tellus nec blandit porttitor. Nulla faucibus nulla turpis, sed aliquet diam sollicitudin at. Suspendisse nec mauris odio. Sed pulvinar neque sit amet velit euismod, eget mollis diam imperdiet. In hac habitasse platea dictumst. Praesent rhoncus neque sit amet elit feugiat, vel convallis orci laoreet. Curabitur tempor elementum nulla ut tempor.
                                </p>
                                <h3 className="text-2xl mt-8">
                                    Les donnés partagées
                                </h3>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tellus nec blandit porttitor. Nulla faucibus nulla turpis, sed aliquet diam sollicitudin at. Suspendisse nec mauris odio. Sed pulvinar neque sit amet velit euismod, eget mollis diam imperdiet. In hac habitasse platea dictumst. Praesent rhoncus neque sit amet elit feugiat, vel convallis orci laoreet. Curabitur tempor elementum nulla ut tempor.
                                </p>
                                <h3 className="text-2xl mt-8">
                                    Log Data
                                </h3>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tellus nec blandit porttitor. Nulla faucibus nulla turpis, sed aliquet diam sollicitudin at. Suspendisse nec mauris odio. Sed pulvinar neque sit amet velit euismod, eget mollis diam imperdiet. In hac habitasse platea dictumst. Praesent rhoncus neque sit amet elit feugiat, vel convallis orci laoreet. Curabitur tempor elementum nulla ut tempor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default index;