import Head from "next/head"
import Header from "../../components/header"
import PageTitle from "../../components/page-header"
import Container from "../../components/container"

import styles from "../form1/style.module.css"
import { useEffect, useState } from "react"
import Description from "../../components/description"

const Form4 = () => {
  const [text, setText] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isInputValid, setIsInputValid] = useState(false)
  const [returnedData, setReturnedData] = useState("")

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  useEffect(() => {
    if (text && isChecked) {
      setIsInputValid(true)
    } else {
      setIsInputValid(false)
    }
  }, [text, isChecked])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = await fetch("/api/form3", {
      method: "POST",
      body: JSON.stringify(text),
      headers: { 'Content-Type': 'application/json' }
    })

    if (data.status === 200) {
      const { text } = await data.json()

      setReturnedData(text)
    }
  }

  return (
    <>
      <Head>
        <title>Form4 | My Forms</title>
      </Head>

      <Header />

      <PageTitle
        pageTitle="Form4"
        postdate="2099-01-01"
        update="2099-01-01"
      />

      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Form4</h2>

          <p className={styles.text}>当サイトに関するご意見をご記入ください。</p>

          <form className={styles.form} onSubmit={submit}>

            <label htmlFor="name" className={styles.label}>
              ご意見 <span>※必須</span>
            </label>

            <textarea
              id="name"
              className={styles.input}
              placeholder="Taro Yamada"
              data-testid="name"
              autoComplete="off"
              required
              aria-required="true"
              onChange={handleTextChange}
            />

            <input
              id="check"
              type="checkbox"
              onChange={handleChange}
            />
            <label htmlFor="check">確認しました</label>

            <button
              className={styles.button}
              data-testid="submit"
              type="submit"
              name="Sign Up"
              disabled={!isInputValid}
            >
              送信する
            </button>
          </form>

          {returnedData && (
            <div className={styles.result} data-testid="result-area">
              <p>ご意見を頂戴いたしました。</p>
              <p>{returnedData}</p>
            </div>
          )}
        </div>
      </Container>

      <Description>
        <p>これまでのフォームは全て、必須項目を全て入力しないとボタンを押せない仕様になっていました。具体的にはbutton要素にdisabled属性を付与することでボタンを無効化していました。</p>

        <p>しかし、</p>

        <p>個人的には「送信した後に間違いがあることが分かり、」よりかは、「入力を終わらせないと送信できない」方がユーザー体験はいいと思っているので、基本的にはdisabled属性を付与する機会の方が多いかと思います。ただ、そのためには「送信ボタンを押そうとして、ボタンが無効化されていることに気づく」前に、さもなくば、「入力を終わらせたはずなのに何故かボタンが押せない」状態になっていまいます。</p>

        <p>そこで色々な企業のWebサイトの問い合わせフォームを確認してみると、体感9割以上は「必須項目を入力しなくてもボタンが押せる」仕様になっていました。</p>

        <p>ただ、ボタンが押せるといっても、押したときの挙動は様々です。そもそもエラーメッセージすら表示されないサイトが大半でした。</p>
      </Description>
    </>
  )
}

/* https://azukiazusa.dev/blog/use-aria-disabled-to-give-focus-to-disabled-button/ */

export default Form4