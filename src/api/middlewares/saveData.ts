import { PrismaClient } from '@prisma/client'
import { Data } from 'ws'
const prisma = new PrismaClient()

async function saveWsDataonDB(event: Data) {
    let parsedEvent: BinanceMiniTicker = JSON.parse(event.toString())
    const chartData = await prisma.chartData.create({
        data: {
            
            ticker: parsedEvent.s,
            highPrice: Number(parsedEvent.h),
            lowPrice: Number(parsedEvent.l),
            createdAt: new Date()
        },
    }).then(async () => {
        await prisma.$disconnect()
    }).catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

}

export default saveWsDataonDB