import React from 'react';
import { INormalSelect } from 'interface';

interface Props {
  input: any;
  className: string | undefined;
  disabled: boolean | undefined;
  opts: Array<INormalSelect> | undefined;
  required: boolean | undefined;
  meta: any;
}

const RenderNormalSelect: React.FunctionComponent<Props> = (props) => {
  const {
    input,
    className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    disabled,
    opts,
    required = false,
    meta: { touched, error },
  } = props;

  return (
    <select
      {...input}
      // className={className}
      className="disabled:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 pr-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      style={{
        borderColor: `${touched && error ? '#FF0000' : '#c6cbd2'}`,
      }}
      disabled={disabled}
    >
      {!required && <option value={''}>-- Chọn --</option>}
      {opts &&
        !!opts.length &&
        opts.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
    </select>
  );
};

export default RenderNormalSelect;
