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
                active: true,
                colors: ['#eea65e', '#ee4f00']
            },
            {
                id: uuidv4(),
                name: 'Everyday',
                artist: 'Aves',
                cover: 'https://i.scdn.co/image/ab67616d0000b273c7ca2ada3536de8f9d570732',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=41890',
                active: false,
                colors: ['#937247', '#41402b']
            },
            {
                id: uuidv4(),
                name: 'Halflife',
                artist: 'Shrimpnose',
                cover: 'https://i.scdn.co/image/ab67616d0000b27382649b5b0d2af7f4e506d3a6',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=41698',
                active: false,
                colors: ['#4a4969', '#f0d8cb']
            },
            {
                id: uuidv4(),
                name: 'Hold me Tight',
                artist: 'Philanthrope, mommy',
                cover: 'https://i.scdn.co/image/ab67616d0000b2730d16dc5cb944257bf2663458',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=42445',
                active: false,
                colors: ['#cdc6bc', '#14517d']
            },            {
                id: uuidv4(),
                name: 'Home',
                artist: 'Idealism, SwuM',
                cover: 'https://i.scdn.co/image/ab67616d0000b273d18c38b021d7cce693e47903',
                audio: 'https://mp3.chillhop.com/serve.php/?mp3=43679',
                active: false,
                colors: ['#a68574', '#4b4632']
            }
        ]
    )
}

export default chillHop;