import { Database } from '@/types/database.types'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.DB_CONNECTION_STRING as string
const supabaseAnonKey = process.env.DB_API_KEY as string

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)