import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { ErrorImage } from "../../public/Images";
import { BadgeInfo, ChartNoAxesCombined, ChevronDown, Scroll, Settings, User } from "lucide-react";
import SignOut from "@/Buttons/SignOut";
const NavLink = [
    {label: 'my profile', icon: User},
    {label: 'dashboard', icon: ChartNoAxesCombined},
    {label: 'my invoices', icon: Scroll},
    {label: 'settings', icon: Settings},
    {label: 'help center', icon: BadgeInfo},
];
export default async function Header(){
    const Session = await auth();
    return (
        <main className="sticky top-0 z-50 backdrop-blur-lg bg-neutral-900 bg-opacity-40 w-full flex items-center justify-between py-4 border-b border-dashed border-neutral-700 lg:px-20 px-6">
            <Link href='/' className="font-semibold text-2xl">
                Facturation
            </Link>
                {Session ? (
                <section className="relative group">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-neutral-300">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image src={Session.user?.image || ErrorImage} alt="" className="object-cover" fill/>
                        </div>
                        <p>{Session.user?.name}</p>
                        <ChevronDown size={20}/>
                    </div>
                    {/* ---------- DropDown Menu ----------- */}
                    <div className="absolute bg-neutral-800 border border-neutral-700 min-w-56 rounded-lg p-4 right-0 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top-right">
                        <nav className="border-b border-neutral-700 pb-2">
                            <h1 className="font-semibold">{Session.user?.name}</h1>
                            <p className="text-neutral-500 text-sm">{Session.user?.email}</p>
                            <p className="text-xs bg-indigo-600 w-max py-1 px-2 my-2 rounded-full">Professional Plan</p>
                        </nav>
                        <nav className="flex flex-col border-b border-neutral-700 py-2">
                            {NavLink.map((nav, index) => {
                                return (
                                    <Link href={nav.label.replace(" ", "").toLocaleLowerCase()} 
                                        key={index}
                                        className="hover:text-neutral-400 flex items-end gap-2 space-y-2">
                                        <nav.icon size={24}/>
                                        <p className="capitalize">
                                            {nav.label}
                                        </p>
                                    </Link>
                                )
                            })}
                        </nav>
                        <nav className="pt-2">
                            <SignOut />
                        </nav>
                    </div>
                </section>
                )
                :
                (
                <section className="space-x-4">
                    <Link href='/login'>Login</Link>
                    <span className="text-neutral-700">|</span>
                    <Link href='/register'>Register</Link>
                </section>
                )}
        </main>
    )
}