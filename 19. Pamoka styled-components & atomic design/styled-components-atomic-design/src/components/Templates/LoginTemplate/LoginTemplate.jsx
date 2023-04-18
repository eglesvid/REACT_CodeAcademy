import React from "react";

export default function LoginTemplate(props) {
  return (
    <div>
      {props.header}
      <main>{props.section1}</main>
      {props.footer}
    </div>
  );
}

//template yra kaip puslapio skeletas. Savyje neturi konkreciu komponentu, isdelioja pagal koki templates
