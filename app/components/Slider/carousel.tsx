"use client";

import { css } from "@emotion/css";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

import leftBlue from "./assets/leftBlue.png";
import leftPurple from "./assets/leftPurple.png";
import leftOrange from "./assets/leftOrange.png";

import rightBlue from "./assets/rightBlue.png";
import rightPurple from "./assets/rightPurple.png";
import rightOrange from "./assets/rightOrange.png";

export const Carousel: React.FC<CarouselProps> = ({
	children,
	bulletColor,
	bulletActiveColor,
	variant,
}) => {
	const { width } = useWindowDimensions();

	const settings = {
		infinite: true, 
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable:true,
		autoplay: true,
		autoplaySpeed: 3500, 
		arrows: false, 
	};
	
	const styles = css`
	 .slick-slide {
        cursor: pointer;  
    }
		.slick-disabled {
			opacity: 0;
			pointer-events: none;
		}

		/* Doc: customize arrow content and position */

		.slick-prev:before {
			content: url(${variant === "orange"
				? leftOrange.src
				: variant === "blue"
				? leftBlue.src
				: variant === "purple"
				? leftPurple.src
				: leftOrange.src});
		}

		.slick-next:before {
			content: url(${variant === "orange"
				? rightOrange.src
				: variant === "blue"
				? rightBlue.src
				: variant === "purple"
				? rightPurple.src
				: rightOrange.src});
		}

		.slick-prev,
		.slick-next {
			height: auto;
		}

		@media (min-width: 577px) {
			.slick-next {
				right: -50px;
			}

			.slick-prev {
				left: -50px;
			}
		}

		@media (max-width: 660px) {
			.slick-next {
				right: -30px;
			}
	
			.slick-prev {
				left: -30px;
			}
		}

		.slick-dots {
			margin-top: -20px;
			bottom: -50px;
		}

		.slick-dots li {			
			@media (max-width: 420px) {
				height: 13px;
				width: 13px;
			}
		}

		.slick-dots li button:before {
			font-size: 1rem;
			color: ${bulletColor}!important;
			opacity: 1;
		}

		.slick-dots li.slick-active button:before {
			font-size: 1rem;
			opacity: 1;
			color: ${bulletActiveColor}!important;
		}

		/* Fix problem: the arrow's opacity still be 1 after hover effects, needs to click in another area */

		.slick-next:hover:before,
		.slick-prev:hover:before {
			opacity: 1;
		}
	`;

	return (
		<Slider className={styles} {...settings} >
			{children}
		</Slider>
	);
};

interface CarouselProps {
	children: React.ReactNode;
	bulletActiveColor: string;
	bulletColor: string;
	variant?: string;
}

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
