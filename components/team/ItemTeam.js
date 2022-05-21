import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

const ItemTeam = ({person}) => {
    return (
        <div className="flex flex-col m-4">
            <div className="h-96 w-96 relative">
                <Image className="rounded-lg" objectFit="cover" layout="fill" blurDataURL={person && person.image ? person.image : '/images/profile/prosperabouar.webp'} src={person && person.image ? person.image : '/images/profile/prosperabouar.webp'} alt={person && person.name ? person.name : 'Pas de nom !'}/>
            </div>
            <h3 className="text-2xl font-semibold mt-4">
                {person && person.name ? person.name : 'Pas de nom !'}
            </h3>
            <h3 className="text-lg text-neutral-400">
                {person && person.work ? person.work : 'Pas de travail !'}
            </h3>
            <div className="w-full flex mt-4 space-x-8">
                <Link href={person && person.linkedin ? person.linkedin : '#'}>
                    <a target="_blank">
                        <Image width={35} height={35} objectFit="contain" blurDataURL="/images/svg/linkedin.svg" src="/images/svg/linkedin.svg" alt=""/>
                    </a>
                </Link>
                <Link href={person && person.github ? person.github : '#'}>
                    <a target="_blank">
                        <Image width={35} height={35} objectFit="contain" blurDataURL="/images/svg/github.svg" src="/images/svg/github.svg" alt=""/>
                    </a>
                </Link>
                <Link href={person && person.website ? person.website : '#'}>
                    <a target="_blank">
                        <Image width={35} height={35} objectFit="contain" blurDataURL="/images/svg/globe.svg" src="/images/svg/globe.svg" alt=""/>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ItemTeam;