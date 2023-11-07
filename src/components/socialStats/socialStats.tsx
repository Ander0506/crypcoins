'use client'

import { Grid } from "@mui/material"
import SocialStatsComponent from "./socialStatsComponent"
import { SocialStats } from "@/models/models"
import SkeletonSocialStats from "./skeletonSocialStats"

interface SocialStatsProps {
    loading: boolean
    socialStats: SocialStats
}

// Componente para mostar estadísticas sociales de una criptomoneda
export default function SocialStats({
    loading,
    socialStats
}: SocialStatsProps) {

    const socialStatsComponent = (
        <Grid container spacing={4}>
            {socialStats?.twitter.followers_count ? (
                <SocialStatsComponent
                    nameImage="twitter.webp"
                    description1="Seguidores"
                    count1={socialStats.twitter.followers_count}
                    description2="Status"
                    count2={socialStats.twitter.status_count}
                />
            ): <></>}
            {socialStats?.reddit.avg_active_users ? (
                <SocialStatsComponent
                    nameImage="reddit.png"
                    description1="Promedio de Usuario Activos"
                    count1={socialStats.reddit.avg_active_users}
                    description2="Suscriptores"
                    count2={socialStats.reddit.subscribers}
                />
            ): <></>}
        </Grid>
    )

  return loading ? <SkeletonSocialStats /> : socialStatsComponent
}
