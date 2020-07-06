const faker = require('faker');


const createSlide = () => {
    return {
        heading: faker.lorem.words(2),
        text: faker.lorem.sentences(),
        image: `${faker.image.nature()}?random=${Date.now()}`
    }
}

const onboardingData = (numUsers = 5) => {
    return Array.from({length: numUsers}, createSlide);
}

export {
    onboardingData
}