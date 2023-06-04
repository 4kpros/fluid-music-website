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
                src={person && person.image ? person.image : ''} 
                alt={person && person.name ? person.name : 'Pas de nom !'}
                className="w-52 h-52 lg:w-56 lg:h-56 object-cover saturate-50 bg-white/10 transition-all duration-300 hover:saturate-100 hover:scale-105 hover:bg-white/20" 
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
                {
                    person && person.linkedin && (
                        <Link 
                            href={person.linkedin}
                            target='_blank'
                        >
                            <Image 
                                width={35} 
                                height={35} 
                                src="/images/svg/linkedin.svg" 
                                alt="linkedin"
                        />
                        </Link>
                    )
                }
                {
                    person && person.github && (
                        <Link 
                            href={person.github}
                            target='_blank'
                        >
                            <Image 
                                width={35} 
                                height={35} 
                                src="/images/svg/github.svg" 
                                alt="github"
                        />
                        </Link>
                    )
                }
                {
                    person && person.website && (
                        <Link 
                            href={person.website}
                            target='_blank'
                        >
                            <Image 
                                width={35} 
                                height={35} 
                                src="/images/svg/globe.svg" 
                                alt="globe"
                        />
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default ItemTeam;