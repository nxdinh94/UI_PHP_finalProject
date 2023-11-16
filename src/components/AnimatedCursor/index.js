import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function CustomCursor() {
    return (
        <AnimatedCursor
            innerSize={24}
            outerSize={3}
            innerStyle={{
                border: '3px solid var(--cursor-color)',
                backgroundColor: '#EC5078',
                zIndex: '1010',
            }}
            outerStyle={{
                border: '3px solid var(--cursor-color)',
            }}
            color="193, 11, 111"
            outerAlpha={0.6}
            innerScale={0.7}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                {
                    target: '.custom',
                    options: {
                        innerSize: 20,
                        outerSize: 12,
                        color: '255, 255, 255',
                        outerAlpha: 0.3,
                        innerScale: 0.7,
                        outerScale: 5,
                    },
                },
            ]}
        />
    );
}
