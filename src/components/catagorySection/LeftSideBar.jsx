import Link from 'next/link';
const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div className="bg-base-100 rounded-xl shadow-sm border border-base-200 p-4">
            <h2 className="text-lg font-bold mb-4 pb-2 border-b border-base-200">All Categories</h2>
            <ul className="flex flex-col gap-1">
                {categories?.map(category =>
                  (
                    <li key={category.id}>
                        <Link
                            href={`/catagory/${category.id}`}
                            className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                activeId === category.id
                                    ? 'bg-primary text-white'
                                    : 'hover:bg-base-200'
                            }`}
                        >
                            {category.category}
                        </Link>
                    </li>
                ) 
            )}
            </ul>
        </div>
    );
};

export default LeftSideBar;