'use client';
import { useSession, authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserMenu = () => {
    const { data: session } = useSession();
    const user = session?.user;
    console.log('session user:', user);
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push('/');
    };

    if (!user) return (
        <div className="flex items-center gap-2">
            <Link href="/logIn" className="btn btn-ghost btn-sm">Login</Link>
            <Link href="/register" className="btn btn-primary btn-sm text-white">Register</Link>
        </div>
    );

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="flex items-center gap-2 cursor-pointer">
                <div className="w-9 h-9 shrink-0 rounded-full overflow-hidden bg-gray-200 border-2 border-primary" style={{minWidth:'36px', maxWidth:'36px', minHeight:'36px', maxHeight:'36px'}}>
                    {user.image
                        ? <img src={user.image} alt={user.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                        : null
                    }
                    <div style={{display: user.image ? 'none' : 'flex'}} className="w-full h-full items-center justify-center text-gray-500 font-bold text-sm">
                        {user.name?.charAt(0).toUpperCase()}
                    </div>
                </div>
                <span className="text-sm font-medium text-gray-700 hidden lg:block">{user.name}</span>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48 mt-3 z-50 border border-gray-100">
                <li><Link href="/profile">My Profile</Link></li>
                <li><button onClick={handleSignOut} className="text-red-500">Sign Out</button></li>
            </ul>
        </div>
    );
};

export default UserMenu;
