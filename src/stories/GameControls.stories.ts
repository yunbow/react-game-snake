import type { Meta, StoryObj } from '@storybook/react';
import { GameControls } from '../features/snake-game/components/GameControls';

const meta: Meta<typeof GameControls> = {
  title: 'Features/SnakeGame/GameControls',
  component: GameControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GameNotActive: Story = {
  args: {
    onStart: () => console.log('Start game'),
    gameActive: false,
  },
};

export const GameActive: Story = {
  args: {
    onStart: () => console.log('Start game'),
    gameActive: true,
  },
};