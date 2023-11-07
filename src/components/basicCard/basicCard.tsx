import { Card, CardContent, Typography } from "@mui/material"

import style from './basicCard.module.css'
import { ReactNode } from "react"

interface BasiCardProps {
  description: string,
  value: string,
  icon?: ReactNode,
  nameClass?: string
}

// Componente para las tarjetas en el home y la información básica de cada criptomoneda
const BasicCard = ({description, value, nameClass, icon}: BasiCardProps) => {

    return (
      <Card sx={{ minWidth: 275, height: "100%" }} className={style.basicCard}>
        <CardContent className={style.contentBasicCard}>
          <Typography >
            {description}
          </Typography>
          <div className={style.icon}>
            {icon}
          </div>
          <Typography 
            variant="h5" 
            component="div"
            className={nameClass}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  export default BasicCard