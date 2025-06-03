export function createSlug(username: string): string {
  return username
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove marcas diacríticas
    .replace(/[^a-zA-Z0-9\s-]/g, "-") // Remove caracteres especiais, mantendo letras, números, espaços e hífens
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/-+/g, "-") // Substitui múltiplos hífens por um único hífen
    .toLowerCase()
    .trim();
}
