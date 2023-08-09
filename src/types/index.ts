export interface NavItemProps {
    title?: string,
    scrollTo?: () => void,
}

export interface SectionTitleProps {
    title: string,
    sectionStyles?: string,
}

export interface OptionsProps {
    title: string,
    value: string[],
    isAllOpen?: boolean,
}


export interface ToggleSwitchProps {
    isAllOpen: boolean, 
    setIsAllOpen: () => void,
}

export interface CardDetailProps {
    title: string,
    type?: string, 
    link?: string,
    src?: string, 
    img?: number,
    desc?: string[],
    setIsOpen?: () => void,
}

export interface CardProps {
    data: CardDetailProps,
}

