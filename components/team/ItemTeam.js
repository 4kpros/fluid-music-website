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
            <div className='w-fit h-fit relative group bg-white/10 transition-all duration-200 hover:scale-105 hover:bg-white/20'>
                <Image 
                    width={160}
                    height={160}
                    src={person && person.image ? person.image : ''} 
                    alt={person && person.name ? person.name : ''}
                    className="w-40 h-40 object-cover saturate-50 transition-all duration-200 group-hover:saturate-100" 
                />
            </div>
            <h3 className="w-40 font-semibold mt-4">
                {person && person.name ? person.name : ''}
            </h3>
            <h3 className="w-40 text-sm text-neutral-400">
                {person && person.work === "LDD" ? leadDeveloperDesigner : null}
                {person && person.work === "GM" ? githubMaintainer : null}
                {person && person.work === "AM" ? appMaintainer : null}
            </h3>
            <div className="w-auto flex space-x-4 mt-2">
                {
                    person && person.linkedin && (
                        <Link 
                            href={person.linkedin}
                            target='_blank'
                        >
                            <Image 
                                width={20} 
                                height={20} 
                                src="/images/svg/linkedin.svg" 
                                alt="linkedin"
                                className='w-5 h-5'
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
                                width={20} 
                                height={20} 
                                src="/images/svg/github.svg" 
                                alt="github"
                                className='w-5 h-5'
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
                                width={20} 
                                height={20} 
                                src="/images/svg/globe.svg" 
                                alt="globe"
                                className='w-5 h-5'
                        />
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default ItemTeam;