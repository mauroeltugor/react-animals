const RandomAnimal = () => {
    const size = {
        width: '100%',
        height: '80%'
    };

    const father = {
        border: 'solid 1px black',
        width: '20%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    };

    const animals = [
        {
            title: 'Lion',
            src: require('./images/lion.jpg')
        },
        {
            title: 'Giraffe',
            src: require('./images/giraffe.jpg')
        },
        {
            title: 'Bear',
            src: require('./images/bear.jpg')
        },
        {
            title: 'Cow',
            src: require('./images/cow.jpg')
        },
        {
            title: 'Pig',
            src: require('./images/pig.jpeg')
        }
    ];

    const randomIndex = Math.floor(Math.random() * animals.length);
    const selectedAnimal = animals[randomIndex];

    return (
        <div style={father}>
            <h1>{selectedAnimal.title}</h1>
            <img style={size} src={selectedAnimal.src} alt={selectedAnimal.title} />
        </div>
    );
};

export default RandomAnimal;
