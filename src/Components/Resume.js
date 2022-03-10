import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import {InnerLayout} from '../styles/Layout';
import ResumeItem from './ResumeItem'

function Resume() {
    return (
        <ResumeStyled>
            <InnerLayout>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2553-2555'} 
                        title={'Junior High School'}
                        subTitle={'Boonwattana School'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2556-2559'} 
                        title={'Vocational Certificate (Voc. Cert.) '}
                        subTitle={'Nakhonrachasima Vocational Collage'}
                        text={'Bussiness Computer'} 
                    />
                    <ResumeItem 
                        year={'2561-2565'} 
                        title={'Bachelor Degrees '}
                        subTitle={'Thai-Nichi Institue of Technology'}
                        text={'Faculty of Information Technology (IT) '}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume