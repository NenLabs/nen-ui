import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HelloWorld from '../src/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('should render', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'I am a message' } })
    expect(wrapper.text()).toContain('I am a message')
  })

  it('should be interactive', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'I am a message' } })
    expect(wrapper.text()).toContain('I am a message')

    expect(wrapper.find('.increment').exists()).toBe(true)

    expect(wrapper.find('.dec').exists()).toBe(false)

    await wrapper.get('.increment').trigger('click')

    expect(wrapper.text()).toContain('1')
  })
})