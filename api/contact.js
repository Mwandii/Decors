import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const OWNER_EMAIL  = 'athanasmwandi5@gmail.com'
const SENDER_EMAIL = 'onboarding@resend.dev'

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, eventType, date, guests, venue, message } = req.body

  if (!name || !phone || !eventType || !date) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from:    `Mwandi's Décor Website <${SENDER_EMAIL}>`,
      to:      OWNER_EMAIL,
      subject: `New Inquiry — ${eventType} | ${name}`,
      html:    buildEmailHTML({ name, phone, eventType, date, guests, venue, message }),
    })

    return res.status(200).json({ success: true })

  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}

function buildEmailHTML({ name, phone, eventType, date, guests, venue, message }) {
  const field = (label, value) => `
    <div style="margin-bottom:24px;">
      <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;margin-bottom:4px;">
        ${label}
      </div>
      <div style="font-size:15px;color:#3D2E1E;line-height:1.6;">
        ${value}
      </div>
      <div style="height:1px;background:#DDD5C4;margin-top:16px;"></div>
    </div>
  `

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:0;background:#f5f0e8;font-family:Georgia,serif;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;">

        <div style="background:#1A1612;padding:36px 40px;">
          <h1 style="color:#C9A84C;font-size:22px;font-weight:300;margin:0;letter-spacing:2px;">
            Mwandi's Décor
          </h1>
          <p style="color:rgba(255,255,255,0.4);font-size:11px;margin:6px 0 0;letter-spacing:3px;text-transform:uppercase;">
            New Event Inquiry
          </p>
        </div>

        <div style="padding:40px;">
          ${field('Client Name',      name)}
          ${field('Phone Number',     phone)}
          ${field('Event Type',       eventType)}
          ${field('Event Date',       date)}
          ${field('Number of Guests', guests  || 'Not specified')}
          ${field('Venue / Location', venue   || 'Not specified')}

          <div style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;margin-bottom:12px;">
            Vision & Details
          </div>
          <div style="background:#F5F0E8;padding:20px 24px;border-left:3px solid #C9A84C;">
            <p style="color:#8C7B6B;font-size:14px;line-height:1.8;margin:0;">
              ${message || 'No additional details provided.'}
            </p>
          </div>
        </div>

        <div style="background:#1A1612;padding:24px 40px;text-align:center;">
          <p style="color:rgba(255,255,255,0.3);font-size:11px;letter-spacing:1px;margin:0;">
            Submitted via the Mwandi's Décor website
          </p>
        </div>

      </div>
    </body>
    </html>
  `
}