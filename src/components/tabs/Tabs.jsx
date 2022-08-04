import React, { useState, useEffect } from "react";
import "./Tabs.scss";

const Tabs = ({ activeTab, tabsList }) => {
    const [currentActiveTab, setCurrentActiveTab] = useState(0);

    useEffect(() => {
        if (activeTab !== 0 && activeTab < tabsList.length) {
            setCurrentActiveTab(activeTab);
        }
        // eslint-disable-next-line
    }, []);

    const onChangeTab = (index) => {
        setCurrentActiveTab(index);
    };

    return (
        <div className="tabs">
            <div className="labels-wrapper">
                {tabsList.map((el, i) => (
                    <div
                        className={'tab-label' + (currentActiveTab === i ? ' active-tab-label' : '')}
                        key={i}
                        onClick={() => {
                            onChangeTab(i);
                        }}
                    >
                        {el.label}
                    </div>
                ))}
            </div>
            <div className="tabs-content-wrapper">
                {tabsList.map((el, i) => (
                    <div className={'tab-content' + (currentActiveTab === i ? ' active-tab-content' : '')}
                        key={i}                    >
                        {currentActiveTab === i && el.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;