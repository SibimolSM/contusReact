import React from 'react';
import styled from 'styled-components';
import tabImage from '../../assets/tab.png';
import './TabContent.css';

const TabContentWrapper = styled.div`
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    text-align:left;
    @media (max-width: 768px) {
        display: block;
    }

`;

function TabContent(props) {
    return (
        <TabContentWrapper>
            <div>
                <div className='tabHeader'>UI/UX<br /> Designers & Developers</div>
                <div>The remote UX Engineers are unicorns with deep and insightful knowledge on every stage of development from designing to deployment. They stay at the core to delight user experience.</div>
                <div className='tabSubhead'>Native Platform</div>
                <div>Pure native mobile application development service with OS-specific UI/UX created by taking advantage of the native SDKs, code libraries & 3rd party integrations available in Android & iOS.</div>
            </div>
            <div>
                <img src={tabImage} className="tabImg" width='475px' height='675px' />
            </div>

        </TabContentWrapper >

    );
}

export default TabContent;
