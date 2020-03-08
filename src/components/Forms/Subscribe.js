import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { css } from '@emotion/core'
import { withTheme } from '../Theming'
import { rhythm } from '../../lib/typography'
import { bpMaxSM } from '../../lib/breakpoints'
import Message from '../ConfirmMessage/Message'
import { PleaseConfirmIllustration } from '../ConfirmMessage/Illustrations'

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM
const CONVERTKIT_PUBLIC_KEY = process.env.CONVERTKIT_PUBLIC_KEY

const PostSubmissionMessage = ({ response }) => {
  return (
    <div>
      <Message
        illustration={PleaseConfirmIllustration}
        title={`Great, one last thing...`}
        body={`I just sent you an email with the confirmation link.
          **Please check your inbox!**`}
      />
    </div>
  )
}

const SignUp = ({ theme }) => {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [response, setResponse] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async data => {
    setIsSubmitting(true)
    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        {
          method: 'post',
          body: JSON.stringify(
            { ...data, api_key: CONVERTKIT_PUBLIC_KEY, tags: ['Newsletter'] },
            null,
            2,
          ),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      const responseJson = await response.json()

      setIsSubmitting(false)
      setSubmitted(true)
      setResponse(responseJson)
      setErrorMessage(null)
    } catch (error) {
      setIsSubmitting(false)
      setSubmitted(false)
      setResponse(null)
      setErrorMessage('Something went wrong.')
    }
  }
  return (
    <div>
      {!submitted && !isSubmitting && (
        <h2
          css={css`
            margin-bottom: ${rhythm(1)};
            margin-top: 0;
          `}
        >
          Get updates with the latest articles
        </h2>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        {!submitted && (
          <div
            css={css`
              display: flex;
              align-items: flex-end;
              button {
                margin-left: 10px;
              }
              .field-error {
                display: block;
                color: ${theme.colors.red};
                font-size: 80%;
              }
              input,
              label {
                width: 100%;
              }
              ${bpMaxSM} {
                flex-direction: column;
                align-items: flex-start;
                width: auto;
                label,
                input {
                  margin: 5px 0 0 0 !important;
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                }
                button {
                  margin: 20px 0 0 0;
                }
              }
            `}
          >
            <label htmlFor="first_name">
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-end;
                `}
              >
                First Name
                {errors.first_name && (
                  <span className="field-error">First Name is Required</span>
                )}
              </div>
              <input
                ref={register({ required: true })}
                aria-label="your first name"
                aria-required="false"
                name="first_name"
                placeholder="Jane"
                type="text"
              />
            </label>
            <label
              htmlFor="email"
              css={css`
                margin-left: 10px;
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-end;
                `}
              >
                Email
                {errors.email && (
                  <span className="field-error">Email is Required</span>
                )}
              </div>
              <input
                aria-label="your email address"
                aria-required="true"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                ref={register({ required: true })}
              />
            </label>
            <button data-element="submit" type="submit" disabled={isSubmitting}>
              {!isSubmitting && 'Submit'}
              {isSubmitting && 'Submitting...'}
            </button>
          </div>
        )}
        {submitted && !isSubmitting && (
          <PostSubmissionMessage response={response} />
        )}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  )
}

export default withTheme(SignUp)
