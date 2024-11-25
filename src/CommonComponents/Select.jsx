import React from "react";
import { Controller } from "react-hook-form";
import TextFieldSelect from "./TextFieldSelect";

function ControllerSelect(props) {
  return (
    <div>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue || ""}
        rules={{ required: props.required }}
        render={({ field: { onChange, value } }) => (
          <TextFieldSelect
            label={props.label}
            listItems={props.listItems}
            name={props.name}
            value={props.value || value || ""}
            keyValue={props.keyValue}
            displayValue={props.displayValue}
            width={props.width}
            height={props.height} // Explicit height here
            disabled={props.disabled}
            placeholder={props.placeholder || "Select"} // Default placeholder as "Select"
            handleChange={(event) => {
              onChange(event);
              props.handleChange?.(event);
            }}
          />
        )}
      />
    </div>
  );
}

export default ControllerSelect;
