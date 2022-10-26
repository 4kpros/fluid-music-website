import Image from 'next/image'
import Link from 'next/link'

const ItemTeam = ({person}) => {
    return (
        <div className="w-auto flex flex-col m-4">
            <div className="h-52 w-52 relative">
                <Image className="rounded-lg" objectFit="cover" layout="fill" src={person && person.image ? person.image : '/images/profile/prosperabouar.webp'} alt={person && person.name ? person.name : 'Pas de nom !'}/>
            </div>
            <h3 className="font-semibold mt-4">
                {person && person.name ? person.name : 'Pas de nom !'}
            </h3>
            <h3 className="text-neutral-400">
                {person && person.work ? person.work : 'Pas de travail !'}
            </h3>
            <div className="w-full flex mt-4 space-x-8">
                <Link href={person && person.linkedin ? person.linkedin : '#'}>
                    <a target="_blank">
                        <Image width={35} height={35} objectFit="contain" src="/images/svg/linkedin.svg" alt="linkedin"/>
                    </a>
                </Link>
                <Link href={person && person.github ? person.github : '#'}>
                    <a target="_blank">
                        <Image width={35} height={35} objectFit="contain" src="/images/svg/github.svg" alt="github"/>
                    </a>
                </Link>
                <Link href={person && person.website ? person.website : '#'}>
                    <a target="_blank">
                        <Image width={35} height={35} objectFit="contain" src="/images/svg/globe.svg" alt="website"/>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ItemTeam;