# NoteIFY AI

## Introduction
Note-TionAI is a cutting-edge web application powered by Next.js. It leverages the capabilities of OpenAI's GPT-3.5-turbo model to enhance the text editing experience, making note-taking both efficient and intelligent.

## Key Features
- **AI-Powered Text Completion:** Employs GPT-3.5-turbo for smart sentence autocompletion.
- **Notebook Management:** Create and organize notebooks with ease.
- **Dynamic Thumbnails:** AI-generated thumbnails for each notebook.
- **Database Integration:** Uses `drizzle-orm` for robust database management.
- **Firebase Backend:** Secure and reliable image storage with Firebase.
- **User Authentication:** Integrated with Clerk for secure user sign-in and sign-up.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/lhlRahman/Note-TionAI.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Have the following in a .env
   ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
    DATABASE_URL= PostgreSQL Serverless URL
    OPENAI_API_KEY=
    FIREBASE_API_KEY=
   
4. Run the server:
   ```bash
   npm run dev
   ```

   
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Firebase, NeonDB, Drizzle ORM
- **AI:** OpenAI's GPT-3.5-turbo, OpenAI's Dall-E
- **Authentication:** Clerk
  

