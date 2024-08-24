import { memo } from "react";

function Button({ className, children, ...rest }) {
  return (
    <button
      {...rest}
      className={`bg-primary-default text-white px-2 py-1 rounded-md disabled:bg-primary-light ${className}`}
    >
      {children}
    </button>
  );
}

export default memo(Button);
