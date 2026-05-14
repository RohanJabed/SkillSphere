import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <div className="bg-primary text-white rounded-md w-8 h-8 flex items-center justify-center text-sm font-bold">S</div>
                        SkillSphere
                    </div>
                    <p className="text-sm">Empowering learners worldwide with quality education and industry-relevant skills.</p>
                    <div className="flex gap-3">
                        {/* Facebook */}
                        <a href="#" className="hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                        {/* Twitter */}
                        <a href="#" className="hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        {["Home", "Courses", "My Profile", "Become Instructor"].map((l) => (
                            <li key={l}>
                                <Link href="#" className="hover:text-white transition">{l}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                        {["Help Center", "Contact Us", "Terms & Conditions", "Privacy Policy"].map((l) => (
                            <li key={l}>
                                <Link href="#" className="hover:text-white transition">{l}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <span>📧</span> support@skillsphere.com
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📞</span> +1234 567 8900
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📍</span> 123 Learning St, Education City, EC 10001
                        </li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-800 text-center text-sm py-5">
                © 2024 SkillSphere. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
