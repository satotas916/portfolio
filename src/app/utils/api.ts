import { microcms } from "@/app/setting/micro-cms/cms";

export const getApi = async (data: { endpoint: string, queries?: { orders?: string, limit?: number }, contentId?: string }) => {
  try {
    const res = await microcms.get({
      endpoint: data.endpoint,
      queries: data.queries,
      contentId: data.contentId,
    })
    return res
  } catch (error) {
    console.error(error)
    return error
  }
}