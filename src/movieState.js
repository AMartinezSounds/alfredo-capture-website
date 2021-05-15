//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const MovieState = () => {
  return [
    {
      title: 'The Athlete',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“John Andrew manages to reproduce the lovable character with a recognizable charm and personality.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Implausible but entertaining and poignant, The Athlete finds the champ in fighting form for the first time in years.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '"There is nothing particularly memorable here -- no profound triumphs or lasting rallying cries."',
        },
      ],
    },
    {
      title: 'Good Times',
      mainImg: goodtimes,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'Addictive',
          description:
            '“it is a film I genuinely love and was thrilled to rewatch.”',
        },
        {
          title: 'Fantastic.',
          description:
            '“It iss escapism at its very finest, it looks visually stunning and you will be transported to a world of fantasy and imagination that is well worth the price of the ticket”',
        },
        {
          title: 'Unsurpraising.',
          description:
            '“The simple truth is that Hannah and George are still wholly unconvincing in their coupling.”',
        },
      ],
    },
    {
      title: 'The Racer',
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'Honed action escenes',
          description:
            '“Lin has really amped up the unbelievable factor here with some of the action sequences.”',
        },
        {
          title: 'An astonishing experience',
          description:
            '“Turn off the ignition in your head, then throttle up all other senses, and you will feel the rush of this guilty-pleasure joy ride to the max.”',
        },
        {
          title: 'Not bad at all.',
          description:
            '“The plot is so generic that it never even tries to reason with the audience.”',
        },
      ],
    },
  ];
};
