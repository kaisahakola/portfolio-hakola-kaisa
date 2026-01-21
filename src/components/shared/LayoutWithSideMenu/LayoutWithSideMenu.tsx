import React, { useEffect, useState } from "react";
import ArrowItem from "../ArrowItems/ArrowItem";
import "./LayoutWithSideMenu.scss";

interface Layoutprops {
    defaultTitle: string;
    defaultItem: React.ReactNode;
    children: React.ReactNode;
}

const LayoutWithSideMenu = (props: Layoutprops) => {
    const { defaultTitle, defaultItem, children } = props;
    const [selectedItem, setSelectedItem] = useState(defaultItem);
    const [activeTitle, setActiveTitle] = useState(defaultTitle);

    useEffect(() => {
            setSelectedItem(defaultItem);
            setActiveTitle(defaultTitle);
    }, [defaultItem, defaultTitle]);

    const openItem = (title: string, item: React.ReactNode) => {
        setSelectedItem(item);
        setActiveTitle(title)
    }

    return (
        <div className="wrapper-layout-with-side-menu">
            <div className="layout-titles-container">
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return (
                            <div 
                                key={child.props.projectInfo.title} 
                                onClick={() => openItem(child.props.projectInfo.title, child)}
                                className="layout-title"
                            >
                                <ArrowItem 
                                    title={child.props.projectInfo.title} 
                                    isActive={activeTitle === child.props.projectInfo.title} 
                                />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <div className="layout-items">
                {selectedItem}
            </div>
        </div>
    )
};

export default LayoutWithSideMenu;
