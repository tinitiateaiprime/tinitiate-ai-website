'use client'

import { useState } from 'react'
import { Book, Briefcase, Clock, Mail, MessageSquare, Phone, User } from 'lucide-react'
import { submitContactForm } from '@/lib/contactForms'

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  course: '',
  preferredTime: '',
  message: '',
}

const FORM_NAME = 'request-callback'

function buildInitialForm(selectedTopic) {
  return {
    ...INITIAL_FORM,
    course: selectedTopic,
    message: selectedTopic ? `I am interested in ${selectedTopic}.` : '',
  }
}

export default function RequestCallbackPage({ course = '', service = '' }) {
  const selectedTopic = course || service
  const selectedTopicType = course ? 'course' : service ? 'service' : null

  const [form, setForm] = useState(() => buildInitialForm(selectedTopic))
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      await submitContactForm(event.currentTarget)

      setStatus('success')
      setForm(buildInitialForm(selectedTopic))
    } catch (error) {
      console.error(error)
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="bg-gradient-to-br from-green-50 to-white px-4 py-16 dark:from-slate-950 dark:to-emerald-950/40 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-lg rounded-3xl border border-green-100 bg-white p-8 text-center shadow-xl transition-colors duration-300 dark:border-emerald-900/60 dark:bg-slate-950 sm:p-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600 dark:bg-emerald-950/80 dark:text-emerald-300">
            ✓
          </div>
          <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>
          <p className="mt-4 text-gray-700 dark:text-slate-300">
            We&apos;ve received your request and will call you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="touch-target mt-8 inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Submit Another
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white px-4 py-12 dark:from-slate-950 dark:to-slate-900 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-5xl items-start gap-8 rounded-[2rem] border border-blue-100/70 bg-white/80 p-5 shadow-[0_24px_80px_rgba(37,99,235,0.08)] backdrop-blur-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/85 dark:shadow-[0_24px_80px_rgba(2,6,23,0.52)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
        <div className="space-y-6">
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-slate-800 dark:text-sky-100 dark:ring-1 dark:ring-sky-400/15">
              Let&apos;s Connect
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              {form.course ? (selectedTopicType === 'service' ? 'Service' : 'Course') : 'Request a'}{' '}
              <span className="text-blue-600">
                {form.course ? (selectedTopicType === 'service' ? 'Consultation' : 'Registration') : 'Callback'}
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-slate-300 sm:text-lg">
              {form.course
                ? selectedTopicType === 'service'
                  ? 'Share a few details and our team will connect with you about the right delivery approach, scope, and next steps.'
                  : 'Tell us a bit about yourself and our team will help you with the next steps for enrollment.'
                : 'Fill in your details and our expert consultant will reach out to you with the right training guidance.'}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              'Quick response from our team',
              'Guidance for the right course track',
              'Flexible timing based on your availability',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-4 text-sm font-medium text-blue-900 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-gray-200 bg-white p-5 shadow-lg transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 sm:p-7">
          <form
            name={FORM_NAME}
            method="POST"
            action="/api/contact"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value={FORM_NAME} readOnly />
            <input type="hidden" name="source" value="Request callback page" readOnly />
            <input type="hidden" name="topicType" value={selectedTopicType || ''} readOnly />

            <FormField icon={User}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent py-3 text-gray-900 outline-none placeholder:text-gray-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </FormField>

            <FormField icon={Mail}>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent py-3 text-gray-900 outline-none placeholder:text-gray-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </FormField>

            <FormField icon={Phone}>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                pattern="^[0-9]{10}$"
                title="Phone number should be 10 digits"
                className="w-full bg-transparent py-3 text-gray-900 outline-none placeholder:text-gray-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </FormField>

            {form.course ? (
              <FormField icon={selectedTopicType === 'service' ? Briefcase : Book}>
                <input
                  name="course"
                  type="text"
                  value={form.course}
                  readOnly
                  className="w-full bg-transparent py-3 text-gray-900 outline-none dark:text-slate-100"
                />
              </FormField>
            ) : null}

            <FormField icon={Clock}>
              <input
                name="preferredTime"
                type="text"
                placeholder="Preferred Time (e.g. Mon-Fri, 2-4pm)"
                required
                value={form.preferredTime}
                onChange={handleChange}
                className="w-full bg-transparent py-3 text-gray-900 outline-none placeholder:text-gray-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </FormField>

            <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
              <MessageSquare className="mt-4 h-5 w-5 shrink-0 text-gray-400 dark:text-slate-500" />
              <textarea
                name="message"
                rows={4}
                placeholder="Additional Message (Optional)"
                value={form.message}
                onChange={handleChange}
                className="w-full resize-y bg-transparent py-3 text-gray-900 outline-none placeholder:text-gray-400 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="touch-target inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending'
                ? (form.course ? 'Submitting...' : 'Sending...')
                : (form.course
                  ? (selectedTopicType === 'service' ? 'Request Consultation' : 'Register Now')
                  : 'Request Callback')}
            </button>

            {status === 'error' ? (
              <p role="alert" className="text-sm text-red-600">{errorMessage}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

function FormField({ children, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <Icon className="h-5 w-5 shrink-0 text-gray-400 dark:text-slate-500" />
      {children}
    </div>
  )
}
