import type { Meta, StoryObj } from '@storybook/react';
import { GameOverScreen } from '../features/snake-game/components/GameOverScreen';

const meta: Meta<typeof GameOverScreen> = {
  title: 'Features/SnakeGame/GameOverScreen',
  component: GameOverScreen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = {
  args: {
    visible: true,
    finalScore: 35,
    onPlayAgain: () => console.log('Play again clicked'),
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
    finalScore: 35,
    onPlayAgain: () => console.log('Play again clicked'),
  },
};