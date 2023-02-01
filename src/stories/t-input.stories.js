import tInput from '@/components/TInput'
export default {
    title: 'Troika_Design_System',
    component: tInput,
    argTypes: {
        size: {
            control: { type: 'range', min: 1, max: 12, step: 1 },
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


