# スネークゲーム (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたスネークゲームアプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-snake/demo/

## 主要機能

### ゲーム機能
- 蛇の移動制御（キーボード・タッチ対応）
- 食べ物を食べて成長
- 壁・自分の体との衝突判定
- スコア・ハイスコア管理
- 一時停止/再開機能

### 操作方法
- **矢印キー**: 蛇を上下左右に動かす
- **スペースキー**: 一時停止/再開
- **タッチ**: スワイプで方向転換

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── snake-game/             # スネークゲーム機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── GameCanvas/     # ゲーム描画キャンバス
│       │   ├── ScoreDisplay/   # スコア表示
│       │   ├── GameHeader/     # ゲームヘッダー
│       │   ├── GameControls/   # ゲーム制御ボタン
│       │   ├── GameInstructions/ # 操作説明
│       │   └── GameOverScreen/ # ゲームオーバー画面
│       ├── SnakeGame/          # 機能ルートコンポーネント
│       ├── hooks/              # ゲーム関連カスタムフック
│       │   ├── useSnakeGame.ts       # ゲーム状態管理
│       │   ├── useKeyboardControls.ts # キーボード入力
│       │   ├── useTouchControls.ts   # タッチ入力
│       │   └── useGameRenderer.ts    # ゲーム描画
│       ├── utils/              # ゲームロジック
│       │   ├── gameUtils.ts    # ゲームロジック関数
│       │   ├── drawUtils.ts    # 描画ユーティリティ
│       │   └── storageUtils.ts # ストレージ管理
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   └── Text/                   # テキスト表示
├── stories/                    # Storybook用ストーリー
├── Config.ts                   # 設定値
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License