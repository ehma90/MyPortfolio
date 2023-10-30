import { ComponentPropsWithRef, forwardRef } from "react";
import Label from "./label";
import classNames from "classnames";

interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {
  label?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, id, label, ...rest }, ref) => {
    const baseClassName = `p-2.5 font-red-hat block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 resize-none h-40`;
    return (
      <div className="w-full">
        {label && <Label id={`${id}-label`}>{label}</Label>}
        <textarea
          {...rest}
          id={id}
          className={classNames(baseClassName, className)}
          ref={ref}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
