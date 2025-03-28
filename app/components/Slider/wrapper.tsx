import background from "./assets/background.png"

export const Wrapper: React.FC<LayoutProps> = ({
	children,
	border = true,
	backgroundColor,
	backgroundImage = false,
	borderColor,
}) => {
	const containerStyle = backgroundImage
    ?	{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
		borderColor: `${borderColor}`,
		borderWidth: "0px",
		borderStyle: "solid",
      }
    : {
        backgroundColor: `${backgroundColor}`,
		borderColor: `${borderColor}`,
		borderWidth: "0px",
		borderStyle: "solid",
		borderRadius: "48px",
      };

	return (
		<>
			{border ? (
				<div className="w-full" style={containerStyle}>
					<div className="flex flex-col items-center justify-center w-full" >
						<div 
							className="w-full flex flex-col justify-center items-center pt-6 px-10 sm:pt-8 sm:px-20 lg:pt-8 lg:px-[100px] pb-16 rounded-4xl"
						>
							<div className="w-full mx-1 flex flex-col justify-center">
								{children}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="w-full" style={containerStyle}>
					<div className="flex flex-col items-center w-full">
						<div className="w-full flex flex-col justify-center items-center pt-6 px-10 sm:pt-8 sm:px-20 lg:pt-8 lg:px-[100px] pb-12">
							<div className="w-full mx-1 flex flex-col justify-center">
								{children}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

interface LayoutProps {
	children: React.ReactNode;
	backgroundColor?: string;
	backgroundImage?: boolean;
	borderColor?: string;
	border?: boolean;
}