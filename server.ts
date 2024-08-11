import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { StringDecoder } from 'string_decoder';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from a `.env` file
dotenv.config();

const PORT = process.env.PORT || 5000;

const handleRequest = (req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url || '', true);
  const decoder = new StringDecoder('utf-8');
  let body = '';

  req.on('data', (chunk) => {
    body += decoder.write(chunk);
  });

  req.on('end', () => {
    body += decoder.end();

    if (req.method === 'POST' && parsedUrl.pathname === '/send-email') {
      try {
        const { email, feedbackType, title, steps, priority } = JSON.parse(body);

        // Validate required fields
        if (!email || !feedbackType || !title || !steps || !priority) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Missing required fields' }));
          return;
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER, // Replace with your Gmail address from environment variables
            pass: process.env.GMAIL_PASS, // Replace with your Gmail password or app password from environment variables
          },
        });

        const mailOptions = {
          from: email,
          to: process.env.GMAIL_USER, // Replace with your email address from environment variables
          subject: `New Feedback: ${feedbackType} - ${title}`,
          text: `Feedback Type: ${feedbackType}\nTitle: ${title}\nSteps to Reproduce: ${steps}\nPriority Level: ${priority}\nSubmitted by: ${email}`,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Failed to send email', error }));
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Email sent successfully', info }));
          }
        });
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Failed to process request', error }));
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Route not found' }));
    }
  });
};

const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

