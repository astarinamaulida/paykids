import ParentsChildrenListItem from "./ParentsChildrenListItem";

export default function ParentsChildrenList(props) {
  const childrensList = [
    { 
      id: 1 , 
      child_id: 1, 
      parent_id: 1,
      first_name: "Tina", 
      last_name: "Toaster",  
      account_number: 1, 
      account_balance: 500,
      active: true
    }
  ];
  
  
  const parentsList = [
    { 
      id: 1 , 
      child_id: 1, 
      first_name: "Jane", 
      last_name: "Toaster",  
      account_number: 1, 
      account_balance: 500,
      active: true,
      childrensList: childrensList 
    }
  ]


  const parsedChildren = Array.isArray(childrensList) && 
  childrensList.map(child => (
      <ParentsChildrenListItem   {...child} key={child} />));

  return (
    <div>
      <h1>I am ParentsChildrenlList</h1>
      <section> 
       {parsedChildren}
      </section>
    </div>
  )
}