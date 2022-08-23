import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
    return (
        [
            {
                id: uuidv4(),
                name: 'The Field From Spirited Away',
                artist: 'Sleepy Fish, coa',
                cover: 'https://i.scdn.co/image/ab67616d0000b273c7a0e5e4eb5abf35fb142254',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=36919',
                active: true
            },
            {
                id: uuidv4(),
                name: 'Everyday',
                artist: 'Aves',
                cover: 'https://i.scdn.co/image/ab67616d0000b273c7ca2ada3536de8f9d570732',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=41890',
                active: false
            },
            {
                id: uuidv4(),
                name: 'Halflife',
                artist: 'Shrimpnose',
                cover: 'https://i.scdn.co/image/ab67616d0000b27382649b5b0d2af7f4e506d3a6',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=41698',
                active: false
            }
        ]
    )
}

export default chillHop;