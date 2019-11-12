export interface TodoItem {
  title: string
  id: number
  description: string
  createdDate: Date
  completedDate: Date
  completed: boolean
  showDetails?: boolean
}
