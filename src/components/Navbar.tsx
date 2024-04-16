import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="h-15 w-full flex justify-between items-center p-5 bg-gray-800 text-white">
            <div>
                <h1 className="text-2xl font-bold">Create T3 App</h1>
            </div>
            <div>
                <ul className="flex gap-5">
                    <li>
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}