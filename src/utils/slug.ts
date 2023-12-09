function generateSlug(text: string) {
    return text
      .toString()                     // Converte para string caso não seja
      .toLowerCase()                  // Converte para minúsculas
      .normalize('NFD')               // Normaliza caracteres unicode
      .trim()                         // Remove espaços extras no início e fim
      .replace(/\s+/g, '-')           // Substitui espaços por hífens
      .replace(/[\u0300-\u036f]/g, '') // Remove caracteres diacríticos
      .replace(/[^\w\-]+/g, '')       // Remove caracteres especiais
      .replace(/\-\-+/g, '-')         // Substitui múltiplos hífens por um único hífen
      .replace(/^-+/, '')             // Remove hífens do início
      .replace(/-+$/, '');            // Remove hífens do final
  }
  
export { generateSlug }