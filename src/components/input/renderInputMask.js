import React from 'react';

import TextMask from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const RenderInputMask = ({
  input,
  className,
  placeholder,
  disabled,
  allowNegative,
  allowDecimal,
  decimalLimit,
  meta: { touched, error },
}) => (
  <div>
    <TextMask
      {...input}
      maxLength="25"
      mask={createNumberMask({
        prefix: '',
        // suffix: ' đồng',
        allowNegative: allowNegative || false,
        allowDecimal: allowDecimal || false,
        decimalLimit: decimalLimit || 2,
      })}
      placeholder={placeholder || ''}
      autoComplete="off"
      // className={className}
      className="disabled:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onFocus={(e) => e.currentTarget.select()}
      disabled={disabled}
      style={{
        borderColor: `${touched && error ? '#ff5555' : '#c6cbd2'}`,
      }}
    />
    {touched && error && (
      <div
        className="text-left"
        style={{
          color: '#ff5555',
          margin: '0 0 10px',
          fontSize: '0.75rem',
        }}
      >
        {error}
      </div>
    )}
  </div>
);

export default RenderInputMask;
