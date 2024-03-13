import { HTMLProps, PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren<HTMLProps<HTMLDivElement>> {

}

export const Container = ({ className = "", children, ...props }: ContainerProps) => {
    return (
        <div {...props} className={`w-[90%] mx-auto px-2 xl:max-w-[1140px] 2xl:max-w-[1320px] ${className}`}>
            {children}
        </div>
    )
}