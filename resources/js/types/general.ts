export type News = {
    id: number
    title: string
    description: string
    date: Date
    image_url: string
}

export type Faculty = {
    id: number
    title: string
    description: string
    detail_url: string
    image_url: string
}

export type NewsManagementState = {
    action: "create",
} | {
    action: "delete",
    news: News
} | null

export type FacultyManagementState = {
    action: "create",
} | {
    action: "delete" | "edit",
    faculty: Faculty
} | null 