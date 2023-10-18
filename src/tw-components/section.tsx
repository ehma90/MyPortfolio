import classNames from "classnames";
import { ComponentPropsWithRef, FC } from "react";

export interface SectionProps extends ComponentPropsWithRef<"section"> {
    clean?: boolean;
}

const Section: FC<SectionProps> = ({ children, clean, className, ...rest }) => {
    return (
        <section className={classNames(!clean && "py-10", className)} {...rest}>
            {children}
        </section>
    );
};

export default Section;
