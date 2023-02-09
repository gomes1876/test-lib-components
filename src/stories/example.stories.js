// *.stories.jsx
import { generateLivePreviewStory } from 'storybook-addon-jarle-monaco'

// use generateLivePreviewStory HoC to generate live preview
export const LiveEdit = generateLivePreviewStory({
    code: `() => <Button primary label={foo} />`,
    scope: {
        Button,
        foo: 'bar',
    }
})

export const LiveEditUseLivePreview = () => (
    <LivePreview
        channel={addons.getChannel()}
        code={`<Button primary label={'hello'} />`}
        providerProps={{
            scope: {
                Button,
            }
        }}
    />
)

// use LivePreview alone, you need to set showEditor manually
LiveEditUseLivePreview.parameters = {
    liveEdit: {
        showEditor: true,
    }
}