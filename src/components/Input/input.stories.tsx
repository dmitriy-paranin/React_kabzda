import React, {ChangeEvent, useRef, useState} from "react";

export  default {
  title: 'input',
};

export const UncontrolledInput = () => <input type="text"/>;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
  }

  return <><input type="text" onChange={onChange}/> - {value}</>
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }
  return <><input ref={inputRef} id={"inputId"} type="text"/><button onClick={save}>save</button> - {value}</>
};

