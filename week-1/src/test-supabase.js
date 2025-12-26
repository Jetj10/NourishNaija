import { supabase } from "./lib/supabase-client";

async function testConnection() {
  const { data, error } = await supabase.from('test').select('*').limit(1);

  console.log("Supabase connected:", data, error);
}

testConnection();