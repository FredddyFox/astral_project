import Image from "../assets/maps.png";
import Image2 from "../assets/social.png";
import Image3 from "../assets/fonts.png";
import Image4 from "../assets/00.png";


//TODO Это в отдельную конст для текстов
// export const Info = {
//     problem: {
//         title: '1',
//         text: '1',
//     },
//     newProbleb: {
//         text: '1',
//     }
// }


//TODO Это в App.js
{/* <TextBlock title={Info.problem.title} text={Info.problem.text} />

<TextBlock text={Info.newProbleb.text} /> */}


export const AccessMenuName = [
    {
        label: "Местоположение деревни на карте.",
        src:Image,
        href: 1,
        text:'Координатами центра деревни Хлуднево можно считать 54°04 с.ш. и 34°56 в.д.Почтовый индекс - двести сорок девять тысяч триста тринадцать.'
        },
    {
        label:"Официальная группа деревни Хлуднево.",
        src:Image2,
        href: 1,
        text:'Для связи с людьми из деревни и более подробной информации о организуемых мероприятиях перейдите в группу.'
        },
    {
        label:"Подробная информация о восстановлении деревни.",
        src:Image3,
        href: 1,
        text:'Пожалуй главной проблемой деревни Хлуднево является ее удаленность от областного центра. Современного туриста...'
        },
    {
        label:"Видеоархив деревни Хлуднево для продвижения ремёсел.",
        src:Image4,
        href: 1,
        text:'Видеотчёты с мероприятий, рассказы людей, история возникновения и многое другое.'
        },
]