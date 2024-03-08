import ListTitle from './ListTitle';




const List = ({listData}) => {

    console.log(listData);
    return (
        <>
          <ListTitle title={listData.title}/>
          <ol>
            <li>{listData.listItems[0]}</li>
            <li>{listData.listItems[1]}</li>
            <li>{listData.listItems[2]}</li>
          </ol>
        </>
    );
};

export default List;