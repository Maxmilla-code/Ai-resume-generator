interface LogoProps {
    variant?: 'default' | 'white';
    size?: 'sm' | 'md' | 'lg';
    showIcon?: boolean;
}

const Logo = ({ variant = 'default', size = 'md', showIcon = true }: LogoProps) => {
    const sizeClasses = {
        sm: {
            icon: 'w-8 h-8 text-lg',
            text: 'text-xl'
        },
        md: {
            icon: 'w-10 h-10 text-xl',
            text: 'text-2xl'
        },
        lg: {
            icon: 'w-12 h-12 text-2xl',
            text: 'text-4xl'
        }
    };

    const iconBgClass = variant === 'white' 
        ? 'bg-white/20 backdrop-blur-sm' 
        : 'bg-gradient-to-br from-[#8E98FF] to-[#606BEB] shadow-md';

    const textClass = variant === 'white' 
        ? 'text-white' 
        : 'text-gradient';

    return (
        <div className="flex items-center gap-3">
            {showIcon && (
                <div className={`${sizeClasses[size].icon} ${iconBgClass} rounded-xl flex items-center justify-center`}>
                    <span className={`text-white font-bold ${sizeClasses[size].icon.split(' ')[2]}`}>S</span>
                </div>
            )}
            <span className={`${sizeClasses[size].text} font-bold tracking-tight ${textClass}`}>
                Scanara
            </span>
        </div>
    );
};

export default Logo;
