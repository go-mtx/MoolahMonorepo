import MoolahLogo from "./svg/logo.svg"

export type ImageName = |
    'logo'

export interface ImageProps {
    name: ImageName;
}

export interface PlatformImageProps {
    image: string;
    alt: string;
}

/**
 * No styling for now. Any updates need to be made to the svg.
 * 
 * An alternative is creating a new SVG with specific style updates and updating
 * the ImageName type.
 */
export const SvgImage = ({
    name
}: ImageProps) => {

    switch (name) {
        case 'logo':
            return <MoolahLogo />;
        default:
            return <MoolahLogo />;
    }
}

/**
 * i18n
 */
export const getAltText = (name: ImageName): string => {
    switch (name) {
        case 'logo':
            return 'Moolah logo';
        default:
            return 'Moolah logo';
    }
}