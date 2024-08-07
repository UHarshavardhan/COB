// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xeligvznaqlqepjdrpfl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlbGlndnpuYXFscWVwamRycGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4ODEzOTAsImV4cCI6MjAzODQ1NzM5MH0.H92A_OsZv9WZa2_g9kLAOgUXFNdxoTtXbkdQWIr-5Mo';
export const supabase = createClient(supabaseUrl, supabaseKey);
