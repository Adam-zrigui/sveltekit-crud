import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import prisma from "$lib/server/prisma";
export const load: PageServerLoad = async () => {
    return {
        articles: await prisma.article.findMany()
    }
};
export const actions: Actions = {
creation:async ({request}) => {
    const { title , content}  = Object.fromEntries(await request.formData()) as {title: string, content: string};
try {
    await prisma.article.create({
        data: {
            title,
            content
        }
    })
} catch (error) {
    console.error(error)
    return fail(500, {message: "couldn't create article"})
}
return {
    status: 201,
}
},
deleteArt: async ({url}) => {
    const id = url.searchParams.get("id")
    if (!id) return fail(400, {message: "invalid request"})
    try {
        await prisma.article.delete({
            where:{id}
        })
    } catch (error) {
            console.error(error)
    return fail(500, {message: "need id"})
    }
    return {
        status: 201,
    }
}
};