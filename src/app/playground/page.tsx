/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */

'use client'

import { Container } from '@/components/Container'
import pomodoroImage from '@/images/portfolio/pomodoro.png'
import { CSSProperties } from 'react'
import './style.css'

export default function PlaygroundPage() {
  return (
    <Container className="mt-20">
      <section>
        <ul>
          <li
            onClick={(e) => {
              const target = e.target as HTMLElement
              target.scrollIntoView({ behavior: 'smooth', inline: 'center' })
            }}
          >
            <article
              style={
                {
                  '--bg': `url(${pomodoroImage.src})`,
                } as CSSProperties
              }
            >
              <a href="#">
                <span>
                  <span className="word">
                    <span className="block">
                      <button type="button">github</button>
                    </span>
                  </span>
                </span>
              </a>
            </article>
          </li>
          <li
            onClick={(e) => {
              const target = e.target as HTMLElement
              target.scrollIntoView({ behavior: 'smooth', inline: 'center' })
            }}
          >
            <article
              style={
                {
                  '--bg': `url(${pomodoroImage.src})`,
                } as CSSProperties
              }
            >
              <a href="#">
                <span>
                  <span className="word">
                    <span>github</span>
                  </span>
                </span>
              </a>
            </article>
          </li>
          <li
            onClick={(e) => {
              const target = e.target as HTMLElement
              target.scrollIntoView({ behavior: 'smooth', inline: 'center' })
            }}
          >
            <article
              style={
                {
                  '--bg': `url(${pomodoroImage.src})`,
                } as CSSProperties
              }
            >
              <a href="#">
                <span>
                  <span className="word">
                    <span>github</span>
                  </span>
                </span>
              </a>
            </article>
          </li>
          <li
            onClick={(e) => {
              const target = e.target as HTMLElement
              target.scrollIntoView({ behavior: 'smooth', inline: 'center' })
            }}
          >
            <article
              style={
                {
                  '--bg': `url(${pomodoroImage.src})`,
                } as CSSProperties
              }
            >
              <a href="#">
                <span>
                  <span className="word">
                    <span>github</span>
                  </span>
                </span>
              </a>
            </article>
          </li>
          <li
            onClick={(e) => {
              const target = e.target as HTMLElement
              target.scrollIntoView({ behavior: 'smooth', inline: 'center' })
            }}
          >
            <article
              style={
                {
                  '--bg': `url(${pomodoroImage.src})`,
                } as CSSProperties
              }
            >
              <a href="#">
                <span>
                  <span className="word">
                    <span>github</span>
                  </span>
                </span>
              </a>
            </article>
          </li>
        </ul>
      </section>
    </Container>
  )
}
