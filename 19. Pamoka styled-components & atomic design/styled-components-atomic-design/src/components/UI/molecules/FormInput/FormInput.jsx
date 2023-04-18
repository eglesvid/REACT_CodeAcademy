import React from "react";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";

export default function FormInput({ text }) {
  return (
    <div>
      <Label text={text} />
      <Input />
    </div>
  );
}
