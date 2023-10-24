import NextLink from "next/link";
import { ComponentPropsWithRef, forwardRef } from "react";
import Text from "@/reusable-components/text";
import classNames from "classnames";

export interface LinkProps extends ComponentPropsWithRef<"a"> {
  external?: boolean;
  href: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, external, className, children, ...rest }, ref) => {
    const classes = classNames(
      "hover:text-indigo-600 ease-in duration-100",
      className
    );

    const content =
      typeof children === "string" ? (
        <Text as="p" variant="p">
          {children}
        </Text>
      ) : (
        children
      );

    if (external) {
      return (
        <NextLink
          ref={ref}
          href={href}
          className={classes}
          {...rest}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </NextLink>
      );
    }
    return (
      <NextLink ref={ref} className={classes} href={href} {...rest}>
        {children}
      </NextLink>
    );
  }
);

Link.defaultProps = {
  external: false,
};

Link.displayName = "Link";

export default Link;
