'use client';
import { authClient } from '@/lib/auth-client';
import { useSession } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ProfilePage = () => {
    const { data: session } = useSession();
    const user = session?.user;
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        values: {
            name: user?.name || '',
            image: user?.image || '',
        }
    });

    const handleFormSubmit = async (data) => {
        const { error } = await authClient.updateUser({
            name: data.name,
            image: data.image,
        });
        if (!error) { toast.success('Profile updated successfully!'); setSuccess(true); }
        else toast.error(error.message);
    };

    if (!user) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-500">Please log in to view your profile.</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md animate__animated animate__fadeInUp">

                {/* Avatar */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mb-3">
                        {user.image
                            ? <img src={user.image} alt={user.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                            : null
                        }
                        <div style={{display: user.image ? 'none' : 'flex'}} className="w-full h-full items-center justify-center text-3xl text-gray-400">👤</div>
                    </div>
                    <h2 className="font-bold text-gray-900 text-lg">{user.name}</h2>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                </div>

                {success && <p className="text-green-500 text-sm text-center mb-4">Profile updated successfully!</p>}

                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
                        <input
                            type="text"
                            className={`input input-bordered w-full ${errors.name ? 'border-red-400' : ''}`}
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Photo URL</label>
                        <input
                            type="text"
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered w-full"
                            {...register('image')}
                        />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full text-white rounded-full">
                        {isSubmitting ? 'Updating...' : 'Update Profile'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
