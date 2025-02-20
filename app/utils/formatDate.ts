export const formatDate = (date): string => {
  if (!date) return "Fecha no disponible"
  const parsedDate = new Date(date)
  return isNaN(parsedDate.getTime()) ? "Fecha inválida" : parsedDate.toDateString()
}