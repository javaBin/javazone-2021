import React, { useState, ReactElement } from 'react';
import styles from './Button.module.scss';

export interface ActiveButton {
    name: string;
    key: number;
}

interface ButtonGroupProps {
    children: React.ReactElement<any>[];
    activeButton: (button: ActiveButton) => void;
    defaultButton?: number;
}

export function ButtonGroup(props: ButtonGroupProps) {
    const [activeButton, setActiveButton] = useState<ActiveButton | undefined>();

    function handleClick(child: ReactElement<any>, key: number) {
        const activeButton = {name: child.props.children, key};
        setActiveButton(activeButton);
        props.activeButton(activeButton);
    }

    const active = !activeButton ? props.defaultButton : activeButton.key

    return (
        <div className={styles.buttonGroup}>
            {props.children.map((child, index) => {
                return React.cloneElement(child, {
                    key: index,
                    onClick: () => handleClick(child, index),
                    className: active === index ? styles.active : ''
                });
            })}
        </div>
    )
}