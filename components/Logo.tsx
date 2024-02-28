import Link from "next/link";
import { SVGProps } from "react";

interface LogoProps {
  redirect?: boolean;
}

const Logo = ({ redirect = true, ...props }: LogoProps & SVGProps<SVGSVGElement>) => {
  if (redirect) {
    return (
      <Link href={"/"} className="hidden md:block cursor-pointer" scroll={false}>
        <svg
          {...props}
          width="69px"
          height="61px"
          viewBox="0 0 69 61"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            fontFamily="Monoton-Regular, Monoton"
            fontSize="40"
            fontWeight="normal"
          >
            <text id="YY">
              <tspan x="0" y="46" fill="#D21404">
                Y
              </tspan>
              <tspan x="31.5625" y="46" fill="#D21404">
                Y
              </tspan>
            </text>
          </g>
        </svg>
      </Link>
    );
  } else {
    return (
      <svg
        {...props}
        width="69px"
        height="61px"
        viewBox="0 0 69 61"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          fontFamily="Monoton-Regular, Monoton"
          fontSize="40"
          fontWeight="normal"
        >
          <text id="YY">
            <tspan x="0" y="46" fill="#D21404">
              Y
            </tspan>
            <tspan x="31.5625" y="46" fill="#D21404">
              Y
            </tspan>
          </text>
        </g>
      </svg>
    );
  }
};

export default Logo;
