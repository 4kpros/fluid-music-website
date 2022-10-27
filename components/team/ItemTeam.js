import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const ItemTeam = ({person}) => {
    const { t } = useTranslation('common')
  
    const leadDeveloperDesigner = t('leadDeveloperDesigner')
    const githubMaintainer = t('githubMaintainer')
    const appMaintainer = t('appMaintainer')

    return (
        <div className="w-auto flex flex-col m-4">
            <div className="h-52 w-52 relative">
                <Image className="rounded-lg" objectFit="cover" layout="fill" src={person && person.image ? person.image : '/images/profile/prosperabouar.webp'} alt={person && person.name ? person.name : 'Pas de nom !'}/>
            </div>
            <h3 className="font-semibold mt-4">
                {person && person.name ? person.name : 'Pas de nom !'}
            </h3>
            <h3 className="text-neutral-400">
                {person && person.work === "LDD" ? leadDeveloperDesigner : null}
                {person && person.work === "GM" ? githubMaintainer : null}
                {person && person.work === "AM" ? appMaintainer : null}
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