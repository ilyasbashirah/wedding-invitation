import * as React from 'react';
import style from './style.module.scss'

export interface CountingProps {
}

export default function Counting(props: CountingProps) {
    const nameText: string = 'Yasmin & Bas';
    const countingText: string = 'counting times for wedding party'
    return (
        <div className={style['container-counting']}>
            <img src={'/desktop/introduction/brideandgroom.svg'} alt={'bride-and-groom'} width={'100%'} height={'100%'} />
            <div className={style['box-tulisan']} >
                {nameText}
            </div>
            <div className={style['box-tulisan']} >
                {countingText}
            </div>
        </div>
    );
}
