import classNames from "classnames";
import { ComponentPropsWithRef, forwardRef } from "react";

type Size = "sm" | "md" | "lg";

export interface InputProps extends ComponentPropsWithRef<"input"> {
    inputSize?: Size;
}

const sizeMap: Record<Size, string> = {
    sm: "p-2",
    md: "p-2.5",
    lg: "p-4",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputSize, ...rest }, ref) => {
        const baseClassName = `${
            sizeMap[inputSize || "md"]
        } font-red-hat block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500`;

        return (
            <input
                {...rest}
                className={classNames(baseClassName, className)}
                ref={ref}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;
