

import tButton from '@/components/TButton'
import { action } from '@storybook/addon-actions';
import { userEvent } from '@storybook/testing-library';

export default {
    title: 'Troika_Design_System',
    parameters: {
        status: {
            type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            url: 'https://www.figma.com/file/aVF2ldvInW5FU2yhkSGmN8/Design-System-%E2%80%A2-Troika-%E2%80%A2-SFC?node-id=2734%3A51039&t=7bU6wQNxpHpl74Zf-1', // will make the tag a link
            // statuses: { ...} // add custom statuses for this story here
        }
    },
    argTypes: {
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md', 'lg', 'xl'],
            description: 'tamanho referente ao botão'
        },
        onClick: {
            description: 'ação executada ao clicar no botão'
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'danger', 'warning', 'success'],
            description: 'o tipo de botão apresentado'
        },
        type: {
            control: { type: 'inline-radio' },
            options: ['contained', 'text'],
            description: 'se o botão contiver cor no plano de fundo(contained), ou se é apresentado somente o texto(text)'
        }, disabled: {
            control: { type: 'boolean' },
            description: 'se o botão está desabilitado ou não',
            default: 'false'
        },
    },
};

const Template = (args, { argTypes }) => {

    return ({
        props: Object.keys(argTypes),
        components: { tButton },
        template: '<tButton @click="clickAction" v-bind="$props"><span>Example</span></tButton>',
        methods: { clickAction: action('botão clicado') }
    })
};



export const Button = Template.bind({});

Button.args = {
    type: 'contained',
    size: 'md'
};

Button.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/aVF2ldvInW5FU2yhkSGmN8/Design-System-%E2%80%A2-Troika-%E2%80%A2-SFC?node-id=2734%3A51039&t=7bU6wQNxpHpl74Zf-1",
    }, pseudo: { hover: true }
};




