import React from 'react';

interface Props {
  input: any;
  type: string | undefined;
  className: string | undefined;
  placeholder: string | undefined;
  classParent: string | undefined;
  disabled: boolean | undefined;
  autoFocus: boolean | undefined;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  meta: any;
}

const RenderInput: React.FunctionComponent<Props> = (props) => {
  const {
    input,
    type = 'text',
    className,
    classParent,
    placeholder,
    autoFocus = false,
    onKeyDown,
    disabled,
    meta: { touched, error },
  } = props;
  return (
    <div className={classParent || ''}>
      <input
        {...input}
        type={type}
        className="disabled:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        autoComplete="off"
        autoFocus={autoFocus}
        disabled={disabled}
        onKeyDown={onKeyDown ? onKeyDown : () => {}}
        onFocus={(e) => e.target.select()}
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
};

export default RenderInput;
