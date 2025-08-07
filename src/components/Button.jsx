function Button({ 
  children, 
  variant = 'secondary', 
  className = '', 
  onClick, 
  disabled = false,
  type = 'button',
  ...rest 
}) {
  const baseStyles = "flex items-center text-xs gap-1 px-2 py-1 font-medium rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap";
  
  const variants = {
    primary: 'bg-primary text-primaryblack hover:bg-primary/90 focus:ring-primary',
    secondary: 'border-primary border text-primary hover:bg-primary hover:text-primaryblack focus:ring-primary',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${baseStyles} ${variants[variant] || variants.secondary} ${disabledStyles} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;