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
            <Image 
                width={300}
                height={300}
                src={person && person.image ? person.image : '/images/profile/prosperabouar.webp'} 
                alt={person && person.name ? person.name : 'Pas de nom !'}
                className="h-52 w-52 rounded-lg object-cover" 
            />
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
                    <Image 
                        width={35} 
                        height={35} 
                        src="/images/svg/linkedin.svg" 
                        alt="linkedin"
                    />
                </Link>
                {/* <Link 
                    href={person && person.github ? person.github : '#'}
                >
                    <Image 
                        width={35} 
                        height={35} 
                        src="/images/svg/github.svg" 
                        alt="github"
                />
                </Link> */}
                <Link 
                    href={person && person.website ? person.website : '#'}
                >
                    <Image 
                        width={35} 
                        height={35} 
                        src="/images/svg/globe.svg" 
                        alt="website"
                    />
                </Link>
            </div>
        </div>
    );
};

export default ItemTeam;