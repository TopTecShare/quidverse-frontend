import React, {useState} from 'react';
import FirstItem from './FirstItem';
import SecondItem from './SecondItem';

export default function Carrousel(){
    const [item, setItem] = useState(0)
    return(
        <>
        {
            item === 0 ? <FirstItem current={item} change={setItem} /> : <SecondItem current={item} change={setItem} />
        }
        </>
    );
}