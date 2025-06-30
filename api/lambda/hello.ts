import { createClient } from '@supabase/supabase-js';

export const get = async () => {
  // Create a single supabase client for interacting with your database
  const supabaseUrl = 'http://wzekfytmgpxgfebmfzpa.supabase.co';
  const supabaseKey = process.env.SUPABASE_KEY;
  console.log('supabase key', supabaseKey);
  if (!supabaseKey) {
    throw new Error('SUPABASE_KEY environment variable is not set');
  }
  const supabase = createClient(supabaseUrl, supabaseKey);
  console.log('Supabase client created successfully', Math.random());

  return {
    conDetails: supabase,
  };
};