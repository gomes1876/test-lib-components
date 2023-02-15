

import { ButtonDropdown, DropdownItem } from "@/components/dropdown/index"
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

    },
};

const Template = (args, { argTypes }) => {

    return ({
        props: Object.keys(argTypes),
        components: { ButtonDropdown, DropdownItem },
        template: `
        <ButtonDropdown>
            <template v-slot:iconButton>
                <span>ic</span>            
            </template >
            <template v-slot:items>
                <Itemlist text="example">
                    <span>ic</span>
                </Itemlist>
            </template>
        </ButtonDropdown> 
            `,
        methods: { clickAction: action('botão clicado') }
    })
};

export const Dropdown = Template.bind({});

Dropdown.args = {
    type: 'contained',
    size: 'md'
};
Dropdown.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/aVF2ldvInW5FU2yhkSGmN8/Design-System-%E2%80%A2-Troika-%E2%80%A2-SFC?node-id=2734%3A51039&t=7bU6wQNxpHpl74Zf-1",
    }, pseudo: { hover: true }
};






