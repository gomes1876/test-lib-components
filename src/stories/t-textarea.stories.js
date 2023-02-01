import tTextarea from '@/components/TTextarea'

export default {
    title: 'Troika_Design_System',
    component: tTextarea,
    argTypes: {
        size: {
            control: { type: 'text' },
        },
    },
};

const Template = (args, { argTypes }) => {

    return ({
        props: Object.keys(argTypes),
        components: { tTextarea },
        template: '<tTextarea v-bind="$props" />',
    })
};

export const Textarea = Template.bind({});

Textarea.args = {
    placeholder: 'Texto de exemplo',
    size: 4
};


