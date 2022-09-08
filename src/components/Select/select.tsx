import React from "react";

type ItemType = {
  title: string
  value: any
}
type SelectPropstype = {
  value?: any
  anChange: (value: any) => void
  items: ItemType[]
}

export const Select = (props: SelectPropstype) => {
let selectedItems = props.items.find(i => i.value === props.value)

  return (
   <div>
       <select>
           <option value="1">London</option>
           <option value="2">Paris</option>
           <option value="3">Berlin</option>
       </select>
     <h3>{selectedItems && selectedItems.title}</h3>
     {props.items.map(i => <div key={i.value}>{i.title}</div>)}
   </div>
  )
  };
