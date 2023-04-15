/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_SUPABASE_URL: 'https://iwjmtmkotlbscfsvymme.supabase.co',
    REACT_APP_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3am10bWtvdGxic2Nmc3Z5bW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwNjQ2MDUsImV4cCI6MTk5MTY0MDYwNX0.Sf3Tk9g6H64z6Z04BEbyOTHrCTifIobWV3olTTWe3A0'  
  }
 
}

module.exports = nextConfig
