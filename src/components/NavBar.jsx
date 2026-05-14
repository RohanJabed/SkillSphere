import Link from 'next/link';
import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-6 sticky top-0 z-50">
            {/* Logo */}
            <div className="navbar-start">
                <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
                    <div className="bg-primary text-white rounded-md w-8 h-8 flex items-center justify-center text-sm font-bold">S</div>
                    SkillSphere
                </Link>
            </div>

            {/* Center Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1 font-medium">
                    <li><Link href="/" className="hover:text-primary">Home</Link></li>
                    <li><Link href="/course" className="hover:text-primary">Courses</Link></li>
                    <li><Link href="/profile" className="hover:text-primary">My Profile</Link></li>
                </ul>
            </div>

            {/* Right: Search + Auth */}
            <div className="navbar-end gap-3 hidden lg:flex">
                <SearchBar />
                <Link href="/logIn" className="btn btn-ghost btn-sm">Login</Link>
                <Link href="/register" className="btn btn-primary btn-sm text-white">Register</Link>
            </div>

            {/* Mobile hamburger */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/course">Courses</Link></li>
                        <li><Link href="/profile">My Profile</Link></li>
                        <li><Link href="/logIn">Login</Link></li>
                        <li><Link href="/register">Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
