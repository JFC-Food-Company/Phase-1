import steakAndEggs from "../images/20200914_083113.jpg";
import jfcLogo from "../images/20200401_200127.jpg";


const ketoImg = [
    `${jfcLogo}`,
    `${steakAndEggs}`
]



const ketoChoiceBreakfast = [
    {
        'item': "Steak and Eggs",
        'description': "Smoked and seared tri tip steak served with fluffy scrambled eggs",
        // 'img': `${ketoImg[1]}`
        'img': `${ketoImg[0]}`
    },
    {
        'item': "Sausage Egg Cups",
        'description': "Seasoned ground breakfast sausage, eggs, and spinach, topped with cheese and baked in a muffin form",
        'img': `${ketoImg[0]}`
    },
    {
        'item': "Tritip Jicama Hash",
        'description': "Seasoned steak, onions, bellpeppers, and diced jicama melded together with eggs and topped with shredded cheese",
        'img': `${ketoImg[0]}`
    },
    // {
    //     'item': "",
    //     'description': ""
    // },
]

export default ketoChoiceBreakfast