import { useState } from 'react'
import { FiMail, FiMapPin, FiVideo, FiSend } from 'react-icons/fi'
import { profile } from '../../data/profile'
import { useReveal } from '../../hooks/useReveal'
import SectionHeading from '../shared/SectionHeading'
import styles from './Contact.module.css'

const INFO_TILES = (socials, location) => [
  {
    icon: FiMail,
    title: 'Email',
    detail: 'Email me anytime',
    value: socials.email,
    href: `mailto:${socials.email}`,
  },
  {
    icon: FiMapPin,
    title: 'Location',
    detail: location,
    value: null,
    href: null,
  },
  {
    icon: FiVideo,
    title: 'Book a Call',
    detail: "Let's connect over a 15-min virtual coffee chat!",
    value: 'Schedule on Calendly',
    href: socials.calendly,
  },
]

export default function Contact() {
  const revealRef = useReveal()
  const tiles = INFO_TILES(profile.socials, profile.location)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const endpoint = profile.socials.formspreeEndpoint
    if (!endpoint) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      })

      if (response.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`section reveal ${styles.contact}`} ref={revealRef}>
      <SectionHeading eyebrow="Contact" title="Let's Connect" />
      <p className={styles.intro}>
        I'm currently looking for exciting opportunities and would love to connect
        with people working on interesting projects and ideas. Whether you'd like to learn more
        about my work, discuss an opportunity, share what you're building, explore a
        collaboration, exchange ideas, or simply say hi, please reach out!
      </p>

      <div className={styles.grid}>
        <div className={styles.tiles}>
          {tiles.map(({ icon: Icon, title, detail, value, href }) => (
            <div key={title} className={styles.tile}>
              <span className={styles.tileIcon}>
                <Icon />
              </span>
              <span>
                <span className={styles.tileTitle}>{title}</span>
                <span className={styles.tileDetail}>{detail}</span>
                {value && href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={styles.tileValue}
                  >
                    {value}
                  </a>
                ) : (
                  value && <span className={styles.tileValue}>{value}</span>
                )}
              </span>
            </div>
          ))}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Send a Message</h3>

          <label className={styles.field}>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange('name')}
              placeholder="Your name"
              required
            />
          </label>

          <label className={styles.field}>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange('email')}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className={styles.field}>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange('message')}
              placeholder="Tell me about your project, idea, or just say hello!"
              rows={5}
              required
            />
          </label>

          <button type="submit" className={styles.submit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'} <FiSend />
          </button>

          {status === 'sent' && (
            <p className={styles.formStatus}>Thanks for reaching out! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className={styles.formStatus}>
              Something went wrong — please email me directly at{' '}
              <a href={`mailto:${profile.socials.email}`}>{profile.socials.email}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
