'use client';
import { useForm } from "react-hook-form";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter();

    const handleFormSubmit = async (data) => {
        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
        });
        if (res) router.push('/logIn');
        if (error) alert(error.message);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Create Account 🎓</h1>
                <p className="text-gray-500 text-sm mb-6">Join thousands of learners and start learning today.</p>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className={`input input-bordered w-full ${errors.name ? 'border-red-400' : ''}`}
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className={`input input-bordered w-full ${errors.email ? 'border-red-400' : ''}`}
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className={`input input-bordered w-full ${errors.password ? 'border-red-400' : ''}`}
                            {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Minimum 8 characters' } })}
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className={`input input-bordered w-full ${errors.confirmPassword ? 'border-red-400' : ''}`}
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: val => val === watch('password') || 'Passwords do not match'
                            })}
                        />
                        {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary w-full text-white rounded-full">Register</button>

                    <div className="divider text-xs text-gray-400">or</div>

                    <button type="button" onClick={() => authClient.signIn.social({ provider: 'google', callbackURL: '/course' })} className="btn btn-outline w-full rounded-full gap-2">
                        <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />
                        Continue with Google
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{' '}
                    <Link href="/logIn" className="text-primary font-medium hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
