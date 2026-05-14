'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/course?search=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center gap-1">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                className="input input-bordered input-sm w-48"
            />
            <button type="submit" className="btn btn-primary btn-sm">Search</button>
        </form>
    );
};

export default SearchBar;
