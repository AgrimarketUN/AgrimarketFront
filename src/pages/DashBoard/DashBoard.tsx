import { CardComponent } from '@/components'
import React from 'react'
import get from "@/services/axiosService";

const DashBoard : React.FC<{}> = () => {

  React.useEffect(()=>{
    get().then((r)=>{
      console.log(r.data.results)
    }).catch((e)=>{
      console.error(e)
    })
  },[])

  return (
    <div>
       <CardComponent/>
    </div>
  )
}

export default DashBoard
