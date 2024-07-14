"use client";
import { TRadioTheme } from "@/@core/types/menu.type";
import { setCookie } from "./setCookie";
const RadioTheme = ({ label, value, defaultChecked }: TRadioTheme) => {
  const onChangeHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCookie(value);
  };
  return (
    <li>
      <label className="flex justify-between">
        <span className="label-text">{label}</span>
        <input
          type="radio"
          name="theme-radios"
          className="radio-sm theme-controller"
          defaultChecked={defaultChecked}
          value={value}
          onChange={onChangeHandle}
        />
      </label>
    </li>
  );
};

export default RadioTheme;
