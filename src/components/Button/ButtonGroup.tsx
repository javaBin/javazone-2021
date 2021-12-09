import React, {ReactElement} from 'react';
import styles from './Button.module.scss';

export interface ActiveButton {
    name: string;
    value: string
    key: number;
}

interface ButtonGroupProps {
    children: React.ReactElement<any>[];
    activeButton: (button: ActiveButton) => void;
    defaultValue?: string;
}

export function ButtonGroup(props: ButtonGroupProps) {
    function handleClick(child: ReactElement<any>, key: number) {
        const activeButton = {name: child.props.children, value: child.props.value, key};
        props.activeButton(activeButton);
    }

    const active = props.children.findIndex(c => c.props.value === props.defaultValue) ?? 0

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