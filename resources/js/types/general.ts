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

export type Service = {
    id: number
    title: string
    description: string
    url: string
}

export type Statistic = {
    id: number
    title: string
    description: string
    total: number
}

export type HeroSection = {
    id: number
    accreditation: string
    total_industry_partner: number
    total_number_of_graduate: number
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

export type ServiceManagementState = {
    action: "create",
} | {
    action: "delete" | "edit",
    service: Service
} | null

export type StatisticManagementState = {
    action: "create",
} | {
    action: "delete" | "edit",
    statistic: Statistic
} | null

export type HeroSectionManagementState = {
    action: "create",
} | {
    action: "delete" | "edit",
    heroSection: HeroSection
} | null 