import * as React from "react";
import { cn } from "@/lib/utils";

export function RadioGroup({
  className,
  ...props
}: React.FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return <fieldset className={cn("uiRadioGroup", className)} {...props} />;
}

type RadioGroupItemProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "children"> & {
  name: string;
  value: string;
  defaultChecked?: boolean;
  children: React.ReactNode;
};

export function RadioGroupItem({
  className,
  name,
  value,
  defaultChecked,
  children,
  ...props
}: RadioGroupItemProps) {
  return (
    <label className={cn("uiRadioItem", className)} {...props}>
      <input name={name} type="radio" value={value} defaultChecked={defaultChecked} />
      <span>{children}</span>
    </label>
  );
}
