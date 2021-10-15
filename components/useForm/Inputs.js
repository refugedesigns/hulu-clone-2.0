import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function Form({ defaultValues, children, className, onSubmit }) {
  const { handleSubmit, register } = useForm({ defaultValues});

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name
                  }
                })
              : child;
          })
        : children}
    </form>
  );
}

export function Input({ register, name, className, type, ...rest }) {
  return <input type={type} className={className} {...register(name)} {...rest} />;
}

export function Select({ register, options, name, className, defaultSelect, ...rest }) {
  return (
    <select className={className} {...register(name)} {...rest}>
      <option className="p-2 m-2" value="" disabled selected hidden>{defaultSelect}</option>
      {options.map((value) => (
        <option className="p-2 my-2 overflow-scroll hover:bg-gray-400 hover:cursor-pointer" key={value} value={value}>{value}</option>
      ))}
    </select>
  );
}