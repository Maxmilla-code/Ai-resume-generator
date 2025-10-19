import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";
import Logo from "~/components/Logo";

export const meta = () => ([
    { title: 'Scanara | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth, puterReady, error } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    const handleSignIn = async () => {
        console.log('Sign in clicked, Puter ready:', puterReady);
        if (!puterReady) {
            alert('Puter.js is still loading. Please wait a moment and try again.');
            return;
        }
        await auth.signIn();
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-0">
            <div className="flex flex-row w-full h-screen max-lg:h-auto bg-white overflow-hidden max-lg:flex-col shadow-2xl">
                {/* Left Side - Branding & Illustration */}
                <div className="w-1/2 max-lg:w-full bg-gradient-to-br from-[#8E98FF] via-[#7B88FF] to-[#606BEB] p-12 flex flex-col justify-between max-lg:min-h-[400px] relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                    
                    <div className="flex flex-col gap-6 relative z-10">
                        <Logo variant="white" size="lg" />
                        <div className="flex flex-col gap-4 mt-4">
                            <h3 className="text-white text-3xl font-semibold leading-tight">
                                AI-Powered Resume Analysis
                            </h3>
                            <p className="text-white/90 text-lg leading-relaxed max-w-md">
                                Transform your career journey with intelligent resume insights. Get instant ATS scores, personalized feedback, and optimization tips powered by advanced AI.
                            </p>
                        </div>
                        
                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                <span className="text-white text-sm font-medium">✓ ATS Optimization</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                <span className="text-white text-sm font-medium">✓ AI Feedback</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                <span className="text-white text-sm font-medium">✓ Instant Results</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Illustration */}
                    <div className="flex items-center justify-center mt-8 relative z-10">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
                            <img 
                                src="/images/scan-login.jpg" 
                                alt="Resume Analysis Dashboard" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Auth Form */}
                <div className="w-1/2 max-lg:w-full p-12 flex flex-col justify-center max-lg:p-8 bg-white relative">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, #8E98FF 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                    
                    <div className="flex flex-col gap-8 max-w-md mx-auto w-full relative z-10">
                        <div className="flex flex-col gap-3">
                            <div className="inline-flex items-center gap-2 mb-2">
                                <div className="h-1 w-12 bg-gradient-to-r from-[#8E98FF] to-[#606BEB] rounded-full"></div>
                            </div>
                            <h1 className="text-5xl max-lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Welcome Back
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Sign in to continue your resume optimization journey
                            </p>
                        </div>

                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium">{error}</span>
                                </div>
                            </div>
                        )}

                        {!puterReady && (
                            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 px-4 py-3 rounded-lg shadow-sm animate-pulse">
                                <div className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="font-medium">Loading authentication system...</span>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col gap-6">
                            {isLoading ? (
                                <button className="primary-gradient rounded-2xl py-4 px-8 cursor-pointer w-full text-xl font-semibold text-white animate-pulse shadow-lg" disabled>
                                    <div className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing you in...
                                    </div>
                                </button>
                            ) : (
                                <>
                                    {auth.isAuthenticated ? (
                                        <button 
                                            className="primary-gradient rounded-2xl py-4 px-8 cursor-pointer w-full text-xl font-semibold text-white hover:primary-gradient-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                                            onClick={auth.signOut}
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Log Out
                                            </div>
                                        </button>
                                    ) : (
                                        <button 
                                            className="primary-gradient rounded-2xl py-4 px-8 cursor-pointer w-full text-xl font-semibold text-white hover:primary-gradient-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:transform-none"
                                            onClick={handleSignIn}
                                            disabled={!puterReady}
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                </svg>
                                                Sign In to Continue
                                            </div>
                                        </button>
                                    )}
                                </>
                            )}
                            
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">Secure authentication powered by Puter</span>
                                </div>
                            </div>
                            
                            <p className="text-sm text-gray-500 text-center leading-relaxed">
                                By continuing, you agree to our{' '}
                                <a href="#" className="text-[#8E98FF] hover:text-[#606BEB] font-medium transition-colors">Terms of Service</a>
                                {' '}and{' '}
                                <a href="#" className="text-[#8E98FF] hover:text-[#606BEB] font-medium transition-colors">Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Auth
