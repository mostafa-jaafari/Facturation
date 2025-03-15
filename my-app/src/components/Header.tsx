import Link from "next/link";

export default function Header(){
    return (
        <main className="sticky top-0 z-50 backdrop-blur-lg bg-neutral-900 bg-opacity-40 w-full flex items-center justify-between py-4 border-b border-dashed border-neutral-700 lg:px-20 px-6">
            <Link href='/' className="font-semibold text-2xl">
                Facturation
            </Link>
            <div className="space-x-4">
                <Link href='/login'>Login</Link>
                <span className="text-neutral-700">|</span>
                <Link href='/register'>Register</Link>
            </div>
        </main>
    )
}