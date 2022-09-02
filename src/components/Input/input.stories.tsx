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
  return <><input ref={inputRef} type="text"/><button onClick={save}>save</button> - {value}</>
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>)=> {setParentValue(e.currentTarget.value)};

  return <input type="text" value={parentValue} onChange={onChange}/>
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>)=> {setParentValue(e.currentTarget.checked)};

  return <input type="checkbox" checked={parentValue} onChange={onChange}/>
};
export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined);
  const onChange = (e: ChangeEvent<HTMLSelectElement>)=> {setParentValue(e.currentTarget.value)};

  return <select  value={parentValue} onChange={onChange}>
    <option value="">none</option>
    <option value="1">Minsk</option>
    <option value="2">Moskow</option>
    <option value="3">Kiev</option>
  </select>
};
