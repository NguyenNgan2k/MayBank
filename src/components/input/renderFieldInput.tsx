import { FunctionComponent, useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface Props {
  input: any;
  type: string | undefined;
  className: string | undefined;
  placeholder: string | undefined;
  disabled: boolean | undefined;
  meta: any;
}

const RenderFieldInput: FunctionComponent<Props> = (props) => {
  const {
    input,
    type,
    className,
    disabled,
    placeholder,
    meta: { touched, error },
  } = props;
  const [typeInput, setTypeInput] = useState(type);

  return (
    <div className="relative">
      <input
        {...input}
        type={typeInput}
        disabled={disabled}
        className={className}
        placeholder={placeholder}
        style={{
          paddingRight: type === "password" ? "2rem" : ".75rem",
          borderColor: `${touched && error ? "#ff5555" : "#141ed2"}`,
        }}
      />
      {type === "password" && (
        <span
          className="absolute"
          style={{ top: "10px", right: "10px" }}
          onClick={() =>
            setTypeInput(typeInput === "text" ? "password" : "text")
          }
        >
          {typeInput === "text" ? (
            <EyeIcon className="h-4" />
          ) : (
            <EyeSlashIcon className="h-4" />
          )}
        </span>
      )}
      {touched && error && (
        <div
          style={{
            color: "#ff5555",
            margin: "0 0 10px",
            fontSize: "0.75rem",
            fontWeight: '600'
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default RenderFieldInput;
