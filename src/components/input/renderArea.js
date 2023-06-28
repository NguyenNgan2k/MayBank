import React from 'react';

const RenderArea = ({
  input,
  type,
  className,
  rows,
  disabled,
  placeholder,
  meta: { touched, error },
}) => (
  <textarea
    {...input}
    type={type}
    // className={className}
    className="disabled:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    rows={rows}
    disabled={disabled}
    placeholder={placeholder || ''}
    style={{
      borderColor: `${touched && error ? '#ff5555' : '#c6cbd2'}`,
    }}
  />
);

export default RenderArea;
