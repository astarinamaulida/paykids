import ParentsChildrenListItem from "./ParentsChildrenListItem";

export default function ParentsChildrenList(props) {
  let childrensList = [
    { 
      id: 1 , 
      child_id: 1, 
      parent_id: 1,
      first_name: "Tina", 
      last_name: "Toaster",  
      account_number: 1, 
      account_balance: 500,
      active: true
    },
    { 
      id: 2 , 
      child_id: 2,
      parent_id: 1, 
      first_name: "Bob", 
      last_name: "Toaster",  
      account_number: 2, 
      account_balance: 200,
      active: true
    }
  ];
  
  
  let parentsList = [
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


  // const parsedTransactions = Array.isArray(transactionsList) && 
  //   transactionsList.map(transaction => (
  //     <ParentsChildrenListItem   {...transaction} key={transaction.id} />));
  
  return (
    <div>
      <h1>I am ParentsChildrenlList</h1>
      <section> 
       <ParentsChildrenListItem />
       <ParentsChildrenListItem />
      </section>
    </div>
  )
}