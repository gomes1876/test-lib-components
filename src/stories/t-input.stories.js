import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import tInput from '@/components/TInput'
export default {
    title: 'Troika_Design_System',
    component: tInput,
    argTypes: {
        size: {
            control: { type: 'text' },
        },
    },
};

const Template = (args, { argTypes }) => {

    return ({
        props: Object.keys(argTypes),
        components: { tInput },
        template: '<tInput v-bind="$props" />',
    })
};

export const Input = Template.bind({});

Input.args = {
    placeholder: 'pesquisa de item',
    size: 4
};


