import Image from "next/image"
import Link from "next/link"

type HeaderProps = {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div className="bg-don-juan-purple h-16 shadow-2xl">
            <div className="w-fit h-16 mx-2 sm:ml-[25%]">

                <div className="flex flex-row items-center">
                    <div className="w-16 h-16 relative">
                        <Link href="https://anto.au">
                            <Image className="rounded-full" src="/images/anthony-mai-icon.png" alt="Photo of Anthony Mai" fill />
                        </Link>
                    </div>
                    <div className="ml-2 text-5xl">
                        {title}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header