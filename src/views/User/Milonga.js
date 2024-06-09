// milonga context 추가
import React from 'react';
import { useMilonga } from '../../contexts/MilongaContext.js';

export default function Milonga() {

    const milonga= useMilonga();

    return (
        <div>
            <h1>{milonga.milongaName}</h1>
        </div>
    );
}