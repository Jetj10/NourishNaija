import { supabase } from "./supabase-client";

export class CustomSDK {
  constructor(entityName) {
    this.entity = entityName;
  }

  async list() {
    const { data, error } = await supabase
      .from(this.entity)
      .select("*");

    if (error) throw error;
    return data;
  }

  async get(id) {
    const { data, error } = await supabase
      .from(this.entity)
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  }

  async create(payload) {
    const { data, error } = await supabase
      .from(this.entity)
      .insert(payload)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async update(id, payload) {
    const { data, error } = await supabase
      .from(this.entity)
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from(this.entity)
      .delete()
      .eq("id", id);

    if (error) throw error;
    return true;
  }
}