

import tButton from '@/components/TButton'

export default {
    title: 'Troika_Design_System',
    component: tButton,
    argTypes: {
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md', 'lg', 'xl'],
        },
        click: {
            action: 'clicado',
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'danger', 'warning', 'success']
        },
        type: {
            control: { type: 'inline-radio' },
            options: ['contained', 'text']
        }, disabled: {
            control: { type: 'boolean' }
        },
    },
};

const Template = (args, { argTypes }) => {

    return ({
        props: Object.keys(argTypes),
        components: { tButton },
        template: '<tButton @onClick="click" v-bind="$props"><span>Example</span></tButton>',
    })
};

export const Button = Template.bind({});

Button.args = {
    type: 'contained',
    size: 'md'
};


