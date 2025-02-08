import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

const GalleryPage = () => {
  return (
    <>
      <SEO title="Контакты" />
      <Layout>
        <div className="info">
          <section className="content">
            <p>
              Данный сайт носит исключительно информационный характер и не
              является публичной офертой.
            </p>
            <h3>Телефоны для связи:</h3>
            <p>
              А1: <a href="tel:+375297226226">+375 29 7-226-226</a>
              <br />
              МТС: <a href="tel:+375336834818">+375 33 683-48-18</a>
            </p>
            <p>
              По вопросам приобретения луковицы после выгонки:{" "}
              <a href="tel:+375299583196">+375 29 958-31-96</a>
            </p>
            <h3>Принимаем звонки:</h3>
            <p>
              ПН-ПТ 9:00-21:00
              <br />
              СБ-ВС 9:00-18:00
            </p>
            <h3>Соцсети:</h3>
            <p>
              Instagram:{" "}
              <a href="https://www.instagram.com/nash_tulpan/">@nash_tulpan</a>
            </p>
            <h3>Адрес для самовывоза:</h3>
            <p>
              Брестская область, Пинский район, д. Почапово, ул. Набережная 21
            </p>
            <h3>⁂</h3>
            <p>
              Наш Тюльпан – Naš Ciuĺpan <br />
              Все права защищены © {new Date().getFullYear()}
            </p>
          </section>
          <section className="content">
            <iframe
              className="iframe"
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1512.7002362533735!2d26.203646658318856!3d52.14569564088969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4fba5267f335c6f!2zNTLCsDA4JzQ0LjUiTiAyNsKwMTInMTcuMSJF!5e1!3m2!1sru!2sby!4v1666293458644!5m2!1sru!2sby"
              width="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>
      </Layout>
    </>
  )
}

export default GalleryPage
