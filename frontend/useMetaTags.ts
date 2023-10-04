// export const useMetaTags = () => {
//     const route = useRoute()
//     const metaTags = ref({
//         title: `ПромСтрелКом | `,
//         keywords: "Промстрелком, ПСК, Материалы верхнего строения пути, Магистральные пути, Продукция для линий метрополитена, Железнодорожная продукция для лесной и торфяной промышленности и шахт, Элементы верхнего строения пути, Гарнитуры электропривода для стрелок, Стрелочные переводы",
//         url: `${route.fullPath}`,
//         description: `ПромСтрелКом | `,
//         imageUrl: ""
//     })
//     function generateMetaTagObjects(title: string, keywords: string, url: string, description: string, imageUrl: string, base: string = "https://www.pscompany.ru", type: string = "website", ) {
//         const imgUrl = `${base}${imageUrl}`
//         const metatags = [{
//             name: 'description',
//             content: `${description}`,
//         }, {
//             name: 'keywords',
//             content: `${keywords}`
//         },{
//             property: "og:url",
//             content: `https://www.pscompany.ru${url}`
//         },{
//             property: "og:type",
//             content: `${type}`
//         }, {
//             property: "og:title",
//             content: `${title}`
//         }, {
//             property: "og:description",
//             content: `${description}`
//         }, {
//             property: "og:image",
//             content: imgUrl
//         }, {
//             name: "twitter:card",
//             content: "summary_large_image"
//         }, {
//             property: "twitter:domain",
//             content: `pscompany.ru`
//         },{
//             property: "twitter:url",
//             content: imgUrl
//         },{
//             name: "twitter:title",
//             content: `${title}`
//         },{
//             name: "twitter:description",
//             content: `${description}`
//         },{
//             name: "twitter:image",
//             content: imgUrl
//         }]
//         return metatags
//     }
//     return {
//         generateMetaTagObjects,
//         metaTags
//     }
// }
