import { supabase } from "./supabase";

export interface NewGuest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export async function createGuest(newGuest: NewGuest) {
  const { data, error } = await supabase.from("users").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}
