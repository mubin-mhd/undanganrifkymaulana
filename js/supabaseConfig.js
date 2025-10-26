import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const configureSupabase = () => {
  const SUPABASE_URL = 'https://rqlxuolcjpdbzfzidcrz.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxbHh1b2xjanBkYnpmemlkY3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NjYxMzQsImV4cCI6MjA3NDU0MjEzNH0.1KbtQKprxnNVRHmV1SN121fepXrKPfV2QmJt3jvzfYc';

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  return supabase;
};
