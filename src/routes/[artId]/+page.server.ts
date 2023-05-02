import prisma from "$lib/server/prisma";
import { error, type Actions, fail } from "@sveltejs/kit";
export const load = async ({params}) => {
    const { artId} = params;
    const getter = async () => {
const art = await prisma.article.findUnique({
    where:{
        id:  artId
    }
})
if (!art){
    throw error(404, "Article not found");
}
return art 
    }
    return {
        article: getter()
    }
};
export const actions: Actions = {
    updateArt: async ({request, params}) => {
        const { title , content}  = Object.fromEntries(await request.formData()) as {title: string, content: string};
        try {
            await prisma.article.update({
                where:{
                    id: params.artId
                },
                data:{
                    title,
                    content
                }
            })
        } catch (error) {
            console.error(error)
            return fail(500 ,{ message:"cound not update article"})
        }
        return {
            status: 200,
        }
    }
};