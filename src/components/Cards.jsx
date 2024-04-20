import "../layouts/Style/cards.css";

export const Avatar = () => {
  const baseUrl = 'https://api.minimalavatars.com/avatar/random'
  const avatarTypes = ['png', 'svg'] 
  const avatarName = ['John', 'Alice', 'Emma', 'Michael']
  const avatarInfo = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'Sed at odio facilisis, congue justo vel, convallis lacus...',
    'Maecenas et felis mi. Aenean vel efficitur velit. Aliquam non velit sit amet mi varius sollicitudin ac ut magna...',
    'Vivamus non massa nec enim facilisis laoreet. Suspendisse sit amet te...'
  ];
  const getRandom = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const avatars = avatarTypes.map((type) => {
    const randomName = getRandom(avatarName);
    const randomInf = getRandom(avatarInfo);
    
    return (
      <div className="card">
        <h2>{avatarName[randomName]}</h2>
        <img src={`${baseUrl}/${type}`} />
        <p>{avatarInfo[randomInf]}</p>
      </div>
    );
  });

  return <div className="container">{avatars}</div>;
};