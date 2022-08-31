import React, {useState} from 'react';
import {Rating, ValueType} from "./Rating";

export default {
    title: 'components/Rating',
    component: Rating
};

export const Rating_0 = () => <Rating value={0} setValue={a=>a}/> ;
export const Rating_1 = () => <Rating value={1} setValue={a=>a}/> ;
export const Rating_2 = () => <Rating value={2} setValue={a=>a}/> ;
export const Rating_3 = () => <Rating value={3} setValue={a=>a}/> ;
export const Rating_4 = () => <Rating value={4} setValue={a=>a}/> ;
export const Rating_5 = () => <Rating value={5} setValue={a=>a}/> ;

export const ChangeRating = () => {
    const [rating, setRating] = useState<ValueType>(5);
    return <Rating value={rating} setValue={setRating}/>
}