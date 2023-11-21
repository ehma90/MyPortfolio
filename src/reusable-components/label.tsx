import clsx from "clsx";
import { ComponentPropsWithRef, forwardRef } from "react";

interface LabelProps extends ComponentPropsWithRef<"label"> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
    ({ children, className, ...rest }, ref) => {
        return (
            <label
                ref={ref}
                {...rest}
                className={clsx("text-md font-medium font-red-hat", className)}
            >
                {children}
            </label>
        );
    }
);

Label.displayName = "Label";

export default Label;

