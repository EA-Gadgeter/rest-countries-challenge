interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  fillColor?: string;
}

export const SunIcon: React.FC<IconProps> = ({ width = 18, height = 18, strokeColor = "#111517", className }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );
};

export const ArrowLeftIcon: React.FC<IconProps> = ({ width = 16, height = 16, strokeColor = "#111517", className }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M5 12l6 6" />
      <path d="M5 12l6 -6" />
    </svg>
  );
};

export const SemiMoonIcon: React.FC<IconProps> = ({ width = 18, height = 17, strokeColor = "#111517", fillColor = "none", className }) => {
  return (
    <svg 
      className={className}
      width={width} 
      height={height} 
      viewBox="0 0 18 17" 
      fill="none" 
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5532 11.815C8.66857 11.815 5.51929 8.92783 5.51929 5.36821C5.51929 4.0253 5.96679 2.78158 6.73143 1.75C3.69036 2.69515 1.5 5.33122 1.5 8.43807C1.5 12.3385 4.94929 15.5 9.20357 15.5C12.5929 15.5 15.4696 13.4932 16.5 10.7045C15.375 11.4048 14.0161 11.815 12.5532 11.815Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.25"/>
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({ width = 16, height = 16, strokeColor = "#B2B2B2", className }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      className={className}
      viewBox="0 0 16 16"
      fill="none"
    >
      <g id="search">
        <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z" fill={strokeColor} />
      </g>
    </svg>
  );
};

export const ChevronDownIcon: React.FC<IconProps> = ({ width = 12, height = 12, strokeColor = "#B2B2B2", className }) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 12 12" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z" fill={strokeColor}/>
    </svg>

  );
};