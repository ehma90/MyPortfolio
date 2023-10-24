import classNames from "classnames";
import { ComponentPropsWithRef, FC } from "react";

export interface ContainerProps extends ComponentPropsWithRef<"div"> {}

const Container: FC<ContainerProps> = ({ children, className, ...rest }) => {
    const baseClassName = "mx-auto md:max-w-7xl lg:max-w-8xl px-2 md:px-8";
    return (
        <div className={classNames(baseClassName, className)} {...rest}>
            {children}
        </div>
    );
};

export default Container;
