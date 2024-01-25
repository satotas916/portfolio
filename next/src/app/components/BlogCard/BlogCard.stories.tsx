import type { Meta, StoryObj } from '@storybook/react';
import BlogCard from './BlogCard';


const meta = {
  title: 'Components/BlogCard',
  component: BlogCard,
  argTypes: {
    title: { 
      description: 'ブログタイトルを設定します。' 
    },
    date: { 
      description: '日付を入力してください。' 
    },
  },
} satisfies Meta<typeof BlogCard>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    url: '#',
    title: 'ポートフォリオ作成日記③',
    date: '2023.11.02'
  },
};