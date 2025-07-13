import { Database } from '@/types/database.types'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.DB_CONNECTION_STRING as string
const supabaseAnonKey = process.env.DB_API_KEY as string

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

const { data: { session }, error: sessionError } = await supabase.auth.getSession();
if (!session) {
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: process.env.SUPABASE_USER || '',
    password: process.env.SUPABASE_PASSWORD || ''
  });
  if (signInError) {
    console.error('Error signing in:', signInError.message);
  }
}

if (sessionError) {
  console.error('Error getting session:', sessionError.message);
}