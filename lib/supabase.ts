import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://atzhcjbwruoznxhfcolj.supabase.co'
 const supabaseAnonKey = 'sb_publishable_iz8uwSF1T3-4S1Ky2zQy7w_3Rd6sxZc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)