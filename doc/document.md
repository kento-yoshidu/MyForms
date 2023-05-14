# 各フォームでやりたいこと

## Form1

- 本番環境でサイトが動作するか

## Form2

- フォームへの入力が不完全な時、エラーメッセージが表示されるか
- フォームへの入力が不完全なことを、ユーザーに伝えられるか

# 出来るところからやろう、WAI-ARIA

## 入力必須項目にはaria-requiredを付けよう

[ARIA2: aria-required プロパティによって必須項目を特定する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA2)

## aria-labelledbyでフォームとフォームタイトルを紐づけよう

[ARIA13: リージョンとランドマークに名前 (name) を付けるために、aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA13)

# テストについてあれこれ

## テストケースの書き方

### セマンティックな単語を使用しよう

「値を入力した時」ではなく、「メールアドレスを入力した時」と書こう

### 受動態ではなく、能動態で書こう

「フォームに名前が入力された時」ではなく、「フォームに名前を入力した時」と書こう
