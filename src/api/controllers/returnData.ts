import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function findWsDataonDB() {
    const chartData = await prisma.chartData.findMany({
        where: {


        }, orderBy: {
            createdAt: "asc"
        }, take: 10
    })
    return chartData
}

export default findWsDataonDB