import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';


const meta = {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    title: {
      description: 'メインテキスト'
    },
    size: {
      description: 'm または l'
    },
    tag: {
      description: '使いたいタグ名を入力'
    },
    lead: {
      description: 'タイトル上部に表示したいテキスト'
    },
    icon: {
      description: 'Material Symbols and Iconsを参照'
    }
  },
} satisfies Meta<typeof Title>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Project',
    size: 'm',
    tag: undefined,
    lead: undefined,
    icon: 'terminal'
  },
};