import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import Styled from "../../../assets/images/different/styled-components.webp"

export const Skills = () => {
    return (
        <div>
            <Icon iconId={'html'}/>
            <Icon iconId={'css'}/>
            <Icon iconId={'react'}/>
            <Icon iconId={'js'}/>
            <Icon iconId={'figma'}/>
            <Icon iconId={'github'}/>
            <Icon iconId={'linkedin'}/>
            <Icon iconId={'email'}/>
            <Icon iconId={'telegram'}/>
            <Icon iconId={'whatsapp'}/>
            <Icon iconId={'typescript'}/>
            <img src={Styled} alt=""/>
        </div>
    );
};
