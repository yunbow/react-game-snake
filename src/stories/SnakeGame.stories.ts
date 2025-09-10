import type { Meta, StoryObj } from '@storybook/react';
import { SnakeGame } from '../features/snake-game/SnakeGame';

const meta: Meta<typeof SnakeGame> = {
  title: 'Features/SnakeGame',
  component: SnakeGame,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};