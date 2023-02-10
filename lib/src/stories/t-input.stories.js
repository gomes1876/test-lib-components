import tInput from '@/components/TInput'
export default {
    title: 'Troika_Design_System',
    component: tInput, parameters: {
        status: {
            type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            url: 'https://www.figma.com/file/aVF2ldvInW5FU2yhkSGmN8/Design-System-%E2%80%A2-Troika-%E2%80%A2-SFC?node-id=2734%3A51039&t=7bU6wQNxpHpl74Zf-1', // will make the tag a link
            // statuses: { ...} // add custom statuses for this story here
        }
    },
    argTypes: {
        size: {
            control: { type: 'range', min: 1, max: 12, step: 1 },
            description: 'tamanho em relação de colunas da tela'
        },
        placeholder: {
            control: { type: 'text' },
            description: 'texto normalmente utilizado para apresentar exemplo de uso ao usuário'
        }, title: {
            description: 'texto indicando o que deve ser preenchido no campo'
        }, valueDef: {
            description: 'valor que será aderido ao campo assim que for apresentado ao usuário'
        }, error: {
            description: 'torna o design dele com cores de erro e habilita a possibilidade de uma mensagem de eero, passada pelo parâmetro errorMessage'
        }, errorMessage: {
            description: 'mensagem de erro apresentada ao usuário quando error estiver como true'
        }
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

Input.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/aVF2ldvInW5FU2yhkSGmN8/Design-System-%E2%80%A2-Troika-%E2%80%A2-SFC?node-id=2733%3A78436&t=7bU6wQNxpHpl74Zf-1",
    },
}