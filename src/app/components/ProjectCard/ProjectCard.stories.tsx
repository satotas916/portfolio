import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from '@/app/components/ProjectCard/ProjectCard';


const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  argTypes: {
    text: { 
      description: '作品の表示に利用する情報を設定します。' 
    },
  },
} satisfies Meta<typeof ProjectCard>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    url: '#',
    image: 'https://placehold.jp/460x365.png',
    title: 'ポートフォリオサイト',
    text: `<p><a href="#">こちらのポートフォリオサイトの詳細になります。</a><br>
    ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.ダミーテキスト.</p>`,
  },
};