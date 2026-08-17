export type News = {
    id: number
    title: string
    description: string
    date: Date
    image_url: string
}

export type NewsManagementState = {
    action: "create",
} | {
    action: "update",
    news: News
} | null 