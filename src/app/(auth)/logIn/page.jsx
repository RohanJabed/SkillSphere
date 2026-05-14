'use client';
import { useForm } from "react-hook-form";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LogInPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const handleFormSubmit = async(data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
        });
        if (res) {
            toast.success('Logged in successfully!');
            router.push('/');
        }
        if (error) toast.error(error.message);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md animate__animated animate__fadeInUp">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back! 👋</h1>
                <p className="text-gray-500 text-sm mb-6">Login to continue your learning journey.</p>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
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
                        <div className="flex justify-between mb-1">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className={`input input-bordered w-full ${errors.password ? 'border-red-400' : ''}`}
                            {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Minimum 8 characters' } })}
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary w-full text-white rounded-full">Login</button>

                    <div className="divider text-xs text-gray-400">or</div>

                    <button type="button" onClick={() => authClient.signIn.social({ provider: 'google', callbackURL: '/course' })} className="btn btn-outline w-full rounded-full gap-2">
                        <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />
                        Continue with Google
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Dont have an account?{' '}
                    <Link href="/register" className="text-primary font-medium hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LogInPage;
