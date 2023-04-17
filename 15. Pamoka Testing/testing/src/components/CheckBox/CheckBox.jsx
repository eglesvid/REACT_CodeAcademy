import React from "react";

export default function CheckBox({ id, checked, onChange, label }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
      />
    </div>
  );
}
