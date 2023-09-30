import React from 'react';
import iconsSprite from '../../assets/images/iconsSprite.svg'
import styled from "styled-components";

type IconPropsType ={
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox={props.viewBox || '0 0 64 64'} width={props.width || '64'} height={props.height || '64'}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} x="8" y="13"/>
        </svg>
    );
};
