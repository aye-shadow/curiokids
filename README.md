# Curio Kids

**Curio Kids** is a personalized learning platform designed to make education engaging and effective for young learners. By integrating advanced AI technologies, Curio Kids provides an interactive and customized learning experience tailored to each student's needs. The platform offers a variety of features such as AI-driven teaching, quizzes, interactive talking AI, a rich library of learning materials, and a comprehensive reporting system for feedback and issue tracking.

## Features

- **AI Teacher**: 
  - Our AI-powered teacher guides students through personalized learning paths, adapting content to their learning pace and style.
  
- **AI-Generated Quizzes**: 
  - Automatically generated quizzes help reinforce learning and assess comprehension, with instant feedback provided to students.

- **Talking AI**: 
  - An interactive AI that can engage in educational conversations, answer questions, and offer guidance in real-time.

- **Library of Learning Materials**: 
  - A vast collection of educational resources, including videos, articles, and interactive activities, curated to support diverse learning objectives.

- **Report System**: 
  - Users can report any issues or provide feedback directly through the platform, helping us to continuously improve the learning experience.

- **And Much More**: 
  - The platform is constantly evolving with new features and enhancements based on user feedback and technological advancements.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/) - A React framework that enables server-side rendering and static web applications.
  - [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
  - [Shadcn UI](https://shadcn.dev/) - A component library that leverages Tailwind CSS for building accessible, responsive, and customizable UI components.

- **Authentication**:
  - [Clerk](https://clerk.dev/) - A complete user management solution for authentication, providing an easy-to-use interface for sign-ups, logins, and managing user profiles.

- **Database & ORM**:
  - [Prisma ORM](https://www.prisma.io/) - A next-generation ORM that helps developers build data-driven applications with ease, providing a simple and intuitive API for database access.

- **AI Integration**:
  - [OpenAI](https://openai.com/) - Leveraging OpenAI's advanced machine learning models to power AI-driven features like the AI teacher, quizzes, and talking AI.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.22.x)
- A PostgreSQL database or any other relational database supported by Prisma.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/muhammad-hassaan-y2/CurioKids.git
   cd CurioKids
   ```

2. Install Dependencies:

   ``` 
   npm install
   ```
3. Set up environment variables:

Create a .env file in the root directory and add the necessary environment variables. Here’s an example:

   ``` 
  DATABASE_URL="your_database_url"
  OPENAI_API_KEY="your_openai_api_key"
  CLERK KEYS
   ```
4. Migrate the database schema:

   ``` 
    npx prisma migrate dev
   ```
5. Start the development server:

   ``` 
    npm run dev
   ```

## Contributing

We welcome contributions to Curio Kids! If you'd like to contribute, please fork the repository, make your changes, and open a pull request. Make sure to follow the code of conduct and adhere to the coding guidelines provided in the project.