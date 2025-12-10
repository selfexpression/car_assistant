// Date formatting utilities for dashboard
export function formatDate(date: Date): string {
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatRelativeDate(date: Date): string {
  const now = new Date()
  const diffInDays = Math.floor(
    (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  )

  if (diffInDays === 0) {
    return 'Сегодня'
  } else if (diffInDays === 1) {
    return 'Завтра'
  } else if (diffInDays === -1) {
    return 'Вчера'
  } else if (diffInDays > 0 && diffInDays <= 7) {
    return `Через ${diffInDays} дней`
  } else if (diffInDays < 0 && diffInDays >= -7) {
    return `${Math.abs(diffInDays)} дней назад`
  } else {
    return formatDate(date)
  }
}

export function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)

  if (diffInMinutes < 1) {
    return 'Только что'
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} мин назад`
  } else if (diffInHours < 24) {
    return `${diffInHours} ч назад`
  } else if (diffInDays < 7) {
    return `${diffInDays} д назад`
  } else {
    return formatDate(date)
  }
}
