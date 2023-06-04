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
            <div className='relative group bg-white/10 transition-all duration-200 hover:scale-105 hover:bg-white/20'>
                <Image 
                    width={300}
                    height={300}
                    src={person && person.image ? person.image : ''} 
                    alt={person && person.name ? person.name : ''}
                    className="w-52 h-52 lg:w-56 lg:h-56 object-cover saturate-50 transition-all duration-200 group-hover:saturate-100" 
                />
                <div className='w-full h-full flex justify-center items-center absolute top-0 left-0 -z-10 bg-white/10'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        className='w-12 h-12 fill-white opacity-20 animate-pulse' 
                    >
                        <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"></path>
                    </svg>
                </div>
            </div>
            <h3 className="font-semibold mt-4">
                {person && person.name ? person.name : ''}
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