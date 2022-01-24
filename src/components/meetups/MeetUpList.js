import MeetUpItem from "./MeetUpItems";

function MeetUpList(props) {
  return (
    <ul>
      {props.meetup.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetUpList;
