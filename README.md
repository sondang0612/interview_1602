# Next.js Project

This Next.js project was initialized with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

UI referenced from [`Figma`](https://www.figma.com/design/p3pKr81WNCmBSHOCUlRSUd/Tic-Tac-Toe-%7C-Interactive-Components-(Community)?node-id=1-2&t=wGs7mN3KvLclTY5b-0).

## Getting Started

1. Clone the project:

```bash
git clone https://github.com/sondang0612/interview_1602
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

- Edit the main page in `app/page.tsx`
- The page auto-updates when you edit the file
- The project uses [Geist](https://vercel.com/font) font optimized through [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Project Structure

```
.
├── app/                # Directory containing routes and components
│   ├── layout.tsx     # Common layout for the application
│   └── page.tsx       # Main page
├── public/            # Static assets (images, fonts, etc.)
├── styles/           # CSS and style modules
└── package.json      # Dependencies and scripts
```

## Documentation

- [Next.js Documentation](https://nextjs.org/docs) - Learn about features and API

## Deployment

1. Push code to GitHub
2. Sign up for [Vercel](https://vercel.com)
3. Connect repository to Vercel
4. Vercel will automatically deploy when changes are made

See more details in the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Scripts

- `npm run dev` - Run development environment
- `npm run build` - Build application for production
- `npm start` - Run built application
- `npm run lint` - Check code for errors
