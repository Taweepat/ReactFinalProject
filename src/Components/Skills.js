import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

function Skills({btitle,bsize,btext}) {
    return (
        <SkillsStyled>
            <div className="skills">
                        <ProgressBar 
                            title={btitle}
                            width={bsize}
                            text={btext}
                        />
            </div>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 3rem;
        grid-column-gap: 1rem;
        margin-bottom: 1rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;