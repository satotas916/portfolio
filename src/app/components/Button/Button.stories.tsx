import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/app/components/Button/Button';


const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: { 
      description: 'ボタンに表示する文言を設定します。' 
    },
  },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: '一覧を見る',
    url: '#',
  },
};